import { WeatherResponse } from '../types';

// WMO Weather Interpretation Codes → human-readable condition
const WMO_CODES: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Icy fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  71: 'Slight snow',
  73: 'Moderate snow',
  75: 'Heavy snow',
  80: 'Slight showers',
  81: 'Moderate showers',
  82: 'Violent showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with hail',
  99: 'Thunderstorm with heavy hail',
};

interface OpenMeteoResponse {
  timezone: string;
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
}

function assertOpenMeteoShape(data: unknown): asserts data is OpenMeteoResponse {
  if (
    typeof data !== 'object' ||
    data === null ||
    typeof (data as Record<string, unknown>)['timezone'] !== 'string' ||
    typeof (data as Record<string, unknown>)['current'] !== 'object'
  ) {
    throw new Error('Unexpected response shape from Open-Meteo');
  }
}

export function normalizeOpenMeteo(rawData: unknown): Omit<WeatherResponse, 'isFreezing'> {
  assertOpenMeteoShape(rawData);

  const { timezone, current } = rawData;
  const { temperature_2m, wind_speed_10m, weather_code } = current;

  return {
    location: timezone,
    temperature: temperature_2m,
    windSpeed: wind_speed_10m,
    condition: WMO_CODES[weather_code] ?? 'Unknown',
  };
}
