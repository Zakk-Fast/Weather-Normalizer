import { WeatherProvider } from '../types';
import { WeatherRequest } from '../../types';

// TODO: Implement the Open-Meteo provider.
// Responsibilities:
//   - Translate WeatherRequest (lat, lon) into the Open-Meteo API query format.
//   - Fetch raw data from the Open-Meteo API using the native fetch API.
//   - Return the raw response body as-is (no normalization here).
// Reference: https://open-meteo.com/en/docs

export const openMeteoProvider: WeatherProvider = {
  async fetch(request: WeatherRequest): Promise<unknown> {
    throw new Error('TODO: implement Open-Meteo provider');
  },
};
