import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();

import passport from 'passport';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import {
  localStrategyAuth,
  cookieStrategyAuth,
} from './infrastructure/middlewares/auth';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);
app.use(helmet());
app.use(cookieParser());
app.use(passport.initialize());

passport.use(localStrategyAuth);
passport.use(cookieStrategyAuth);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(process.env.SERVER_PORT || 3001, () =>
  console.log('server running')
);
