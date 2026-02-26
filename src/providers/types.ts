import { WeatherRequest } from '../types';

export interface WeatherProvider {
  fetch(request: WeatherRequest): Promise<unknown>;
}
