// llm-api.ts
// Backend API for Omni LLM chat
import type { NextApiRequest, NextApiResponse } from 'next';
import { agiAutoUpdate } from './agi-engine';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }
  // AGI auto-update logic
  const guidelines = { allowAutoUpdate: true };
  const trigger = message;
  const content = `Created by AGI in response to user input: ${message}`;
  // Example: get user location from headers or request (simplified)
  const userLocation = req.headers['x-user-location'] || 'US';
  const userIP = req.headers['x-forwarded-for'] || req.connection?.remoteAddress || 'anonymous';
  const userAgent = req.headers['user-agent'] || 'anonymous';
  const result = await agiAutoUpdate({ guidelines, trigger, content, userLocation, userIP, userAgent });
  if (result.status === 'updated') {
    return res.status(200).json({ response: `AGI processed: ${message} (Cloudflare Worker updated)`, artifact: result.artifact });
  } else {
    return res.status(200).json({ response: `AGI processed: ${message} (No update: ${result.reason})` });
  }
}
