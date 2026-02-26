import { WeatherProvider } from '../types';

// Mock provider — no external API call.
// Returns hardcoded data shaped to match the Open-Meteo response contract
// so the existing normalizer works without modification.
// Demonstrates provider swapability.

export const mockProvider: WeatherProvider = {
  async fetch(): Promise<unknown> {
    return {
      timezone: 'Mock/Location',
      current: {
        temperature_2m: 72,
        wind_speed_10m: 5,
        weather_code: 1,
      },
    };
  },
};
