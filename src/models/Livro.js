import mongoose from "mongoose";

const livrosSchema = new mongoose.Schema(
  {
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
    preco: {type: Number, required: true},
    paginas: {type: Number, required: true},
  }, {versionKey: false}
);
const Livro = mongoose.model('livros', livrosSchema);
export default Livro;