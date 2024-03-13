import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
router.get('/', usuarioController.index); // Obter usuario
router.get('/:id', usuarioController.show);

// Deve existir
router.post('/', loginRequired, usuarioController.store); // Criar usuario
router.put('/', loginRequired, usuarioController.update);
router.delete('/', loginRequired, usuarioController.delete);

export default router;
