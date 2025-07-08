"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAuth = void 0;
const jws_1 = require("./jws");
const constant_1 = require("../shared/constant");
const loginAuth = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('auth.service::loginAuth');
    /* LOGICA CON BASE DE DATOS - TAREA */
    if (username === 'admin' && password === 'admin') {
        const token = (0, jws_1.signToken)({ id: 1, role: 'ADMINISTRADOR', username });
        return token;
    }
    else {
        return constant_1.RESPONSE_CREDENTIALS_ERROR;
    }
});
exports.loginAuth = loginAuth;
