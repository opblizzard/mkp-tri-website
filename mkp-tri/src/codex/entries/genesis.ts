import type { CodexEntry } from "../schema/entry";

export const genesisAnchor: CodexEntry = {
    id: "genesis-anchor",
    title: "Genesis Protocol Anchor",
    sector: "foundational",
    synopsis: "Root ledger binding Omni, Codex, and Portfolio telemetry into a single provenance spine.",
    tags: [
        { slug: "protocol", label: "Protocol" },
        { slug: "genesis", label: "Genesis" },
    ],
    sources: [
        { type: "genesis", actor: "GenesisWorker", reference: "genesis://anchor" },
    ],
    pulses: [
        {
            timestamp: "2025-12-22T10:00:00Z",
            summary: "Anchor promoted to sync Omni and Codex streams.",
            delta: { codexVersion: "1.0.0", omniBindings: 3 },
        },
    ],
    status: "active",
    priority: "alpha",
    updatedAt: "2025-12-22T10:00:00Z",
};
