import { c as codexEntries, g as getEntryById } from './index_DTCHA2qR.mjs';

class CodexEngine {
  static list() {
    return [...codexEntries].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }
  static findById(id) {
    return getEntryById(id);
  }
  static search(query) {
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
  static toJSON() {
    return {
      entries: this.list(),
      generatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
}

export { CodexEngine as C };
