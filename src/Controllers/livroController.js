import Livro from '../models/Livro.js';

class LivroController {
 
  static async listarLivros(req, res) {
    try {
      const livros = await Livro.find();
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async obterLivroPorId(req, res) {
    try {
      const livro = await Livro.findById(req.params.id);
      if (!livro) {
        return res.status(404).json({ message: 'Livro not found' });
      }
      res.status(200).json(livro);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async criarLivro(req, res) {
    try {
      const newLivro = new Livro(req.body);
      res.status(201).json({ message: 'Livro created successfully', livro: newLivro });
    } catch (error) {
      res.status(400).json({ message: `${error.message} - falha ao criar livro` });
    }
  }

  static async updateLivro(req, res) {
    try {
      const updatedLivro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedLivro) {
        return res.status(404).json({ message: 'Livro not found' });
      }
      res.status(200).json(updatedLivro);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteLivro(req, res) {
    try {
      const deletedLivro = await Livro.findByIdAndDelete(req.params.id);
      if (!deletedLivro) {
        return res.status(404).json({ message: 'Livro not found' });
      }
      res.status(200).json({ message: 'Livro deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default LivroController;