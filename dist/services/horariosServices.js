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
exports.eliminarHorario = exports.modificarHorario = exports.insertarHorario = exports.obtenerHorario = exports.listarHorarios = void 0;
const client_1 = require("@prisma/client");
const constant_1 = require("../shared/constant");
const prisma = new client_1.PrismaClient();
const listarHorarios = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('horariosService::listarHorarios');
    const horarios = yield prisma.horarios.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_horario: 'asc'
        }
    });
    return horarios;
});
exports.listarHorarios = listarHorarios;
const obtenerHorario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('horariosService::obtenerHorario');
    const horario = yield prisma.horarios.findUnique({
        where: {
            id_horario: id
        }
    });
    return horario;
});
exports.obtenerHorario = obtenerHorario;
const insertarHorario = (horario) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('horariosService::insertarHorario');
    yield prisma.horarios.create({
        data: {
            id_medico: horario.id_medico,
            dia_semana: horario.dia_semana,
            hora_inicio: horario.hora_inicio,
            hora_fin: horario.hora_fin
        }
    });
    return constant_1.RESPONSE_INSERT_OK;
});
exports.insertarHorario = insertarHorario;
const modificarHorario = (id, horario) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('horariosService::modificarHorario');
    yield prisma.horarios.update({
        where: {
            id_horario: id
        },
        data: {
            id_medico: horario.id_medico,
            dia_semana: horario.dia_semana,
            hora_inicio: horario.hora_inicio,
            hora_fin: horario.hora_fin
        }
    });
    return constant_1.RESPONSE_UPDATE_OK;
});
exports.modificarHorario = modificarHorario;
const eliminarHorario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('horariosService::eliminarHorario');
    yield prisma.horarios.update({
        where: {
            id_horario: id
        },
        data: {
            estado_auditoria: '0'
        }
    });
    return constant_1.RESPONSE_DELETE_OK;
});
exports.eliminarHorario = eliminarHorario;
