import express from 'express';
const app = express();
import { calculateBmi } from './bmiCalculator';

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const weight = Number(req.query.weight);
  const height = Number(req.query.height);
  if (weight && height) {
    const bmi = calculateBmi(height, weight);
    return res.json({
      weight,
      height,
      bmi
    });
  }
  return res.status(400).send({
    message: 'malformatted parameters'
  });
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});