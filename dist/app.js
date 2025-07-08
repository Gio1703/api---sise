"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const tipoDocumentoRoute_1 = __importDefault(require("./routes/tipoDocumentoRoute"));
const especialidadesRoute_1 = __importDefault(require("./routes/especialidadesRoute"));
const horariosRoute_1 = __importDefault(require("./routes/horariosRoute"));
const pacientesRoute_1 = __importDefault(require("./routes/pacientesRoute"));
const medicosRoute_1 = __importDefault(require("./routes/medicosRoute"));
const citasRoute_1 = __importDefault(require("./routes/citasRoute"));
const env_1 = __importDefault(require("./config/env"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./docs/swagger");
/*
    CONFIGURAR CONEXION A BD, RUTAS Y OTRAS COSAS DE LOS SERVICIOS
*/
const app = (0, express_1.default)();
//Base de datos
// Middleware para parsear JSON
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(`${env_1.default.API_PREFIX}/api-docs`, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
//Rutas
app.use(`${env_1.default.API_PREFIX}/tipo-documentos`, tipoDocumentoRoute_1.default);
app.use(`${env_1.default.API_PREFIX}/especialidades`, especialidadesRoute_1.default);
app.use(`${env_1.default.API_PREFIX}/horarios`, horariosRoute_1.default);
app.use(`${env_1.default.API_PREFIX}/pacientes`, pacientesRoute_1.default);
app.use(`${env_1.default.API_PREFIX}/medicos`, medicosRoute_1.default);
app.use(`${env_1.default.API_PREFIX}/citas`, citasRoute_1.default);
app.use(`${env_1.default.API_PREFIX}/auth`, authRouter_1.default);
exports.default = app;
