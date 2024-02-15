// src/middleware/helmetMiddleware.ts
import express from 'express';
import helmet from 'helmet';

const configureHelmet = (app: express.Application) => {
  app.use(helmet());
};

export default {
  configureHelmet,
};
