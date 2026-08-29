import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livrosSchema = new mongoose.Schema(
  {
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    autor: {type: autorSchema , required: true},
    preco: {type: Number, required: true},
    paginas: {type: Number, required: true},
  }, {versionKey: false}
);
const Livro = mongoose.model('livros', livrosSchema);
export default Livro;