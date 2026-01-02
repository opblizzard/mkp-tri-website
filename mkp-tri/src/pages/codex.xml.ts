import type { APIContext } from 'astro';
import { codexTimeline } from '../omni/Codex';

export async function GET(_context: APIContext) {
  const items = codexTimeline.flatMap((cycle) =>
    cycle.artifacts.map((a) => ({
      id: a.id,
      title: a.title,
      summary: a.summary,
      cycle: cycle.id,
      provenance: a.provenance ?? new Date().toISOString(),
    }))
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<feed xmlns="http://www.w3.org/2005/Atom">\n` +
    `  <title>MKP TRI Codex</title>\n` +
    `  <updated>${new Date().toISOString()}</updated>\n` +
    items.map((i) =>
      `  <entry>\n` +
      `    <id>${i.id}</id>\n` +
      `    <title>${escapeXml(i.title)}</title>\n` +
      `    <summary>${escapeXml(i.summary)}</summary>\n` +
      `    <category term="${i.cycle}"/>\n` +
      `    <updated>${i.provenance}</updated>\n` +
      `  </entry>`
    ).join('\n') +
    `\n</feed>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' },
  });
}

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
