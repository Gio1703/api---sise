import { PrismaClient } from "@prisma/client";
import { Medico } from "../models/medico";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constant";
 
const prisma = new PrismaClient();
 
export const listarMedicos = async () => {
    console.log('medicoService::listarMedicos');
 
    const medicos = await prisma.medicos.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_medico: 'asc'
        }
    });
 
    return medicos;
};
 
export const obtenerMedico = async (id: number) => {
    console.log('medicoService::obtenerMedico');
 
    const medico = await prisma.medicos.findUnique({
        where: {
            id_medico: id
        }
    });
 
    return medico;
};
 
export const insertarMedico = async (medico: Medico) => {
    console.log('medicoService::insertarMedico');
 
    await prisma.medicos.create({
        data: {
            nombres: medico.nombres,
            apellidos: medico.apellidos,
            correo: medico.correo,
            celular: medico.celular,
            id_especialidad: medico.id_especialidad
        }
    });
 
    return RESPONSE_INSERT_OK;
};
 
export const modificarMedico = async (id: number, medico: Medico) => {
    console.log('medicoService::modificarMedico');
 
    await prisma.medicos.update({
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
 
    return RESPONSE_UPDATE_OK;
};
 
export const eliminarMedico = async (id: number) => {
    console.log('medicoService::eliminarMedico');
 
    await prisma.medicos.update({
        where: {
            id_medico: id
        },
        data: {
            estado_auditoria: '0',
            fecha_actualizacion: new Date()
        }
    });
 
    return RESPONSE_DELETE_OK;
};
 
 