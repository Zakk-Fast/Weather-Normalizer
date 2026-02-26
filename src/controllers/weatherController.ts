import { Request, Response } from 'express';
import { WeatherResponse } from '../types';
import { getWeather } from '../services/weatherService';
import { InvalidProviderError } from '../providers/providerFactory';

const ALLOWED_FIELDS = new Set<keyof WeatherResponse>([
  'location',
  'temperature',
  'windSpeed',
  'condition',
  'isFreezing',
]);

export async function getWeatherHandler(req: Request, res: Response): Promise<void> {
  const { lat, lon, provider, fields } = req.query;

  const latNum = Number(lat);
  const lonNum = Number(lon);

  if (!lat || !lon || isNaN(latNum) || isNaN(lonNum)) {
    res.status(400).json({ error: 'lat and lon are required' });
    return;
  }

  // Parse and validate the optional fields param
  let requestedFields: Array<keyof WeatherResponse> | null = null;
  if (typeof fields === 'string') {
    const parsed = fields.split(',').map((f) => f.trim());
    const invalid = parsed.filter((f) => !ALLOWED_FIELDS.has(f as keyof WeatherResponse));
    if (invalid.length > 0) {
      res.status(400).json({
        error: `Unknown field(s): ${invalid.join(', ')}. Allowed fields: ${[...ALLOWED_FIELDS].join(', ')}`,
      });
      return;
    }
    requestedFields = parsed as Array<keyof WeatherResponse>;
  }

  try {
    const result = await getWeather({
      lat: latNum,
      lon: lonNum,
      provider: typeof provider === 'string' ? provider : undefined,
    });

    if (requestedFields) {
      const filtered = Object.fromEntries(requestedFields.map((f) => [f, result[f]]));
      res.status(200).json(filtered);
      return;
    }

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
