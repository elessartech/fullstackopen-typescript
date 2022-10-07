import express from 'express';
const app = express();
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

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

app.post('/calculator', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment 
  const { daily_exercises, target } = req.body
  if (!daily_exercises || !target ) {
    return res.status(400).send({
      error: "parameters missing"
    });
  }
  if (typeof daily_exercises !== "object" || typeof target !== "number") {
    return res.status(400).send({
      error: "malformatted parameters"
    });
  }
  const calculation = calculateExercises(daily_exercises, target)
  return res.json(calculation)
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});