// TODO: Define the normalized response contract shared across the entire system.
// This is the single source of truth for the output shape.

export interface WeatherResponse {
  location: string;
  temperature: number;
  windSpeed: number;
  condition: string;
  isFreezing: boolean;
}

// TODO: Define the internal request shape passed from controller → service → provider.
export interface WeatherRequest {
  lat: number;
  lon: number;
  provider?: string;
}
