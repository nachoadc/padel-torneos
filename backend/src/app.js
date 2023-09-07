import express from 'express';
import tournamentRoutes from './routes/tournament.js';

const app = express();
// middlewares
app.use(express.json());

app.disable('x-powered-by');

app.use('/tournament', tournamentRoutes);

export default app;