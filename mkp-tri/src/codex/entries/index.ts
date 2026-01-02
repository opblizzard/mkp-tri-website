import { genesisAnchor } from "./genesis";
import { omniInterface } from "./omni";
import { portfolioContinuum } from "./portfolio";
import type { CodexEntry } from "../schema/entry";

export const codexEntries: CodexEntry[] = [genesisAnchor, omniInterface, portfolioContinuum];

export function getEntryById(id: string): CodexEntry | undefined {
    return codexEntries.find((entry) => entry.id === id);
}
