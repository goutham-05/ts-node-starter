import express from 'express';
import cors from 'cors';
import userRoutes from './api/routes/user';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.use(errorHandler);

export default app;
