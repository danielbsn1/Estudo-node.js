import {autor} from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const autores = await autor.find();
      res.status(200).json(autores);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async obterAutorPorId(req, res) {
    try {
      const autorEncontrado = await autor.findById(req.params.id);
      if (!autorEncontrado) {
        return res.status(404).json({ message: 'Autor not found' });
      }
      res.status(200).json(autorEncontrado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async criarAutor(req, res) {
    try {
      const newAutor = new autor(req.body);
      await newAutor.save();
      res.status(201).json({ message: 'Autor created successfully', autor: newAutor });
    } catch (error) {
      res.status(400).json({ message: `${error.message} - falha ao criar autor` });
    }
  }

  static async updateAutor(req, res) {
    try {
      const updatedAutor = await autor.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedAutor) {
        return res.status(404).json({ message: 'Autor not found' });
      }
      res.status(200).json(updatedAutor);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async deleteAutor(req, res) {
    try {
      const deletedAutor = await autor.findByIdAndDelete(req.params.id);
      if (!deletedAutor) {
        return res.status(404).json({ message: 'Autor not found' });
      }
      res.status(200).json({ message: 'Autor deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default AutorController;