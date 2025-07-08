import { Request, Response } from "express";

import * as medicosService from "../services/medicosService";

import { ResponseModel } from "../shared/responseModel";

import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constant";
import { medicosCrearSchema } from "../schemas/medicosSchema";

 
export const insertarMedico = async (req: Request, res: Response): Promise<any> => {

    console.log('medicoController::insertarMedico');
    const {error} : any = medicosCrearSchema.validate(req.body);
    if (error) {
        res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }
    try {

        const response = await medicosService.insertarMedico(req.body);

        res.json(ResponseModel.success(response));

    } catch (error: any) {

        console.error(error.message);

        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

    }

}
 
export const listarMedicos = async (req: Request, res: Response) => {

    console.log('medicoController::listarMedicos');

    try {

        const response = await medicosService.listarMedicos();

        res.json(ResponseModel.success(response));

    } catch (error: any) {

        console.error(error.message);

        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

    }

}
 
export const obtenerMedico = async (req: Request, res: Response) => {

    console.log('medicoController::obtenerMedico');

    try {

        const {id} = req.params;
        const response = await medicosService.obtenerMedico(Number(id));
        res.json(ResponseModel.success(response));

    } catch (error: any) {

        console.error(error.message);

        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

    }

}
 
export const modificarMedico = async (req: Request, res: Response) => {

    console.log('medicoController::modificarMedico');

    try {

        const id = Number(req.params.id);
        const response = await medicosService.modificarMedico(Number(id), req.body);

    } catch (error: any) {

        console.error(error.message);

        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

    }

}
 
export const eliminarMedicos = async (req: Request, res: Response) => {

    console.log('medicoController::eliminarMedicos');

    try {

        const {id } = req.params;
        const response = await medicosService.eliminarMedico(Number(id));
        res.json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);

        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

    }

}

 