"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.eliminarPaciente = exports.modificarPaciente = exports.insertarPaciente = exports.obtenerPaciente = exports.listarPacientes = void 0;
const pacientesService = __importStar(require("../services/pacientesServices"));
const responseModel_1 = require("../shared/responseModel");
const pacientesSchema_1 = require("../schemas/pacientesSchema");
const constant_1 = require("../shared/constant");
const listarPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacientesController::listarPacientes');
    try {
        const response = yield pacientesService.listarPacientes();
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constant_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.listarPacientes = listarPacientes;
const obtenerPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacientesController::obtenerPaciente');
    try {
        const { id } = req.params;
        const response = yield pacientesService.obtenerPaciente(Number(id));
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constant_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.obtenerPaciente = obtenerPaciente;
const insertarPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacientesController::insertarPaciente');
    const { error } = pacientesSchema_1.pacienteCrearSchema.validate(req.body);
    if (error) {
        return res.status(constant_1.STATUS_BAD_REQUEST).json(responseModel_1.ResponseModel.error(error.message, constant_1.STATUS_BAD_REQUEST));
    }
    try {
        const response = yield pacientesService.insertarPaciente(req.body);
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constant_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.insertarPaciente = insertarPaciente;
const modificarPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacientesController::modificarPaciente');
    try {
        const { id } = req.params;
        const response = yield pacientesService.modificarPaciente(Number(id), req.body);
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constant_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.modificarPaciente = modificarPaciente;
const eliminarPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('pacientesController::eliminarPaciente');
    try {
        const { id } = req.params;
        const response = yield pacientesService.eliminarPaciente(Number(id));
        res.json(responseModel_1.ResponseModel.success(response));
    }
    catch (error) {
        console.error(error.message);
        res.status(constant_1.STATUS_INTERNAL_SERVER_ERROR).json(responseModel_1.ResponseModel.error(error.message));
    }
});
exports.eliminarPaciente = eliminarPaciente;
