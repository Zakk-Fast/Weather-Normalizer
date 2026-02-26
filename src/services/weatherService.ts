import { WeatherRequest, WeatherResponse } from '../types';

// TODO: Implement the weather service.
// Responsibilities:
//   - Accept a WeatherRequest.
//   - Use the provider factory to select the appropriate provider.
//   - Call provider.fetch() to get raw data.
//   - Call the appropriate normalizer to produce a partial WeatherResponse.
//   - Compute derived fields (e.g. isFreezing = temperature <= 0).
//   - Return the complete WeatherResponse.
// This layer must remain independent of any specific provider or normalizer implementation.

export async function getWeather(request: WeatherRequest): Promise<WeatherResponse> {
  throw new Error('TODO: implement weather service');
}
