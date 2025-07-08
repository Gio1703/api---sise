//ESTE SERVICE SOLO INERACUA CON LA BASE DE DATOS
import { PrismaClient, tipo_documentos } from '@prisma/client';
import { TipoDocumento } from '../models/tipoDocumento';
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from '../shared/constant';
import { toPrismaTipoDocumento, fromPrismaTipoDocumento } from '../mappers/tipoDocumento.mapper';



const prisma = new PrismaClient();

export const listarTipoDocumentos = async () => {
  const tipoDocumentos: tipo_documentos[] = await prisma.tipo_documentos.findMany({
     where : {
      estado_auditoria: '1' // Filtrar por estado de auditoría activo
     },
    orderBy: { id_tipo_documento: 'asc' }
  });
  return tipoDocumentos.map((tipoDocumento: tipo_documentos) => fromPrismaTipoDocumento(tipoDocumento)); // Convertir cada tipo_documentos a TipoDocumento
};
///////////////////
export const obtenerTipoDocumento = async (id: number) => {
  console.log('tipoDocumentoService::obtenerTipoDocumento');

  const TipoDocumento: tipo_documentos | null = await prisma.tipo_documentos.findUnique({
      where: {
      id_tipo_documento: id
  }
});

  return TipoDocumento;
}
/////////////////
export const insertarTipoDocumento = async (tipoDocumento: TipoDocumento) => {
    console.log('tipoDocumentoService::insertarTipoDocumento');

    await prisma.tipo_documentos.create({
        data: toPrismaTipoDocumento(tipoDocumento) // Convertir el objeto TipoDocumento a un objeto compatible con Prisma
    });

    return RESPONSE_INSERT_OK;
}

export const modificarTipoDocumento = async(id: number, tipoDocumento: TipoDocumento) => {
    console.log('tipoDocumentoService::modificarTipoDocumento');
 
      await prisma.tipo_documentos.update({
        where: {
            id_tipo_documento: id
        },
        data: {
          ...tipoDocumento, //spread operator para actualizar los campos
          fecha_actualizacion: new Date() // Actualizar la fecha de actualización
        }
        
    });
 
    return RESPONSE_UPDATE_OK;
}
 
export const eliminarTipoDocumento = async (id: number) => { 
  console.log('tipoDocumentoService::eliminarTipoDocumento');
  
  await prisma.tipo_documentos.update({
    where: {
      id_tipo_documento: id
    },
    data: {
      estado_auditoria: '0', // Cambiar el estado de auditoría a '0' (inactivo)
      fecha_actualizacion: new Date() // Actualizar la fecha de actualización
    }
  });
  return RESPONSE_DELETE_OK;
}