import express, { Application } from 'express';
import cors from 'cors';
import tipoDocumentoRoute from './routes/tipoDocumentoRoute';
import especialidadesRoute from './routes/especialidadesRoute';
import horariosRoute from './routes/horariosRoute';
import pacientesRoute from './routes/pacientesRoute';
import medicosRoute from './routes/medicosRoute';
import citasRoute from './routes/citasRoute';
import authRouter from './routes/authRouter';
import env from './config/env';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Documentación Swagger
app.use(`${env.API_PREFIX}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
app.use(`${env.API_PREFIX}/tipo-documentos`, tipoDocumentoRoute);
app.use(`${env.API_PREFIX}/especialidades`, especialidadesRoute);
app.use(`${env.API_PREFIX}/horarios`, horariosRoute);
app.use(`${env.API_PREFIX}/pacientes`, pacientesRoute);
app.use(`${env.API_PREFIX}/medicos`, medicosRoute);
app.use(`${env.API_PREFIX}/citas`, citasRoute);
app.use(`${env.API_PREFIX}/auth`, authRouter);

// Ruta de prueba para confirmar que el servidor responde
app.get('/', (req, res) => {
  res.send('🚀 API funcionando correctamente');
});

export default app;
