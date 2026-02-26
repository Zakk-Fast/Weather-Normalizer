import { WeatherRequest } from '../types';

// TODO: Define the provider interface that all provider implementations must satisfy.
// Each provider receives a WeatherRequest and returns raw data (unknown shape).
// The normalizer is responsible for shaping the raw data — not the provider.

export interface WeatherProvider {
  fetch(request: WeatherRequest): Promise<unknown>;
}
