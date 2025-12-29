var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// workers/router.ts
var router_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/omni/edge")) {
      return handleOmni(request, env);
    }
    if (url.pathname.startsWith("/codex/edge")) {
      return handleCodex(request, env);
    }
    return new Response("MKP-TRI router online. Static assets served by Pages.", {
      status: 200,
      headers: { "content-type": "text/plain; charset=utf-8" }
    });
  }
};
async function handleOmni(request, env) {
  if (request.method !== "POST") {
    return new Response("Use POST for Omni calls.", { status: 405 });
  }
  const body = await request.json().catch(() => ({}));
  return new Response(
    JSON.stringify({
      status: "stubbed",
      received: body,
      endpoint: env.OMNI_ENDPOINT
    }),
    {
      status: 200,
      headers: { "content-type": "application/json" }
    }
  );
}
__name(handleOmni, "handleOmni");
async function handleCodex(_request, env) {
  return new Response(
    JSON.stringify({
      status: "stubbed",
      bucket: env.CODEX_BUCKET,
      message: "Codex worker is ready to bind to storage."
    }),
    {
      status: 200,
      headers: { "content-type": "application/json" }
    }
  );
}
__name(handleCodex, "handleCodex");
export {
  router_default as default
};
//# sourceMappingURL=router.js.map
