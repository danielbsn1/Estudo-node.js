import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';

conectaNaDatabase();

    const conexao = await conectaNaDatabase();

    conexao.on("error", console.log.bind(console, "Erro de conexão"));
    conexao.once("open", () => {
      console.log("Conexão com o banco feita com sucesso");
    });

const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: 'Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
  },
  {
    id: 2,
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
  },
  {
    id: 3,
    titulo: 'Harry Potter e a Pedra Filosofal',
    autor: 'J.K. Rowling',
  },
];

function buscarLivro(id) {
  return livros.find((livro) => livro.id === Number(id));
}

app.get('/', (req, res) => {
  res.status(200).send('hello, world');
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro adicionado com sucesso' );
});

app.get('/livros/:id', (req, res) => {
  const livro = buscarLivro(req.params.id);
  if (!livro) {
    return res
      .status(404)
      .send('Livro não encontrado');
  }
  res.status(200).json(livro);
});  

app.put('/livros/:id', (req, res) => {
  const livro = buscarLivro(req.params.id);
  if (!livro) {
    return res
      .status(404)
      .send('Livro não encontrado');
  }
  livro.titulo = req.body.titulo;
  livro.autor = req.body.autor;
  res.status(200).send('Livro atualizado com sucesso');
});

app.delete('/livros/:id', (req, res) => {
  const livro = buscarLivro(req.params.id);
  if (!livro) {
    return res
      .status(404)
      .send('Livro não encontrado');
  }
  const indice = livros.indexOf(livro);
  livros.splice(indice, 1);
  res.status(200).send('Livro excluído com sucesso');
});

export default app;

