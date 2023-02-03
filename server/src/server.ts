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
import { PrismaClient } from '@prisma/client'
import { Select } from '@material-ui/core';


const app = express()
//Faz conexão automatica com o banco de dados
const prisma = new PrismaClient({
  log: ['query']
})


app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        }
      }
    }
  })

  return response.json(games);
});

app.post('/ads', (request, response) => {
  return response.status(201).json([]);
});


app.get('/games/:id/ads', async(request, response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select:{
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hoursStart: true,
      hourEnd: true,      
    },
    where: {
      gameId,
    },
    orderBy:{
      createdAt:'desc',
    }
  })

  return response.send(ads.map(ad=>{
    return{
      ...ad,
      weekDays: ad.weekDays.split(',')
    }
  }))
})

app.get('/ads/:id/discord', (request, response) => {
  // const adId = request.params.id;

  return response.send([
  ])
})

app.listen(3333)
