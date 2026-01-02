import 'es-module-lexer';
import './chunks/shared_9gEenf6c.mjs';
import { appendForwardSlash, removeTrailingForwardSlash } from '@astrojs/internal-helpers/path';
import 'piccolore';
import 'html-escaper';
import 'clsx';
import { o as originPathnameSymbol, A as AstroError, F as ForbiddenRewrite } from './chunks/astro/server_DLSQ7M6e.mjs';
import { c as calibrateFibonacciCycle } from './chunks/QFSTDS_8yFMYetV.mjs';

function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}

function setOriginPathname(request, pathname, trailingSlash, buildFormat) {
  if (!pathname) {
    pathname = "/";
  }
  const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
  let finalPathname;
  if (pathname === "/") {
    finalPathname = "/";
  } else if (shouldAppendSlash) {
    finalPathname = appendForwardSlash(pathname);
  } else {
    finalPathname = removeTrailingForwardSlash(pathname);
  }
  Reflect.set(request, originPathnameSymbol, encodeURIComponent(finalPathname));
}

function getParams(route, pathname) {
  if (!route.params.length) return {};
  const paramsMatch = route.pattern.exec(pathname) || route.fallbackRoutes.map((fallbackRoute) => fallbackRoute.pattern.exec(pathname)).find((x) => x);
  if (!paramsMatch) return {};
  const params = {};
  route.params.forEach((key, i) => {
    if (key.startsWith("...")) {
      params[key.slice(3)] = paramsMatch[i + 1] ? paramsMatch[i + 1] : void 0;
    } else {
      params[key] = paramsMatch[i + 1];
    }
  });
  return params;
}

const apiContextRoutesSymbol = Symbol.for("context.routes");

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    return defineMiddleware((_context, next) => {
      return next();
    });
  }
  return defineMiddleware((context, next) => {
    let carriedPayload = void 0;
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async (payload) => {
        if (i < length - 1) {
          if (payload) {
            let newRequest;
            if (payload instanceof Request) {
              newRequest = payload;
            } else if (payload instanceof URL) {
              newRequest = new Request(payload, handleContext.request.clone());
            } else {
              newRequest = new Request(
                new URL(payload, handleContext.url.origin),
                handleContext.request.clone()
              );
            }
            const oldPathname = handleContext.url.pathname;
            const pipeline = Reflect.get(handleContext, apiContextRoutesSymbol);
            const { routeData, pathname } = await pipeline.tryRewrite(
              payload,
              handleContext.request
            );
            if (pipeline.serverLike === true && handleContext.isPrerendered === false && routeData.prerender === true) {
              throw new AstroError({
                ...ForbiddenRewrite,
                message: ForbiddenRewrite.message(
                  handleContext.url.pathname,
                  pathname,
                  routeData.component
                ),
                hint: ForbiddenRewrite.hint(routeData.component)
              });
            }
            carriedPayload = payload;
            handleContext.request = newRequest;
            handleContext.url = new URL(newRequest.url);
            handleContext.params = getParams(routeData, pathname);
            handleContext.routePattern = routeData.route;
            setOriginPathname(
              handleContext.request,
              oldPathname,
              pipeline.manifest.trailingSlash,
              pipeline.manifest.buildFormat
            );
          }
          return applyHandle(i + 1, handleContext);
        } else {
          return next(payload ?? carriedPayload);
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

const MKPTRI_KEY = "TRI-OMNI-MK-PORTFOLIO-2025";

const nodes = ["CAT-01", "COD-02", "GEN-03"];
function attuneGenesisSignal(input) {
  const stamp = (/* @__PURE__ */ new Date()).toISOString();
  const cycle = resolveCycle(input.pathname);
  const node = nodes[Math.abs(hashString(input.userAgent + input.pathname)) % nodes.length];
  return {
    keyProvided: input.keyProvided,
    keyValid: input.keyValid,
    cycle,
    stamp,
    node
  };
}
function resolveCycle(pathname) {
  if (pathname.startsWith("/portfolio")) return "DELTA-03";
  if (pathname.startsWith("/codex")) return "DELTA-02";
  return "DELTA-01";
}
function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

const restrictedRoutes = ["/portfolio"];
const onRequest$1 = defineMiddleware(async (context, next) => {
  const inboundKey = context.request.headers.get("x-mkptri-key") ?? context.url.searchParams.get("mkptri-key") ?? "";
  const envKey = context.locals.runtime?.env?.MKPTRI_KEY ?? MKPTRI_KEY;
  const keyProvided = inboundKey.length > 0;
  const keyValid = keyProvided ? inboundKey === envKey : false;
  const cycle = calibrateFibonacciCycle(Date.now());
  const signature = attuneGenesisSignal({
    keyProvided,
    keyValid,
    userAgent: context.request.headers.get("user-agent") ?? "unknown",
    pathname: context.url.pathname
  });
  context.locals.omni = {
    keyValid,
    cycle,
    signature,
    diagnostics: {
      env: context.locals.runtime?.env?.MKPTRI_ENV ?? "local",
      curator: context.locals.runtime?.env?.MKPTRI_CURATOR ?? "anonymous"
    }
  };
  const requiresKey = restrictedRoutes.some((route) => context.url.pathname.startsWith(route));
  if (requiresKey && !keyValid) {
    return new Response("Genesis access requires a valid MKP-TRI key.", {
      status: 403,
      headers: { "Content-Type": "text/plain" }
    });
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
