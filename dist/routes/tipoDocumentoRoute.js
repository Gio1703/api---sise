"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tipoDocumentoController_1 = require("../controllers/tipoDocumentoController");
const auth_middleware_1 = require("../auth/auth.middleware");
const router = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   - name: TipoDocumento
 *     description: Gestion de tipos de documentos
 */
/**
 * @swagger
 * /api/v1/tipo-documentos:
 *   get:
 *     summary: Listar todos los tipos de documento
 *     tags: [TipoDocumento]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista obtenida correctamente
 */
router.get('/', auth_middleware_1.authMiddleware, tipoDocumentoController_1.listarTipoDocumentos);
router.get('/:id', auth_middleware_1.authMiddleware, tipoDocumentoController_1.obtenerTipoDocumento);
/**
 * @swagger
 * /api/v1/tipo-documentos/{id}:
 *   get:
 *     summary: Obtener un tipo de documento por ID
 *     tags: [TipoDocumento]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del tipo de documento a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tipo de documento obtenido correctamente
 */
router.post('/', auth_middleware_1.authMiddleware, tipoDocumentoController_1.insertarTipoDocumento);
/**
 * @swagger
 * /api/v1/tipo-documentos:
 *   post:
 *     summary: Crear un nuevo tipo de documento
 *     tags: [TipoDocumento]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tipo de documento creado correctamente
 */
router.put('/:id', auth_middleware_1.authMiddleware, tipoDocumentoController_1.modificarTipoDocumento);
/**
 * @swagger
 * /api/v1/tipo-documentos/{id}:
 *   put:
 *     summary: Actualizar un tipo de documento existente
 *     tags: [TipoDocumento]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del tipo de documento a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tipo de documento actualizado correctamente
 */
router.delete('/:id', auth_middleware_1.authMiddleware, tipoDocumentoController_1.eliminarTipoDocumento);
/**
 * @swagger
 * /api/v1/tipo-documentos/{id}:
 *   delete:
 *     summary: Eliminar un tipo de documento
 *     tags: [TipoDocumento]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del tipo de documento a eliminar
 *     responses:
 *       200:
 *         description: Tipo de documento eliminado correctamente
 */
exports.default = router;
