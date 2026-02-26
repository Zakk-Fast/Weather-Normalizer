import { Request, Response } from 'express';

// TODO: Implement the weather controller.
// Responsibilities:
//   - Parse and validate query parameters (lat, lon, provider).
//   - Return 400 if lat or lon are missing or not valid numbers.
//   - Call the weather service with a typed WeatherRequest.
//   - Send the WeatherResponse as JSON with status 200.
//   - Handle errors from the service and return appropriate HTTP status codes.
// This layer must contain NO business logic.

export async function getWeatherHandler(req: Request, res: Response): Promise<void> {
  throw new Error('TODO: implement weather controller');
}
