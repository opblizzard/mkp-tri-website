// src/pages/api/omni.ts
// Astro API route to proxy requests to the Worker
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  // Change this URL to your deployed Worker endpoint if needed
  const workerUrl = process.env.OMNI_WORKER_URL || "http://localhost:8787";
  const res = await fetch(workerUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({ status: "ok", message: "Omni API is available." }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};
