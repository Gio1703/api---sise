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
exports.eliminarMedico = exports.modificarMedico = exports.insertarMedico = exports.obtenerMedico = exports.listarMedicos = void 0;
const client_1 = require("@prisma/client");
const constant_1 = require("../shared/constant");
const prisma = new client_1.PrismaClient();
const listarMedicos = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('medicoService::listarMedicos');
    const medicos = yield prisma.medicos.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_medico: 'asc'
        }
    });
    return medicos;
});
exports.listarMedicos = listarMedicos;
const obtenerMedico = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('medicoService::obtenerMedico');
    const medico = yield prisma.medicos.findUnique({
        where: {
            id_medico: id
        }
    });
    return medico;
});
exports.obtenerMedico = obtenerMedico;
const insertarMedico = (medico) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('medicoService::insertarMedico');
    yield prisma.medicos.create({
        data: {
            nombres: medico.nombres,
            apellidos: medico.apellidos,
            correo: medico.correo,
            celular: medico.celular,
            id_especialidad: medico.id_especialidad
        }
    });
    return constant_1.RESPONSE_INSERT_OK;
});
exports.insertarMedico = insertarMedico;
const modificarMedico = (id, medico) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('medicoService::modificarMedico');
    yield prisma.medicos.update({
        where: {
            id_medico: id
        },
        data: {
            nombres: medico.nombres,
            apellidos: medico.apellidos,
            correo: medico.correo,
            celular: medico.celular,
            id_especialidad: medico.id_especialidad,
            fecha_actualizacion: new Date()
        }
    });
    return constant_1.RESPONSE_UPDATE_OK;
});
exports.modificarMedico = modificarMedico;
const eliminarMedico = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('medicoService::eliminarMedico');
    yield prisma.medicos.update({
        where: {
            id_medico: id
        },
        data: {
            estado_auditoria: '0',
            fecha_actualizacion: new Date()
        }
    });
    return constant_1.RESPONSE_DELETE_OK;
});
exports.eliminarMedico = eliminarMedico;
