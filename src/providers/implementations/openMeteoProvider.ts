import { WeatherProvider } from '../types';
import { WeatherRequest } from '../../types';

export const openMeteoProvider: WeatherProvider = {
  async fetch(request: WeatherRequest): Promise<unknown> {
    const url = new URL('https://api.open-meteo.com/v1/forecast');
    url.searchParams.set('latitude', String(request.lat));
    url.searchParams.set('longitude', String(request.lon));
    url.searchParams.set('current', 'temperature_2m,wind_speed_10m,weather_code');
    url.searchParams.set('temperature_unit', 'fahrenheit');
    url.searchParams.set('wind_speed_unit', 'mph');

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    let response: Response;
    try {
      response = await fetch(url.toString(), { signal: controller.signal });
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        throw new Error('Open-Meteo request timed out');
      }
      throw err;
    } finally {
      clearTimeout(timeout);
    }

    if (!response.ok) {
      throw new Error(`Open-Meteo request failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },
};
