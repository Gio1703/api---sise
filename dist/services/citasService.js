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
exports.eliminarCita = exports.modificarCita = exports.insertarCita = exports.obtenerCita = exports.listarCitas = void 0;
const client_1 = require("@prisma/client");
const constant_1 = require("../shared/constant");
const prisma = new client_1.PrismaClient();
const listarCitas = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('citasService::listarCitas');
    return yield prisma.citas.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_cita: 'asc'
        }
    });
});
exports.listarCitas = listarCitas;
const obtenerCita = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('citasService::obtenerCita');
    return yield prisma.citas.findUnique({
        where: {
            id_cita: id
        }
    });
});
exports.obtenerCita = obtenerCita;
const insertarCita = (cita) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('citasService::insertarCita');
    const fecha = new Date(cita.fecha);
    const hora = new Date(`1970-01-01T${cita.hora}:00`);
    yield prisma.citas.create({
        data: {
            id_paciente: cita.id_paciente,
            id_medico: cita.id_medico,
            fecha,
            hora,
        }
    });
    return constant_1.RESPONSE_INSERT_OK;
});
exports.insertarCita = insertarCita;
const modificarCita = (id, cita) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('citasService::modificarCita');
    yield prisma.citas.update({
        where: {
            id_cita: id
        },
        data: {
            id_paciente: cita.id_paciente,
            id_medico: cita.id_medico,
            fecha: cita.fecha,
            hora: cita.hora,
            estado_cita: cita.estado_cita,
            estado_auditoria: cita.estado_auditoria,
            fecha_actualizacion: new Date()
        }
    });
    return constant_1.RESPONSE_UPDATE_OK;
});
exports.modificarCita = modificarCita;
const eliminarCita = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('citasService::eliminarCita');
    yield prisma.citas.update({
        where: {
            id_cita: id
        },
        data: {
            estado_auditoria: '0'
        }
    });
    return constant_1.RESPONSE_INSERT_OK;
});
exports.eliminarCita = eliminarCita;
