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
exports.eliminarPaciente = exports.modificarPaciente = exports.insertarPaciente = exports.obtenerPaciente = exports.listarPacientes = void 0;
const client_1 = require("@prisma/client");
const constant_1 = require("../shared/constant");
const paciente_mapper_1 = require("../mappers/paciente.mapper");
const prisma = new client_1.PrismaClient();
const listarPacientes = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacientesServices::listarPacientes');
    return yield prisma.pacientes.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_paciente: 'asc'
        }
    });
});
exports.listarPacientes = listarPacientes;
const obtenerPaciente = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacientesServices::obtenerPaciente');
    return yield prisma.pacientes.findUnique({
        where: {
            id_paciente: id
        }
    });
});
exports.obtenerPaciente = obtenerPaciente;
const insertarPaciente = (paciente) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacientesServices::insertarPaciente');
    yield prisma.pacientes.create({
        data: (0, paciente_mapper_1.toPrismaPaciente)(paciente) // Convertir el objeto Paciente a un objeto compatible con Prisma
    });
    return constant_1.RESPONSE_INSERT_OK;
});
exports.insertarPaciente = insertarPaciente;
const modificarPaciente = (id, paciente) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacientesServices::modificarPaciente');
    const dataActualizada = Object.assign(Object.assign({}, paciente), { fecha_actualizacion: new Date() // Actualizar la fecha de actualización
     });
    yield prisma.pacientes.update({
        where: {
            id_paciente: id
        },
        data: (0, paciente_mapper_1.toPrismaPaciente)(dataActualizada) // Convertir el objeto Paciente a un objeto compatible con Prisma
    });
    return constant_1.RESPONSE_UPDATE_OK;
});
exports.modificarPaciente = modificarPaciente;
const eliminarPaciente = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacientesServices::eliminarPaciente');
    yield prisma.pacientes.update({
        where: {
            id_paciente: id
        },
        data: {
            estado_auditoria: '0'
        }
    });
    return constant_1.RESPONSE_DELETE_OK;
});
exports.eliminarPaciente = eliminarPaciente;
