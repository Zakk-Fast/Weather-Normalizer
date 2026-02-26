import { WeatherProvider } from './types';
import { openMeteoProvider } from './implementations/openMeteoProvider';
import { mockProvider } from './implementations/mockProvider';

export class InvalidProviderError extends Error {
  constructor(key: string) {
    super(`Unknown provider: "${key}"`);
    this.name = 'InvalidProviderError';
  }
}

const providers: Record<string, WeatherProvider> = {
  'open-meteo': openMeteoProvider,
  'mock': mockProvider,
};

const DEFAULT_PROVIDER = 'open-meteo';

export function getProvider(providerName?: string): WeatherProvider {
  const key = providerName ?? DEFAULT_PROVIDER;
  const provider = providers[key];
  if (!provider) {
    throw new InvalidProviderError(key);
  }
  return provider;
}
