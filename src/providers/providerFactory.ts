import { WeatherProvider } from './types';

// TODO: Implement provider selection logic.
// Accepts an optional provider name string and returns the matching WeatherProvider.
// Falls back to a default provider when no name is given.
// Throws if an unknown provider name is requested.

export function getProvider(providerName?: string): WeatherProvider {
  throw new Error('TODO: implement provider factory');
}
