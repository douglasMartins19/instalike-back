import express from "express";

const app = express();     //cria o servidor (app) como uma constante e designa a função express
app.listen(3000, () => {      //diz para o servidor ficar "escutando" e adiciona a porta local 3000 
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {   //get para buscar algo no servidor, designa rota, requisição-resposta
    res.status(200).send("Boas vindas a imersão!");   //
})

