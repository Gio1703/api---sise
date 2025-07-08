import express,{ Router } from "express";
import { eliminarMedicos, insertarMedico, listarMedicos, modificarMedico, obtenerMedico } from '../controllers/medicosController';

 
 
 
const router: Router = express.Router();
 
router.get('/', listarMedicos);
router.get('/:id', obtenerMedico);
router.post('/', insertarMedico);
router.put('/:id', modificarMedico);
router.delete('/:id', eliminarMedicos);
 
 
export default router;