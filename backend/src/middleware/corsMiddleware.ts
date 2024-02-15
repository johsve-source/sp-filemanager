// src/middleware/corsMiddleware.ts
import express from 'express';
import cors from 'cors';

const configureCors = (app: express.Application) => {
  app.use(
    express.json(),
    express.urlencoded({ extended: true }),
    cors({ origin: 'http://yourfrontenddomain.com', credentials: true })
  );
};

export default {
  configureCors,
};
