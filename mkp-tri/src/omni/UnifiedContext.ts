// UnifiedContext.ts
// Provides unified Genesis, Codex, and Omni state for UI/components
import { codexEntries } from '../codex/entries';
import { genesisAnchor } from '../codex/entries/genesis';
import { omniInterface } from '../codex/entries/omni';

export function getUnifiedState(omni: any) {
  return {
    genesis: genesisAnchor,
    omni: omniInterface,
    codex: codexEntries,
    signal: omni?.signature ?? {},
    cycle: omni?.cycle ?? '',
    keyValid: omni?.keyValid ?? false,
    diagnostics: omni?.diagnostics ?? {},
  };
}
