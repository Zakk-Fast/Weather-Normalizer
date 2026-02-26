import express from 'express';
import weatherRouter from './routes/weather';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use('/weather', weatherRouter);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export { app };
