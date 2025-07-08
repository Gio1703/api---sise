"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API Clinica sise',
        version: '1.0.0',
        description: 'API documentation for Clinica sise',
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [{ bearerAuth: [] }],
};
const options = {
    swaggerDefinition,
    apis: ['./dist/routes/*.js', './dist/controllers/*.js'],
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options);
