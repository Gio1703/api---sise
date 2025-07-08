import { pacientes } from "@prisma/client";
import { Paciente } from "../models/paciente";


export const fromPrismaPaciente = (paciente:pacientes ): any => {
    // Convierte el objeto paciente de Prisma a un objeto Paciente

    //  id_paciente: number;
    // nombres: string;
    // apellidos: string;
    // edad: number;
    // fechaNacimiento: Date;
    // id_tipoDocumento: number;
    // numeroDocumento: string;
    // direccion: string;
    // correo: string;
    // genero: string;
    // estado_auditoria: string;
    // fecha_creacion: Date;
    // fecha_actualizacion?: Date;
    return {
        idPaciente: paciente.id_paciente,
        nombres: paciente.nombres,
        apellidos: paciente.apellidos,
        edad: paciente.edad,
        fechaNacimiento: paciente.fecha_nacimiento ? new Date(paciente.fecha_nacimiento) : null,
        idTipoDocumento: paciente.id_tipo_documento,
        numeroDocumento: paciente.numero_documento,
        direccion: paciente.direccion,
        correo: paciente.correo,
        genero: paciente.genero,
        estadoAuditoria: paciente.estado_auditoria,
        fechaCreacion: paciente.fecha_creacion ? new Date(paciente.fecha_creacion) : null,
        fechaActualizacion: paciente.fecha_actualizacion ? new Date(paciente.fecha_actualizacion) : null
     
    };
}

export const toPrismaPaciente = (paciente: Paciente) => {
    return {

   
        nombres: paciente.nombres,
        apellidos: paciente.apellidos,
        edad: paciente.edad,
        fecha_nacimiento: paciente.fechaNacimiento ? paciente.fechaNacimiento.toISOString() : null,
        id_tipo_documento: paciente.idTipoDocumento,
        numero_documento: paciente.numeroDocumento,
        direccion: paciente.direccion,
        correo: paciente.correo,
        genero: paciente.genero,
        estado_auditoria: paciente.estadoAuditoria,
        fecha_creacion: paciente.fechaCreacion ? paciente.fechaCreacion.toISOString() : null,
        fecha_actualizacion: paciente.fechaActualizacion ? paciente.fechaActualizacion.toISOString() : null
    };
}
   


