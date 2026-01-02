const genesisAnchor = {
  id: "genesis-anchor",
  title: "Genesis Protocol Anchor",
  sector: "foundational",
  synopsis: "Root ledger binding Omni, Codex, and Portfolio telemetry into a single provenance spine.",
  tags: [
    { slug: "protocol", label: "Protocol" },
    { slug: "genesis", label: "Genesis" }
  ],
  sources: [
    { type: "genesis", actor: "GenesisWorker", reference: "genesis://anchor" }
  ],
  pulses: [
    {
      timestamp: "2025-12-22T10:00:00Z",
      summary: "Anchor promoted to sync Omni and Codex streams.",
      delta: { codexVersion: "1.0.0", omniBindings: 3 }
    }
  ],
  status: "active",
  priority: "alpha",
  updatedAt: "2025-12-22T10:00:00Z"
};

const omniInterface = {
  id: "omni-interface",
  title: "Omni LLM Operations",
  sector: "operations",
  synopsis: "LLM-driven operator that can read, write, and annotate codex entries with guard rails.",
  tags: [
    { slug: "omni", label: "Omni" },
    { slug: "llm", label: "LLM" }
  ],
  sources: [
    { type: "system", actor: "OmniLLMProxy", reference: "worker://omni-llm" }
  ],
  pulses: [
    {
      timestamp: "2025-12-22T11:15:00Z",
      summary: "Proxy worker scaffolding established with safety envelope.",
      delta: { safeguards: ["rate-limit", "tag-whitelist"] }
    }
  ],
  status: "active",
  priority: "beta",
  updatedAt: "2025-12-22T11:15:00Z"
};

const portfolioContinuum = {
  id: "portfolio-continuum",
  title: "Portfolio Continuum",
  sector: "experience",
  synopsis: "Secure portfolio channel with login redirect fix and loader telemetry.",
  tags: [
    { slug: "portfolio", label: "Portfolio" },
    { slug: "ux", label: "UX" }
  ],
  sources: [
    { type: "human", actor: "MK-Operator" }
  ],
  pulses: [
    {
      timestamp: "2025-12-22T12:20:00Z",
      summary: "Redirect guard spec approved; awaiting implementation.",
      delta: { redirect: "/login?redirect=/portfolio" }
    }
  ],
  status: "draft",
  priority: "gamma",
  updatedAt: "2025-12-22T12:20:00Z"
};

const codexEntries = [genesisAnchor, omniInterface, portfolioContinuum];
function getEntryById(id) {
  return codexEntries.find((entry) => entry.id === id);
}

export { genesisAnchor as a, codexEntries as c, getEntryById as g, omniInterface as o };
