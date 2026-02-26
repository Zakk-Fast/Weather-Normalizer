import express from 'express';
import weatherRouter from './routes/weather';

// TODO: Initialize and start the Express application.
// Mount the weather router at /weather.
// Listen on a configurable port (default 3000).

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use('/weather', weatherRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
