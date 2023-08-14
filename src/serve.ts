import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import positionRouter from './routers/positions-router';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(positionRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));
