var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../src/codex/entries/genesis.ts
var genesisAnchor = {
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

// ../src/codex/entries/omni.ts
var omniInterface = {
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

// ../src/codex/entries/portfolio.ts
var portfolioContinuum = {
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

// ../src/codex/entries/index.ts
var codexEntries = [genesisAnchor, omniInterface, portfolioContinuum];
function getEntryById(id) {
  return codexEntries.find((entry) => entry.id === id);
}
__name(getEntryById, "getEntryById");

// ../src/codex/engine.ts
var CodexEngine = class {
  static {
    __name(this, "CodexEngine");
  }
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
};

// codex-worker.ts
var JSON_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};
var STREAM_HEADERS = {
  "Content-Type": "text/event-stream",
  "Cache-Control": "no-cache",
  Connection: "keep-alive"
};
function json(body, init) {
  return new Response(JSON.stringify(body, null, 2), {
    headers: JSON_HEADERS,
    ...init
  });
}
__name(json, "json");
async function ensureAuth(request, env) {
  const token = request.headers.get("x-codex-key");
  if (!env.CODEX_WRITE_TOKEN || token !== env.CODEX_WRITE_TOKEN) {
    throw new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: JSON_HEADERS
    });
  }
}
__name(ensureAuth, "ensureAuth");
async function persistMutation(env, entry) {
  if (!env.CODEX_MUTATIONS) {
    return;
  }
  const key = `mutation:${entry.id}:${Date.now()}`;
  await env.CODEX_MUTATIONS.put(key, JSON.stringify(entry));
}
__name(persistMutation, "persistMutation");
function normalizePayload(data) {
  if (!data || typeof data !== "object") {
    throw new Response(JSON.stringify({ error: "Invalid payload" }), {
      status: 400,
      headers: JSON_HEADERS
    });
  }
  const fallbackTimestamp = (/* @__PURE__ */ new Date()).toISOString();
  const entry = {
    id: data.id ?? crypto.randomUUID(),
    title: data.title ?? "Untitled Codex Entry",
    sector: data.sector ?? "unclassified",
    synopsis: data.synopsis ?? "Pending synopsis",
    tags: Array.isArray(data.tags) ? data.tags : [],
    sources: Array.isArray(data.sources) ? data.sources : [{ type: "system", actor: "codex-worker" }],
    pulses: Array.isArray(data.pulses) ? data.pulses : [],
    status: data.status ?? "draft",
    priority: data.priority ?? "gamma",
    updatedAt: data.updatedAt ?? fallbackTimestamp
  };
  return entry;
}
__name(normalizePayload, "normalizePayload");
async function handleGetEntries(request) {
  const url = new URL(request.url);
  const sector = url.searchParams.get("sector") ?? void 0;
  const tag = url.searchParams.get("tag") ?? void 0;
  const text = url.searchParams.get("q") ?? void 0;
  const entries = sector || tag || text ? CodexEngine.search({ sector, tag, text }) : CodexEngine.list();
  return json({ entries, generatedAt: (/* @__PURE__ */ new Date()).toISOString() });
}
__name(handleGetEntries, "handleGetEntries");
async function handleGetEntry(id) {
  const entry = CodexEngine.findById(id);
  if (!entry) {
    return json({ error: "Entry not found" }, { status: 404 });
  }
  return json({ entry });
}
__name(handleGetEntry, "handleGetEntry");
async function handlePostEntry(request, env) {
  await ensureAuth(request, env);
  const incoming = await request.json();
  const entry = normalizePayload(incoming);
  await persistMutation(env, entry);
  return json({ ok: true, entry }, { status: 201 });
}
__name(handlePostEntry, "handlePostEntry");
function handleStream() {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`event: init
data: "codex-stream-online"

`));
      const interval = setInterval(() => {
        const payload = JSON.stringify(CodexEngine.toJSON());
        controller.enqueue(encoder.encode(`event: codex
data: ${payload}

`));
      }, 8e3);
      const shutdown = /* @__PURE__ */ __name(() => {
        clearInterval(interval);
        controller.close();
      }, "shutdown");
      addEventListener("close", shutdown);
    }
  });
  return new Response(stream, { headers: STREAM_HEADERS });
}
__name(handleStream, "handleStream");
var codex_worker_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/stream" && request.method === "GET") {
      return handleStream();
    }
    if (url.pathname === "/entries" && request.method === "GET") {
      return handleGetEntries(request);
    }
    if (url.pathname.startsWith("/entries/") && request.method === "GET") {
      const id = url.pathname.split("/").pop() ?? "";
      return handleGetEntry(id);
    }
    if (url.pathname === "/entries" && request.method === "POST") {
      return handlePostEntry(request, env);
    }
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type,X-Codex-Key"
        }
      });
    }
    return json({ message: "Codex worker online", routes: ["GET /entries", "GET /entries/:id", "POST /entries", "GET /stream"] });
  }
};

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-OuUpna/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = codex_worker_default;

// ../../../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-OuUpna/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=codex-worker.js.map
