import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './Routes/index.js';

    const conexao = await conectaNaDatabase();

    conexao.on("error", console.log.bind(console, "Erro de conexão"));
    conexao.once("open", () => {
      console.log("Conexão com o banco feita com sucesso");
    });

const app = express();
routes(app);


export default app;

