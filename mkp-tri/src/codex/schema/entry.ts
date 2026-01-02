export type CodexTag = {
    slug: string;
    label: string;
};

export type CodexSource = {
    type: "genesis" | "omni" | "human" | "system";
    actor: string;
    reference?: string;
};

export type CodexPulse = {
    timestamp: string; // ISO 8601
    summary: string;
    delta: Record<string, unknown>;
};

export type CodexEntry = {
    id: string;
    title: string;
    sector: string;
    synopsis: string;
    tags: CodexTag[];
    sources: CodexSource[];
    pulses: CodexPulse[];
    status: "draft" | "active" | "archived";
    priority: "alpha" | "beta" | "gamma";
    updatedAt: string;
};

export function assertCodexEntry(payload: CodexEntry): CodexEntry {
    const requiredFields: Array<keyof CodexEntry> = [
        "id",
        "title",
        "sector",
        "synopsis",
        "tags",
        "sources",
        "pulses",
        "status",
        "priority",
        "updatedAt",
    ];

    for (const field of requiredFields) {
        if (payload[field] === undefined || payload[field] === null) {
            throw new Error(`CodexEntry missing required field: ${field}`);
        }
    }

    return payload;
}
