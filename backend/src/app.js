import express from 'express';
import organizationRoutes from './routes/organization.routes.js';

const app = express();

// middlewares
app.use(express.json());

app.use(organizationRoutes);

export default app;