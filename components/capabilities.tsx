import { Icon } from "@/components/icon-library";

const CAPABILITIES = [
  {
    icon: "platform",
    name: "Software Development",
    summary: "Web platforms, backend systems, and high-concurrency databases.",
    title: "Software & Web Platform Engineering",
    detail: "Full-stack application development prioritizing latency reduction, relational database integrity, and high-concurrency microservices that run continuously in production.",
    tags: ["Go / Python / Node", "PostgreSQL", "Docker & K8s", "High Uptime"],
  },
  {
    icon: "ai",
    name: "AI & Machine Learning",
    summary: "Models that change a decision, not notebooks trapped in a lab.",
    title: "Applied AI & Machine Learning Systems",
    detail: "Deploying operational language models, classification pipelines, and anomaly detection algorithms that directly accelerate human decisions and eliminate manual review bottlenecks.",
    tags: ["Applied LLMs", "Time-series ML", "Vector Embeddings", "Model Observability"],
  },
  {
    icon: "finance",
    name: "Fintech Solutions",
    summary: "Transaction systems where correctness is the product.",
    title: "Fintech Platforms & Transaction Engines",
    detail: "High-availability ledger engines, automated bank reconciliations, USSD cellular gateways, and fraud-resistant financial conduits where correctness is non-negotiable.",
    tags: ["Double-Entry Ledgers", "USSD Integrations", "Real-Time Reconciliation", "Bank APIs"],
  },
  {
    icon: "location",
    name: "IoT Engineering",
    summary: "From hardware device signal to an interface people can trust.",
    title: "IoT Engineering & Geospatial Telemetry",
    detail: "Low-latency GPS streaming, automated sensor jitter elimination, route reconstruction, and national fleet telemetry architectures handling hundreds of thousands of active devices.",
    tags: ["GPS Telemetry", "Fleet Visibility", "Geofencing", "Monitoring"],
  },
  {
    icon: "automation",
    name: "Automation Engineering",
    summary: "Remove repetitive human work — and keep it observable.",
    title: "Operational & Testing Automation",
    detail: "Custom daemons that orchestrate multi-step business procedures, eliminate error-prone data entry, and autonomously test production environments 24/7 without manual intervention.",
    tags: ["Continuous Validation", "Scheduled Daemons", "Workflow Synthesis", "Observable Ops"],
  },
  {
    icon: "mobile",
    name: "Mobile Applications",
    summary: "Mobile experiences built for real networks and real hands.",
    title: "Mobile Applications (iOS & Android)",
    detail: "Crafted with offline-first caching, graceful degradation in spotty network zones, and intuitive ergonomic interfaces for delivery personnel, field agents, and end consumers.",
    tags: ["Offline First", "Field-Tested UX", "React Native / Flutter", "Real-Time Sync"],
  },
  {
    icon: "health",
    name: "Healthcare Technology",
    summary: "Digital health software and data systems, engineered with care.",
    title: "Healthcare & Clinical Software Systems",
    detail: "Secure digital health software built around clinical workflows, patient record privacy, regulatory compliance, and dependable high-uptime scheduling architectures.",
    tags: ["Clinical Data", "Patient Privacy", "Appointment Dispatch", "High Reliability"],
  },
  {
    icon: "agent",
    name: "Agentic Flow",
    summary: "AI agents that plan, use tools, and coordinate work.",
    title: "Agentic Flow & Multi-Agent Systems",
    detail: "Design task-driven agent systems that plan steps, select tools, share context, and verify results with observable checkpoints and human approval where needed.",
    tags: ["Agent Orchestration", "Tool Access", "Shared Context", "Human Review"],
  },
];

const AGENTS = [
  { role: "Research", title: "Gather context", body: "Finds relevant records and source data." },
  { role: "Build", title: "Create the summary", body: "Transforms approved inputs into a report." },
  { role: "Verify", title: "Check before delivery", body: "Validates the output for review." },
];

export function Capabilities() {
  return (
    <section className="section section-capabilities" id="capabilities" aria-labelledby="capabilities-title">
      <div className="wrap">
        <div className="section-heading section-heading-wide compact-heading">
          <div>
            <p className="section-kicker">04 / CAPABILITIES</p>
            <h2 id="capabilities-title">
              From complex challenges
              <br />
              <span>to real solutions.</span>
            </h2>
            <p className="section-intro">Eight capabilities, grounded in the realities of production.</p>
          </div>
        </div>
        <div className="capability-grid">
          {CAPABILITIES.map((capability) => (
            <details key={capability.icon} className="capability-card">
              <summary>
                <span className="capability-icon">
                  <Icon name={capability.icon} />
                </span>
                <div className="capability-copy">
                  <h3>{capability.name}</h3>
                  <p className="capability-description">{capability.summary}</p>
                </div>
                <span className="capability-toggle" aria-hidden="true" />
              </summary>
              <div className="capability-detail">
                <p className="capability-detail-title">{capability.title}</p>
                <p>{capability.detail}</p>
                <div className="tag-list">
                  {capability.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>

        <div className="agentic-flow" id="agentic-flow">
          <div className="agentic-flow-copy">
            <p className="section-kicker">AGENTIC FLOW</p>
            <h3>
              Agents that <em>build the flow.</em>
            </h3>
            <p>
              We shape agent workflows around clear tasks: plan the steps, assemble the right specialist
              agents, connect tools with boundaries, then verify the result.
            </p>
            <ol className="agentic-steps">
              <li>
                <span>01</span> Define the goal and constraints
              </li>
              <li>
                <span>02</span> Assign work across agents and tools
              </li>
              <li>
                <span>03</span> Review outputs before delivery
              </li>
            </ol>
            <a className="text-link" href="#contact">
              Discuss an agent workflow <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="flow-board" aria-label="Agent builder orchestration preview">
            <div className="flow-board-top">
              <span>AGENT BUILDER / ORCHESTRATION PREVIEW</span>
              <span className="flow-live">
                <i /> FLOW ACTIVE
              </span>
            </div>
            <div className="flow-node flow-task">
              <span>TASK BRIEF</span>
              <b>Prepare a monthly expense summary</b>
            </div>
            <div className="flow-node flow-builder">
              <span>FLOW BUILDER</span>
              <b>Plan · assign · coordinate</b>
            </div>
            <svg className="flow-wires" viewBox="0 0 600 56" preserveAspectRatio="none" aria-hidden="true">
              <path d="M300 0 C300 22 100 22 100 56" />
              <path d="M300 0 V56" />
              <path d="M300 0 C300 22 500 22 500 56" />
            </svg>
            <div className="flow-agents">
              {AGENTS.map((agent, index) => (
                <article key={agent.role} className="flow-agent">
                  <div>
                    <span className="flow-agent-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flow-agent-role">{agent.role}</span>
                  </div>
                  <h4>{agent.title}</h4>
                  <p>{agent.body}</p>
                </article>
              ))}
            </div>
            <div className="flow-gate">
              <div>
                <span>HUMAN REVIEW GATE</span>
                <b>READY FOR APPROVAL</b>
              </div>
              <span className="flow-progress" aria-hidden="true">
                <i />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
