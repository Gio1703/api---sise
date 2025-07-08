import { TipoDocumento } from "../models/tipoDocumento";
import { tipo_documentos } from "@prisma/client";

export const fromPrismaTipoDocumento = (tipoDocumento: tipo_documentos): any => {


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
}

    // Convierte un objeto TipoDocumento a un objeto compatible con Prisma
export const toPrismaTipoDocumento = (tipoDocumento: TipoDocumento) => {
    return {
       
        nombre: tipoDocumento.nombre
    };
}