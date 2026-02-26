import { WeatherProvider } from './types';
import { openMeteoProvider } from './implementations/openMeteoProvider';
import { mockProvider } from './implementations/mockProvider';

const providers: Record<string, WeatherProvider> = {
  'open-meteo': openMeteoProvider,
  'mock': mockProvider,
};

const DEFAULT_PROVIDER = 'open-meteo';

export function getProvider(providerName?: string): WeatherProvider {
  const key = providerName ?? DEFAULT_PROVIDER;
  const provider = providers[key];
  if (!provider) {
    throw new Error(`Unknown provider: "${key}"`);
  }
  return provider;
}
