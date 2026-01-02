import type { CodexEntry } from "../schema/entry";

export const omniInterface: CodexEntry = {
    id: "omni-interface",
    title: "Omni LLM Operations",
    sector: "operations",
    synopsis: "LLM-driven operator that can read, write, and annotate codex entries with guard rails.",
    tags: [
        { slug: "omni", label: "Omni" },
        { slug: "llm", label: "LLM" },
    ],
    sources: [
        { type: "system", actor: "OmniLLMProxy", reference: "worker://omni-llm" },
    ],
    pulses: [
        {
            timestamp: "2025-12-22T11:15:00Z",
            summary: "Proxy worker scaffolding established with safety envelope.",
            delta: { safeguards: ["rate-limit", "tag-whitelist"] },
        },
    ],
    status: "active",
    priority: "beta",
    updatedAt: "2025-12-22T11:15:00Z",
};
