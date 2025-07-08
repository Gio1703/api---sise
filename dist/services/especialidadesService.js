"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarEspecialidad = exports.modificarEspecialidad = exports.insertarEspecialidad = exports.obtenerEspecialidad = exports.listarEspecialidades = void 0;
const client_1 = require("@prisma/client");
const constant_1 = require("../shared/constant");
const especialidad_mapper_1 = require("../mappers/especialidad.mapper");
const prisma = new client_1.PrismaClient();
const listarEspecialidades = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('especialidadesService::listarEspecialidades');
    const especialidades = yield prisma.especialidades.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_especialidad: 'asc'
        }
    });
    return especialidades.map((especialidad) => (0, especialidad_mapper_1.fromPrismaEspecialidad)(especialidad));
});
exports.listarEspecialidades = listarEspecialidades;
const obtenerEspecialidad = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('especialidadesService::obtenerEspecialidades');
    const especialidad = yield prisma.especialidades.findUnique({
        where: {
            id_especialidad: id
        }
    });
    return especialidad;
});
exports.obtenerEspecialidad = obtenerEspecialidad;
const insertarEspecialidad = (especialidad) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('especialidadesService::insertarEspecialidad');
    yield prisma.especialidades.create({
        data: (0, especialidad_mapper_1.toPrismaEspecialidad)(especialidad) // Convertir el objeto Especialidad a un objeto compatible con Prisma
    });
    return constant_1.RESPONSE_INSERT_OK;
});
exports.insertarEspecialidad = insertarEspecialidad;
const modificarEspecialidad = (id, especialidad) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('especialidadesService::modificarEspecialidades');
    const dataActualizada = Object.assign(Object.assign({}, especialidad), { fecha_actualizacion: new Date() });
    yield prisma.especialidades.update({
        where: {
            id_especialidad: id
        },
        data: (0, especialidad_mapper_1.toPrismaEspecialidad)(dataActualizada)
    });
    return constant_1.RESPONSE_UPDATE_OK;
});
exports.modificarEspecialidad = modificarEspecialidad;
const eliminarEspecialidad = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('especialidadesService::eliminarEspecialidades');
});
exports.eliminarEspecialidad = eliminarEspecialidad;
