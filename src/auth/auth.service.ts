import { sign } from "crypto";
import { signToken } from "./jws";
import { RESPONSE_CREDENTIALS_ERROR } from "../shared/constant";

export const loginAuth = async (username: string, password: string) =>{
    console.log('auth.service::loginAuth');
    /* LOGICA CON BASE DE DATOS - TAREA */
    
    if (username === 'admin' && password === 'admin') {
        const token = signToken({ id: 1, role: 'ADMINISTRADOR', username});
        return token;
    } else {
        return RESPONSE_CREDENTIALS_ERROR;
    }
}