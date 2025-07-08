import express,{Router} from 'express';
import { 
    insertarEspecialidad,  listarEspecialidades,  obtenerEspecialidad,  modificarEspecialidades,   eliminarEspecialidades
} from '../controllers/especialidadesController';

const router: Router = express.Router();

router.get('/', listarEspecialidades);
router.get('/:id', obtenerEspecialidad);
router.post('/', insertarEspecialidad);
router.put('/:id', modificarEspecialidades);
router.delete('/:id', eliminarEspecialidades);

export default router;