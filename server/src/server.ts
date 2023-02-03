//ECMAScript Modules

// HTTP methods / API RESTful / HTTP Codes (mostra se a resposta que se recebe é valida ou não)

// status que começa com: 2 (sucesso), 3 (redirecionamento), 4 (erro por código errado), 5 (erro inesperado)

// GET(buscar informação), 
// POST(criar algo),
// PUT(editar uma entidade),
// PATCH(editar uma informação especifica de uma entidade),
// DELETE(remover alguama entidade)

// Tipos de parâmetros
/**
 * Query: Vem atraves do ponto de interrogação (precisa persistir estado) usado para filtros, ordenação,
 *  paginação, coisas que não são sensiveis(senha). São sempre nomeados. Parametro de URL
 * Route: É também um parametro de URL, não são nomeados. Reconhecido só de olhar
 * Body: Usado quando se vai mandar varios dados para uma única requisição (geralmente para envio de formulário). 
 * Não fica na URL, fica escondido.
 */

import express from 'express'
import  {PrismaClient} from '@prisma/client'


const app = express()
//Faz conexão automatica com o banco de dados
const prisma = new PrismaClient({
  log: ['query']
})


app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany()

  return response.json(games);
});

app.post('/ads', (request, response) => {
  return response.status(201).json([]);
});


app.get('/games/:id/ads', (request, response) => {
  // const gameId = request.params.id;

  return response.send([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' },
    { id: 4, name: 'Anúncio 4' },
    { id: 5, name: 'Anúncio 5' },
  ])
})

app.get('/ads/:id/discord', (request, response) => {
  // const adId = request.params.id;

  return response.send([
  ])
})

app.listen(3333)
