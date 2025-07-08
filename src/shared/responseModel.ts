import { STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "./constant";


export class ResponseModel {
    constructor(public success: boolean, public message: string,public status: number, public data: any) {}
    
    static success(data: any, message: string = 'Ok') {
        return new ResponseModel(true, message, 200, data);
    }

    static error(message: string, status:number =500) {
        return new ResponseModel(false, message, status, null);
    }
}