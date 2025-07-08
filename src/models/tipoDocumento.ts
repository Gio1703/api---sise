//INTERFACE DE DOCUMENTO


export interface TipoDocumento {
  idTipoDocumento: number;
  nombre: string;
  estado_auditoria: string | null;
  fecha_creacion: Date | null;
  fecha_actualizacion: Date | null;
}