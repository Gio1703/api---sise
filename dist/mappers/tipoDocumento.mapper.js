"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaTipoDocumento = exports.fromPrismaTipoDocumento = void 0;
const fromPrismaTipoDocumento = (tipoDocumento) => {
    //    id_tipo_documento: number;
    //    nombre: string;
    //    estado_auditoria: string | null;
    //    fecha_creacion: Date | null;
    //    fecha_actualizacion: Date | null;
    //Convierte el objeto tipoDocumento de Prisma a un objeto TipoDocument
    return {
        idTipoDocumento: tipoDocumento.id_tipo_documento,
        nombre: tipoDocumento.nombre,
        estadoAuditoria: tipoDocumento.estado_auditoria,
        fechaCreacion: tipoDocumento.fecha_creacion ? new Date(tipoDocumento.fecha_creacion) : null,
        fechaActualizacion: tipoDocumento.fecha_actualizacion ? new Date(tipoDocumento.fecha_actualizacion) : null
    };
};
exports.fromPrismaTipoDocumento = fromPrismaTipoDocumento;
// Convierte un objeto TipoDocumento a un objeto compatible con Prisma
const toPrismaTipoDocumento = (tipoDocumento) => {
    return {
        nombre: tipoDocumento.nombre
    };
};
exports.toPrismaTipoDocumento = toPrismaTipoDocumento;
