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
exports.eliminarTipoDocumento = exports.modificarTipoDocumento = exports.insertarTipoDocumento = exports.obtenerTipoDocumento = exports.listarTipoDocumentos = void 0;
//ESTE SERVICE SOLO INERACUA CON LA BASE DE DATOS
const client_1 = require("@prisma/client");
const constant_1 = require("../shared/constant");
const tipoDocumento_mapper_1 = require("../mappers/tipoDocumento.mapper");
const prisma = new client_1.PrismaClient();
const listarTipoDocumentos = () => __awaiter(void 0, void 0, void 0, function* () {
    const tipoDocumentos = yield prisma.tipo_documentos.findMany({
        where: {
            estado_auditoria: '1' // Filtrar por estado de auditoría activo
        },
        orderBy: { id_tipo_documento: 'asc' }
    });
    return tipoDocumentos.map((tipoDocumento) => (0, tipoDocumento_mapper_1.fromPrismaTipoDocumento)(tipoDocumento)); // Convertir cada tipo_documentos a TipoDocumento
});
exports.listarTipoDocumentos = listarTipoDocumentos;
///////////////////
const obtenerTipoDocumento = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('tipoDocumentoService::obtenerTipoDocumento');
    const TipoDocumento = yield prisma.tipo_documentos.findUnique({
        where: {
            id_tipo_documento: id
        }
    });
    return TipoDocumento;
});
exports.obtenerTipoDocumento = obtenerTipoDocumento;
/////////////////
const insertarTipoDocumento = (tipoDocumento) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('tipoDocumentoService::insertarTipoDocumento');
    yield prisma.tipo_documentos.create({
        data: (0, tipoDocumento_mapper_1.toPrismaTipoDocumento)(tipoDocumento) // Convertir el objeto TipoDocumento a un objeto compatible con Prisma
    });
    return constant_1.RESPONSE_INSERT_OK;
});
exports.insertarTipoDocumento = insertarTipoDocumento;
const modificarTipoDocumento = (id, tipoDocumento) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('tipoDocumentoService::modificarTipoDocumento');
    yield prisma.tipo_documentos.update({
        where: {
            id_tipo_documento: id
        },
        data: Object.assign(Object.assign({}, tipoDocumento), { fecha_actualizacion: new Date() // Actualizar la fecha de actualización
         })
    });
    return constant_1.RESPONSE_UPDATE_OK;
});
exports.modificarTipoDocumento = modificarTipoDocumento;
const eliminarTipoDocumento = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('tipoDocumentoService::eliminarTipoDocumento');
    yield prisma.tipo_documentos.update({
        where: {
            id_tipo_documento: id
        },
        data: {
            estado_auditoria: '0', // Cambiar el estado de auditoría a '0' (inactivo)
            fecha_actualizacion: new Date() // Actualizar la fecha de actualización
        }
    });
    return constant_1.RESPONSE_DELETE_OK;
});
exports.eliminarTipoDocumento = eliminarTipoDocumento;
