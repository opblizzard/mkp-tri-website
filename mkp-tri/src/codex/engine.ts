import type { CodexEntry } from "./schema/entry";
import { codexEntries, getEntryById } from "./entries";

export type CodexQuery = {
    sector?: string;
    tag?: string;
    text?: string;
};

export class CodexEngine {
    static list(): CodexEntry[] {
        return [...codexEntries].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    }

    static findById(id: string): CodexEntry | undefined {
        return getEntryById(id);
    }

    static search(query: CodexQuery): CodexEntry[] {
        return this.list().filter((entry) => {
            if (query.sector && entry.sector !== query.sector) {
                return false;
            }

            if (query.tag && !entry.tags.some((tag) => tag.slug === query.tag)) {
                return false;
            }

            if (query.text) {
                const haystack = `${entry.title} ${entry.synopsis}`.toLowerCase();
                if (!haystack.includes(query.text.toLowerCase())) {
                    return false;
                }
            }

            return true;
        });
    }

    static toJSON(): { entries: CodexEntry[]; generatedAt: string } {
        return {
            entries: this.list(),
            generatedAt: new Date().toISOString(),
        };
    }
}
