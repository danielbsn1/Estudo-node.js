import express from 'express';
import autorController from '../Controllers/autoresController.js';

const router = express.Router();

router.get('/autores', autorController.listarAutores);
router.get('/autores/:id', autorController.obterAutorPorId);
router.post('/autores', autorController.criarAutor);
router.put('/autores/:id', autorController.updateAutor);
router.delete('/autores/:id', autorController.deleteAutor);

export default router;