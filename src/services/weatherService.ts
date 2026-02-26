import { WeatherRequest, WeatherResponse } from '../types';
import { getProvider } from '../providers/providerFactory';
import { normalizeOpenMeteo } from '../normalizers/openMeteoNormalizer';

export async function getWeather(request: WeatherRequest): Promise<WeatherResponse> {
  const provider = getProvider(request.provider);
  const rawData = await provider.fetch(request);
  const normalized = normalizeOpenMeteo(rawData);

  return {
    ...normalized,
    isFreezing: normalized.temperature <= 32,
  };
}
