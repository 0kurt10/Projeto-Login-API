import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

const users = [];

//post seria para crição de usuarios

app.post("/user", (req, res) => {
  users.push(req.body);

  res.send(req.body);
});

//

app.get("/user", (req, res) => res.json(users));

// request, response

app.listen(3000);

/* 
app. +
tipo de rota  + / metodo HTTP

Endereço
dns / nome da rota

*/
