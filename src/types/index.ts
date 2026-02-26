export interface WeatherResponse {
  location: string;
  temperature: number;
  windSpeed: number;
  condition: string;
  isFreezing: boolean;
}

export interface WeatherRequest {
  lat: number;
  lon: number;
  provider?: string;
}
