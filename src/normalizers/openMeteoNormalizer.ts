import { WeatherResponse } from '../types';

// TODO: Implement the Open-Meteo normalizer.
// Responsibilities:
//   - Accept raw data returned by openMeteoProvider.
//   - Map Open-Meteo field names to the internal WeatherResponse contract.
//   - Handle any field renaming, flattening, or unit conversions.
//   - Do NOT compute derived fields (e.g. isFreezing) — that belongs in the service layer.
// Note: validate or assert the shape of rawData before accessing fields.

export function normalizeOpenMeteo(rawData: unknown): Omit<WeatherResponse, 'isFreezing'> {
  throw new Error('TODO: implement Open-Meteo normalizer');
}
