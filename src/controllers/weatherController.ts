import { Request, Response } from 'express';
import { getWeather } from '../services/weatherService';
import { InvalidProviderError } from '../providers/providerFactory';

export async function getWeatherHandler(req: Request, res: Response): Promise<void> {
  const { lat, lon, provider } = req.query;

  const latNum = Number(lat);
  const lonNum = Number(lon);

  if (!lat || !lon || isNaN(latNum) || isNaN(lonNum)) {
    res.status(400).json({ error: 'lat and lon are required' });
    return;
  }

  try {
    const result = await getWeather({
      lat: latNum,
      lon: lonNum,
      provider: typeof provider === 'string' ? provider : undefined,
    });
    res.status(200).json(result);
  } catch (err) {
    console.error('[weatherController]', err);
    if (err instanceof InvalidProviderError) {
      res.status(400).json({ error: err.message });
      return;
    }
    const message = err instanceof Error ? err.message : 'Internal server error';
    res.status(500).json({ error: message });
  }
}
