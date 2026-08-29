import express from 'express';
import LivroController from '../Controllers/livroController.js';

const router = express.Router();

router.get('/livros', LivroController.listarLivros);
router.get('/livros/editora', LivroController.listarLivrosPorEditora);
router.get('/livros/:id', LivroController.obterLivroPorId);
router.post('/livros', LivroController.criarLivro);
router.put('/livros/:id', LivroController.updateLivro);
router.delete('/livros/:id', LivroController.deleteLivro);


export default router;