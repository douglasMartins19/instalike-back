import express from "express";
import routes from "./src/routes/postRoutes.js";

const app = express();        //cria o servidor "app" como uma constante e designa a função "express()"
routes(app);

app.listen(3000, () => {      //diz para o servidor ficar "escutando" e adiciona a porta local 3000 -> http://localhost:3000
    console.log("Servidor escutando...");
});
