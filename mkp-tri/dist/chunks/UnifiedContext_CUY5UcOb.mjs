import { c as codexEntries, o as omniInterface, a as genesisAnchor } from './index_DTCHA2qR.mjs';

function getUnifiedState(omni) {
  return {
    genesis: genesisAnchor,
    omni: omniInterface,
    codex: codexEntries,
    signal: omni?.signature ?? {},
    cycle: omni?.cycle ?? "",
    keyValid: omni?.keyValid ?? false,
    diagnostics: omni?.diagnostics ?? {}
  };
}

export { getUnifiedState as g };
