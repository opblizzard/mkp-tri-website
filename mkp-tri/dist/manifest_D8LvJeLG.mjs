import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, l as decodeKey } from './chunks/astro/server_DLSQ7M6e.mjs';
import './chunks/shared_9gEenf6c.mjs';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/","cacheDir":"file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/node_modules/.astro/","outDir":"file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/","srcDir":"file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/","publicDir":"file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/public/","buildClientDir":"file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/client/","buildServerDir":"file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/server/","adapterName":"","routes":[{"file":"file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/codex/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/codex","isIndex":false,"type":"page","pattern":"^\\/codex\\/?$","segments":[[{"content":"codex","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/codex.astro","pathname":"/codex","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/codex-live/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/codex-live","isIndex":false,"type":"page","pattern":"^\\/codex-live\\/?$","segments":[[{"content":"codex-live","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/codex-live.astro","pathname":"/codex-live","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/codex.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/codex.xml","isIndex":false,"type":"endpoint","pattern":"^\\/codex\\.xml\\/?$","segments":[[{"content":"codex.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/codex.xml.ts","pathname":"/codex.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/omni/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/omni","isIndex":false,"type":"page","pattern":"^\\/omni\\/?$","segments":[[{"content":"omni","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/omni.astro","pathname":"/omni","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/operations/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/operations","isIndex":false,"type":"page","pattern":"^\\/operations\\/?$","segments":[[{"content":"operations","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/operations.astro","pathname":"/operations","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/portfolio/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio","isIndex":false,"type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio.astro","pathname":"/portfolio","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://mkptri.org","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/codex-live.astro",{"propagation":"none","containsHead":true}],["C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/codex.astro",{"propagation":"none","containsHead":true}],["C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/omni.astro",{"propagation":"none","containsHead":true}],["C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/operations.astro",{"propagation":"none","containsHead":true}],["C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/portfolio.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/codex@_@astro":"pages/codex.astro.mjs","\u0000@astro-page:src/pages/codex-live@_@astro":"pages/codex-live.astro.mjs","\u0000@astro-page:src/pages/codex.xml@_@ts":"pages/codex.xml.astro.mjs","\u0000@astro-page:src/pages/omni@_@astro":"pages/omni.astro.mjs","\u0000@astro-page:src/pages/operations@_@astro":"pages/operations.astro.mjs","\u0000@astro-page:src/pages/portfolio@_@astro":"pages/portfolio.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_D8LvJeLG.mjs","C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/codex.astro?astro&type=script&index=0&lang.ts":"_astro/codex.astro_astro_type_script_index_0_lang.DnM2DdZs.js","C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/codex-live.astro?astro&type=script&index=0&lang.ts":"_astro/codex-live.astro_astro_type_script_index_0_lang.DCo96wBW.js","C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/omni.astro?astro&type=script&index=0&lang.ts":"_astro/omni.astro_astro_type_script_index_0_lang.P_zXQaJt.js","C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/operations.astro?astro&type=script&index=0&lang.ts":"_astro/operations.astro_astro_type_script_index_0_lang.CsiV4QRa.js","C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/components/Omni/OmniLLMChat.astro?astro&type=script&index=0&lang.ts":"_astro/OmniLLMChat.astro_astro_type_script_index_0_lang.D4AUFg51.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/codex.astro?astro&type=script&index=0&lang.ts","const c=document.getElementById(\"cycleFilter\"),a=Array.from(document.querySelectorAll(\"#codexGrid [data-cycle]\"));c?.addEventListener(\"change\",()=>{const e=c.value;a.forEach(t=>{const l=e===\"all\"||t.getAttribute(\"data-cycle\")===e;t.style.display=l?\"\":\"none\"})});"],["C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/codex-live.astro?astro&type=script&index=0&lang.ts","const y=\"http://127.0.0.1:8787\",l=y.replace(/\\/$/,\"\"),h=`${l}/entries`,S=`${l}/stream`;async function C(){try{const e=await fetch(h);if(!e.ok)return;const t=await e.json();s(t.entries??[]),d(t.entries??[])}catch(e){console.error(\"Codex refresh failed\",e)}}function s(e){const t=document.getElementById(\"codexStream\"),n=document.getElementById(\"codex-entry-template\");!t||!n||(t.innerHTML=\"\",e.forEach(o=>{const r=n.content.firstElementChild.cloneNode(!0),[p,u]=r.querySelectorAll(\"header div > *\"),m=r.querySelector(\"header span\"),f=r.querySelector(\"p.text-white/70\"),a=r.querySelector(\"div.flex\"),x=r.querySelector(\"footer\");p.textContent=o.sector,u.textContent=o.title,m.textContent=o.priority,f.textContent=o.synopsis,a.innerHTML=\"\",(o.tags??[]).forEach(E=>{const c=document.createElement(\"span\");c.className=\"rounded-full border border-white/20 px-3 py-1\",c.textContent=E.label,a.appendChild(c)}),x.textContent=`Updated ${new Date(o.updatedAt).toLocaleString()}`,r.dataset.entryId=o.id,t.appendChild(r)}))}function d(e){const t=document.getElementById(\"codexCount\"),n=document.getElementById(\"codexSync\");t&&(t.textContent=e.length.toString().padStart(2,\"0\")),n&&(n.textContent=new Date().toLocaleTimeString())}function i(){try{const e=new EventSource(S);e.addEventListener(\"codex\",t=>{const n=JSON.parse(t.data);s(n.entries??[]),d(n.entries??[])}),e.onerror=()=>{e.close(),setTimeout(i,5e3)}}catch(e){console.error(\"Codex stream failed\",e)}}s(JSON.parse(document.getElementById(\"codex-initial-data\").textContent||\"[]\"));i();setInterval(C,3e4);"],["C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/omni.astro?astro&type=script&index=0&lang.ts","const l=document.getElementById(\"omni-form\"),r=document.getElementById(\"omni-input\"),n=document.getElementById(\"omni-messages\"),m=\"http://127.0.0.1:8788\",d=`${m.replace(/\\/$/,\"\")}/chat`;function a(s,e){const t=document.createElement(\"div\");t.className=s===\"user\"?\"ml-auto max-w-xl rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-white\":\"max-w-xl rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/80\",t.textContent=e,n?.appendChild(t),n?.scrollTo({top:n.scrollHeight,behavior:\"smooth\"})}l?.addEventListener(\"submit\",async s=>{if(s.preventDefault(),!r||!n)return;const e=r.value.trim();if(!e)return;a(\"user\",e),r.value=\"\";const t={messages:[{role:\"user\",content:e}]};try{const o=await(await fetch(d,{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(t)})).json(),c=o?.response?.result?.trim?.()??JSON.stringify(o.response??o);a(\"assistant\",c)}catch(i){console.error(\"Omni chat failed\",i),a(\"assistant\",\"Transmission failed. Check worker logs.\")}});"],["C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/pages/operations.astro?astro&type=script&index=0&lang.ts","const l=[\"[Cycle 001] Genesis signal received.\",\"[Cycle 002] Omni Engine heartbeat: OK.\",\"[Cycle 003] Codex update: Artifact added.\",\"[Cycle 004] Worker deployed: genesisUpdater.js\",\"[Cycle 005] Genesis validation: pending...\"],i=document.getElementById(\"terminal-logs\");let s=0;function t(n){const e=document.createElement(\"div\");e.textContent=n,i.appendChild(e),i.scrollTop=i.scrollHeight}setInterval(()=>{s<l.length&&t(l[s++])},1200);document.getElementById(\"terminal-form\").addEventListener(\"submit\",n=>{n.preventDefault();const e=document.getElementById(\"terminal-command\").value;e&&(t(\"> \"+e),d(\"Terminal command: \"+e),document.getElementById(\"terminal-command\").value=\"\",e.toLowerCase().includes(\"omni\")&&(t(\"[Omni LLM] Processing input...\"),setTimeout(()=>{t(\"[Omni LLM] Response: Codex entry updated.\"),d(\"Omni LLM updated Codex entry.\")},1500)))});function d(n){const e=document.getElementById(\"codex-events\"),o=document.createElement(\"li\");o.textContent=n,e.appendChild(o)}document.getElementById(\"validate-genesis\").addEventListener(\"click\",()=>{t(\"[Genesis] Validation started...\"),d(\"Genesis validation workflow started.\"),setTimeout(()=>{document.getElementById(\"genesis-status\").textContent=\"Genesis validated ✔\",t(\"[Genesis] Validation complete.\"),d(\"Genesis validated and Codex updated.\")},2e3)});"],["C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/src/components/Omni/OmniLLMChat.astro?astro&type=script&index=0&lang.ts","const t=[{role:\"system\",text:\"Welcome to the AGI-powered site builder. Describe your idea or request a change.\"}],r=document.getElementById(\"chat-messages\"),c=document.getElementById(\"chat-form\"),a=document.getElementById(\"chat-input\");function s(){r.innerHTML=\"\",t.forEach(o=>{const e=document.createElement(\"div\");e.className=`chat-msg chat-${o.role}`,e.textContent=o.text,r.appendChild(e)}),r.scrollTop=r.scrollHeight}s();c.addEventListener(\"submit\",async o=>{o.preventDefault();const e=a.value.trim();e&&(t.push({role:\"user\",text:e}),s(),a.value=\"\",fetch(\"/api/llm-api\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({message:e})}).then(n=>n.json()).then(n=>{t.push({role:\"agi\",text:n.response}),s(),setTimeout(()=>{t.push({role:\"system\",text:\"Artifact created. Site updated as per your request.\"}),s()},1500)}).catch(()=>{t.push({role:\"system\",text:\"Error: Unable to process request.\"}),s()}))});"]],"assets":["/file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/codex/index.html","/file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/codex-live/index.html","/file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/codex.xml","/file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/omni/index.html","/file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/operations/index.html","/file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/portfolio/index.html","/file:///C:/Users/mirne/OneDrive/Documents/GitHub/mkp-tri/mkp-tri/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"suq0Yj2lrKtvGAIcPqx2o+nh321qXi12VkLuC/IBTzQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
