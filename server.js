import express from "express";

const posts = [      //criando uma base de dados utilizando uma array []
    { 
        id: 1,                                           //cria uma id única específica ao objeto
        descricao: "Uma foto teste",                     //cada objeto da array fica dentro das chaves {}, junto às propriedades do objeto
        imagem: "https://placecats.com/millie/300/150"   //cada propriedade é um par chave-valor, onde chave é o nome e o valor é o conteúdo
    },
    { 
        id: 2,
        descricao: "Gato fazendo yoga",
        imagem: "https://placecats.com/millie/300/150" 
    },
    { 
        id: 3,
        descricao: "Gatinho fazendo panqueca", 
        imagem: "https://placecats.com/millie/300/150" 
    },
];

const app = express();        //cria o servidor "app" como uma constante e designa a função "express()"
app.use(express.json());       //"servidor, me devolva json"

app.listen(3000, () => {      //diz para o servidor ficar "escutando" e adiciona a porta local 3000 -> http://localhost:3000
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {          //get para buscar algo no servidor, designa rota, requisição-resposta
    res.status(200).send(posts);           //requisição de "status(200)"" sendo um código http q significa ok
})

function buscarPostPorID(id) {             //realizando busca por ID de objeto
    return posts.findIndex((post) => {         //método do js para encontrar um dado pelo índice
        return post.id === Number(id)     //compara o valor da propriedade id com o parâmetro id da função, e já converte para número
    })
}

app.get("/posts/:id", (req, res) => {                    //identificando os objetos da array na url, usando "/:id"    
    const index = buscarPostPorID(req.params.id)         //requisitando o parâmetro id adicionado na linha acima
    res.status(200).json(posts[index]);                  //retorna a posição (index) do objeto da array (posts)
})
