//Importa o framework Express para criar a aplicação web
import express from "express"; 
//Importa o Multer para lidar com uploads de arquivos
import multer from "multer"; 
//Importa as funções controladoras para lidar com a lógica dos posts
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200 
}

const upload = multer({dest:"./uploads"});

const routes = (app) => {
    //Permite que o servidor interprete requisições com corpo no formato JSON
    app.use(express.json());
    app.use(cors(corsOptions));
    //Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    //Rota para criar um post
    app.post("/posts", postarNovoPost); //Chama a função controladora para criação de posts
    //Rota para upload de imagens (assumindo uma única imagem chamada "imagem")
    app.post("/upload", upload.single("imagem"), uploadImagem) //Chama a função controladora para processamento da imagem

    app.put("/upload/:id", atualizarNovoPost);
}

export default routes;