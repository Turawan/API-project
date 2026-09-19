import 'dotenv/config';

export const ENV = {
  APP_NAME: process.env.APP_NAME || 'API Project',
  PORT: Number(process.env.PORT || 7000),
  NODE_ENV: process.env.NODE_ENV || 'development',
  JWT_SECRET: process.env.JWT_SECRET || 'change_me',
  BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:7000',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
  DATABASE_URL: process.env.DATABASE_URL,
};
