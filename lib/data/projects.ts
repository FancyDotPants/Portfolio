export type Project = {
  slug: string
  name: string
  summary: string
  stack: string[]
  role: string
  timeline: string
  problem: string
  goals: string[]
  architecture: string
  decisions: { decision: string; reasoning: string }[]
  tradeoffs: { tradeoff: string; explanation: string }[]
  challenges: string
  performance: string
  scalability: string
  security: string
  lessons: string
}

export const projects: Project[] = [
  {
    slug: 'flight-dashboard',
    name: 'Flight Dashboard',
    summary: 'A real-time flight operations dashboard with live filtering and search over a continuously updating dataset.',
    stack: ['TypeScript', 'React', 'REST/WebSocket data feed'],
    role: 'Sole engineer',
    timeline: 'Built during airline engineering work',
    problem:
      'Operations staff needed to monitor many simultaneous flights — status, delays, gate changes — and narrow that list quickly during high-pressure moments, without the interface lagging behind the real world.',
    goals: [
      'Reflect live status changes without a manual refresh',
      'Let staff filter and search a large, fast-changing list without perceived delay',
      'Stay legible under stress: clear states, no ambiguous loading, no silent failure',
    ],
    architecture:
      'The dashboard is a client-rendered React/TypeScript application backed by a live data feed. Flight records flow into a normalized client-side store keyed by flight ID, so updates to a single flight patch one record instead of triggering a full list re-fetch or re-render. Filtering and search run against this in-memory store rather than round-tripping to the server on every keystroke, which keeps interaction latency independent of network conditions.',
    decisions: [
      {
        decision: 'Normalized, keyed client store instead of a raw array of flight objects',
        reasoning:
          'Real-time updates arrive per-flight. A keyed structure turns "flight 482 changed gate" into an O(1) update instead of scanning and replacing an array, which matters once the list is large and updates are frequent.',
      },
      {
        decision: 'Debounced, client-side filtering rather than server-side search-as-you-type',
        reasoning:
          'With the dataset already resident on the client, filtering locally removes network latency from the interaction entirely — search feels instant because it never leaves the browser.',
      },
    ],
    tradeoffs: [
      {
        tradeoff: 'Client-held dataset vs. server-side pagination',
        explanation:
          'Holding the working dataset in memory makes filtering instant but caps how large a single view can scale before memory and initial load time become a concern. For an operations dashboard with a bounded, human-scale number of concurrent flights, that ceiling was well above the real requirement, so the simplicity and responsiveness won out over building server-side pagination up front.',
      },
    ],
    challenges:
      'The core difficulty was correctness under concurrent updates: two status changes for the same flight arriving close together needed to resolve in the right order, not whichever network response happened to land last. Updates were applied with a last-write-wins rule keyed to a server-provided timestamp rather than arrival order, so an out-of-order network response can never overwrite newer data.',
    performance:
      'Because filtering and search never hit the network, interaction latency is bounded by render time, not round-trip time. List rendering uses windowing so the DOM cost stays flat regardless of how many flights are being tracked.',
    scalability:
      'The per-flight keyed update model scales with update frequency far better than list-replacement approaches would, and the architecture leaves a clear seam for adding server-side pagination later if the operational dataset outgrows a single in-memory view.',
    security:
      'The dashboard is read-heavy operational tooling; all write actions are deliberately kept out of this client and routed through authenticated backend systems, so the dashboard itself has no privileged write path to compromise.',
    lessons:
      'This project reinforced that "real-time" is a data-modeling problem before it is a networking problem — the update strategy (per-record, timestamp-ordered) mattered more to correctness than the transport mechanism carrying it.',
  },
  {
    slug: 'health-monitoring',
    name: 'Health Monitoring Companion',
    summary: 'A wellness check-in app that periodically asks the user simple questions and automatically alerts a trusted contact if the user stops responding.',
    stack: ['Java'],
    role: 'Sole engineer',
    timeline: 'Independent project',
    problem:
      'People living alone — particularly elderly users or those with health conditions — often have no automatic way to signal that something is wrong if they become unresponsive. Family members have no visibility unless they proactively check in.',
    goals: [
      'Periodically prompt the user with simple check-in questions',
      'Detect non-response reliably, without false alarms from a missed notification or a busy moment',
      'Escalate to a stored emergency contact automatically when non-response persists',
    ],
    architecture:
      'The app runs a scheduled check-in cycle: at configured intervals it prompts the user with a lightweight question, starts a response window, and tracks whether an answer arrives inside that window. A missed window increments an escalation counter rather than triggering an immediate call, and the emergency contact flow — including the stored phone number and outbound call/notification trigger — only fires once that counter crosses a threshold, so a single missed prompt cannot page a family member for a false alarm.',
    decisions: [
      {
        decision: 'Escalation counter with a threshold, instead of alerting on the first missed check-in',
        reasoning:
          'A single missed notification is a common, low-signal event — the phone was on silent, the person was in the shower. Requiring a pattern of misses before escalating keeps the alert meaningful and trustworthy instead of noisy.',
      },
      {
        decision: 'Contact information and thresholds stored locally and configured by the user up front',
        reasoning:
          'The alerting path has to work even if the user is unresponsive and cannot approve anything in the moment, so the emergency contact and calling permission are captured as setup steps, not something requested reactively during an actual emergency.',
      },
    ],
    tradeoffs: [
      {
        tradeoff: 'Fixed escalation threshold vs. adaptive/learned check-in patterns',
        explanation:
          'A fixed, user-configurable threshold is predictable and easy for a non-technical user (or their family) to reason about — "three missed check-ins triggers a call." An adaptive model could reduce false positives further but would make the app\u2019s behavior harder to explain and trust, which matters enormously for something tied to a person\u2019s safety.',
      },
    ],
    challenges:
      'The hardest part was designing for a failure mode that must never occur silently: if the check-in scheduler itself fails to run, the app produces no evidence anything is wrong, which is worse than the problem it solves. This pushed the check-in cycle and the escalation trigger to be handled as independent, verifiable state rather than a single monolithic background loop.',
    performance:
      'The app is intentionally lightweight — periodic scheduled prompts rather than continuous background monitoring — so it has negligible battery and resource impact between check-ins.',
    scalability:
      'The check-in/escalation model generalizes past a single contact: the same threshold-and-escalate structure could support multiple contacts or escalation tiers (family, then a caregiver service) without changing the core scheduling logic.',
    security:
      'The emergency contact number and health check-in state are personal, sensitive data by nature, so they are stored locally on-device rather than in a third-party service, and the outbound call/notification path is scoped to the single stored contact rather than a general messaging capability.',
    lessons:
      'Building something meant to be trusted in an emergency clarified how much of "reliability" is actually about designing failure states deliberately, not just handling the happy path well.',
  },
  {
    slug: 'reaction-timer',
    name: 'Reaction Timer',
    summary: 'A focused Vue application that measures a user\u2019s reaction speed with millisecond-level precision.',
    stack: ['Vue'],
    role: 'Sole engineer',
    timeline: 'Independent project',
    problem:
      'Measuring human reaction time accurately in a browser is deceptively hard: naive timing approaches are easily thrown off by rendering delays, animation frame timing, and input lag, which can distort the very thing being measured.',
    goals: [
      'Measure reaction time with millisecond precision',
      'Remove visual or timing cues that could let a user anticipate rather than react',
      'Keep the interaction itself simple enough that the UI never becomes the bottleneck',
    ],
    architecture:
      'The app is a small, focused Vue single-page application. Timing is captured using the browser\u2019s high-resolution performance clock rather than Date.now(), and the stimulus-to-input measurement window starts on an animation-frame-aligned trigger to avoid attributing render latency to the user\u2019s reaction time. Component state is intentionally minimal — a single state machine (idle → waiting → active → result) — since the accuracy of the measurement mattered far more than any UI complexity.',
    decisions: [
      {
        decision: 'High-resolution performance timer instead of Date.now()',
        reasoning:
          'Date.now() has coarser resolution and is subject to system clock adjustments; a monotonic high-resolution clock is what timing-sensitive measurement in the browser is meant for.',
      },
      {
        decision: 'Randomized stimulus delay before each trial',
        reasoning:
          'A fixed or predictable delay lets a user learn the timing and anticipate the stimulus rather than genuinely react to it, which would invalidate the measurement the app exists to produce.',
      },
    ],
    tradeoffs: [
      {
        tradeoff: 'Single-state-machine simplicity vs. a more elaborate trial/analytics system',
        explanation:
          'The app deliberately stays scoped to accurate single-trial measurement rather than building out multi-trial statistics, history, or accounts. For a tool whose entire value is measurement accuracy, added surface area would have been complexity competing with the one thing worth getting right.',
      },
    ],
    challenges:
      'The core challenge was distinguishing "the user reacted slowly" from "the browser rendered slowly." Aligning the start of the measurement window to the frame in which the stimulus actually becomes visible \u2014 rather than the moment the state change is triggered in code \u2014 was necessary to keep the measurement honest.',
    performance:
      'The interaction path is deliberately minimal: no unnecessary reactivity or watchers sit between the stimulus trigger and the timer, keeping the measurement overhead itself negligible relative to typical human reaction times (100\u2013400ms).',
    scalability:
      'As a self-contained client-side tool with no backend dependency, it scales trivially \u2014 the interesting scaling question was precision, not throughput.',
    security:
      'The app has no user data collection, accounts, or network dependency, which removes an entire category of concern by design rather than by added controls.',
    lessons:
      'This was a useful lesson in how much of "accuracy" in a UI is really about understanding the browser\u2019s rendering and timing pipeline, not the business logic sitting on top of it.',
  },
]
