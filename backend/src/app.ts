// app.ts
import express from 'express';
import corsMiddleware from './middleware/corsMiddleware';
import helmetMiddleware from './middleware/helmetMiddleware';
import authRoutes from './routes/authRoutes';
import fileRoutes from './routes/fileRoutes';
import objectDetectionRoutes from './routes/objectDetectionRoutes';

const app = express();

// Configure Middleware
corsMiddleware.configureCors(app);
helmetMiddleware.configureHelmet(app);

// Use Routes
app.use('/auth', authRoutes);
app.use('/file', fileRoutes);
app.use('/object-detection', objectDetectionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
