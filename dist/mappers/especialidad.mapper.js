"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaEspecialidad = exports.fromPrismaEspecialidad = void 0;
const fromPrismaEspecialidad = (especialidad) => {
    // Convierte el objeto especialidad de Prisma a un objeto Especialidad
    return {
        idEspecialidad: especialidad.id_especialidad,
        nombre: especialidad.nombre,
        estadoAuditoria: especialidad.estado_auditoria,
        fechaCreacion: especialidad.fecha_creacion ? new Date(especialidad.fecha_creacion) : null,
        fechaActualizacion: especialidad.fecha_actualizacion ? new Date(especialidad.fecha_actualizacion) : null
    };
};
exports.fromPrismaEspecialidad = fromPrismaEspecialidad;
const toPrismaEspecialidad = (especialidad) => {
    // Convierte un objeto Especialidad a un objeto compatible con Prisma
    return {
        nombre: especialidad.nombre,
        fecha_actualizacion: especialidad.fechaActualizacion ? especialidad.fechaActualizacion.toISOString() : null
    };
};
exports.toPrismaEspecialidad = toPrismaEspecialidad;
