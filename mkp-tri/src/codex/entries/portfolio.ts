import type { CodexEntry } from "../schema/entry";

export const portfolioContinuum: CodexEntry = {
    id: "portfolio-continuum",
    title: "Portfolio Continuum",
    sector: "experience",
    synopsis: "Secure portfolio channel with login redirect fix and loader telemetry.",
    tags: [
        { slug: "portfolio", label: "Portfolio" },
        { slug: "ux", label: "UX" },
    ],
    sources: [
        { type: "human", actor: "MK-Operator" },
    ],
    pulses: [
        {
            timestamp: "2025-12-22T12:20:00Z",
            summary: "Redirect guard spec approved; awaiting implementation.",
            delta: { redirect: "/login?redirect=/portfolio" },
        },
    ],
    status: "draft",
    priority: "gamma",
    updatedAt: "2025-12-22T12:20:00Z",
};
