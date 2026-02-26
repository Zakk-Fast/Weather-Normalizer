import { Router } from 'express';
import { getWeatherHandler } from '../controllers/weatherController';

// TODO: Register the weather routes.
// GET /weather → getWeatherHandler

const router = Router();

router.get('/', getWeatherHandler);

export default router;
