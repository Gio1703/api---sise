import { Request, Response } from 'express';
import * as loginService from './auth.service';
import { ResponseModel } from '../shared/responseModel';
import { STATUS_UNAUTHORIZED } from '../shared/constant';



export const loginAuth  = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const token = await loginService.loginAuth(username, password);
        res.json(ResponseModel.success({ token }));
    } catch (error: any) {
        res.status(STATUS_UNAUTHORIZED).json(ResponseModel.error(error.message));
    }
};