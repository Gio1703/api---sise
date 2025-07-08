import express, { Application, Request, response, Response } from 'express';
import { TipoDocumento } from '../models/tipoDocumento';
import * as tipoDocumentoService from '../services/tipoDocumentoService';
import { number } from 'joi';
import { ResponseModel } from '../shared/responseModel';
import { tipoDocumentoCrearSchema } from '../schemas/tipoDocumentoSchema';
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constant";



export const insertarTipoDocumento = async (req: Request, res: Response): Promise<any>  => {
    console.log('tipoDocumentoController::insertarTipoDocumento');
    const { error }: any = tipoDocumentoCrearSchema.validate(req.body);
    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }
    try {
        const response = await tipoDocumentoService.insertarTipoDocumento(req.body);
        res.json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}
export const listarTipoDocumentos = async(req: Request, res: Response)=>{
    console.log('tipoDocumentoController::listarTipoDocuemento');
    try {
        //LOGICA
        const tipoDocumento = await tipoDocumentoService.listarTipoDocumentos();
        res.json(ResponseModel.success(tipoDocumento));
    } catch (error: any) {
    console.log("Error en listarTipoDocumentos:", error);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
} 
}


export const obtenerTipoDocumento = async (req: Request, res: Response) => {
    console.log('tipoDocumentoController::obtenerTipoDocumento');
    try {
        const { id } = req.params;
        const tipoDocumento = await tipoDocumentoService.obtenerTipoDocumento(Number(id));
        res.json(tipoDocumento);
        //res.status(200).json({ message: 'Tipo de documento modificado correctamente' });
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}



export const modificarTipoDocumento = async (req: Request, res: Response) => {
    console.log('tipoDocumentoController::modificarTipoDocumento');
    try {
        
      
             const { id } = req.params;
             const response = await tipoDocumentoService.modificarTipoDocumento(Number(id), req.body);
             res.json(ResponseModel.success(null, response));
      
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}


export const eliminarTipoDocumento = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const response = await tipoDocumentoService.eliminarTipoDocumento(Number(id));
        res.json(ResponseModel.success(null, response));
      
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};