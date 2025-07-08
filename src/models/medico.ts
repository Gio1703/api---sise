export interface Medico {
  id_medico: number;
  nombres: string;
  apellidos: string;
  correo: string | null;
  celular: string | null;
  id_especialidad: number;
  estado_auditoria?: string;
  fecha_creacion?: Date;
  fecha_actualizacion?: Date | null;
}
 