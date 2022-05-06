import express, { Express } from 'express';
import { DependecyInjection } from '@infraestructure/dependency-injection';

export const setupApp = async (): Promise<Express> => {
  
  const dependecyInjection = new DependecyInjection();
  dependecyInjection.init();
  
  const app = express();

  return app;
}