import express, { response } from "express";

const app = express();

const users = [];

app.post("/user", (req, res) => {
  console.log(req);

  res.send("teste");
});

app.get("/user", (req, res) => res.send("Tudo certo!"));

// request, response

app.listen(3000);

/* 
app. +
tipo de rota  + / metodo HTTP

Endereço
dns / nome da roda

*/
