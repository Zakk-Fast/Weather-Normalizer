import { WeatherProvider } from './types';
import { openMeteoProvider } from './implementations/openMeteoProvider';

// TODO: Register additional providers here as they are implemented.

const providers: Record<string, WeatherProvider> = {
  'open-meteo': openMeteoProvider,
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
