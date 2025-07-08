
import { PrismaClient } from "@prisma/client";
import { Paciente } from "../models/paciente";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constant";
import { toPrismaPaciente } from "../mappers/paciente.mapper";

const prisma = new PrismaClient();

export const listarPacientes = async () => {
  console.log('pacientesServices::listarPacientes');
  return await prisma.pacientes.findMany({
    where: {
      estado_auditoria: '1'
    },
    orderBy: {
      id_paciente: 'asc'
    }
  });
}

export const obtenerPaciente = async (id: number) => {
  console.log('pacientesServices::obtenerPaciente');
  return await prisma.pacientes.findUnique({
    where: {
      id_paciente: id
    }
  });
}

export const insertarPaciente = async (paciente: Paciente) => {
  console.log('pacientesServices::insertarPaciente');
  await prisma.pacientes.create({
    data: toPrismaPaciente(paciente) // Convertir el objeto Paciente a un objeto compatible con Prisma
  });
  return RESPONSE_INSERT_OK;
}

export const modificarPaciente = async (id: number, paciente: Paciente) => {
  console.log('pacientesServices::modificarPaciente');
  const dataActualizada = {
    ...paciente,
    fecha_actualizacion: new Date() // Actualizar la fecha de actualización
  };
  await prisma.pacientes.update({
    where: {
      id_paciente: id
    },
    data: toPrismaPaciente(dataActualizada) // Convertir el objeto Paciente a un objeto compatible con Prisma
  });
  return RESPONSE_UPDATE_OK;
}

export const eliminarPaciente = async (id: number) => {
  console.log('pacientesServices::eliminarPaciente');
  await prisma.pacientes.update({
    where: {
      id_paciente: id
    },
    data: {
      estado_auditoria: '0'
    }
  });
  return RESPONSE_DELETE_OK;
}
