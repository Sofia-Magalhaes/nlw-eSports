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
import { convertHourStringToMinutes } from './utils/convert-hours-string-to-minutes';
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string';


const app = express()

app.use(express.json());

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

app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const body:any = request.body;

  //Validação (biblioteca Zod javascript)
  

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hoursStart: convertHourStringToMinutes(body.hoursStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    }
  })

  return response.status(201).json(ad);
});


app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
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
    orderBy: {
      createdAt: 'desc',
    }
  })

  return response.send(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hoursStart: convertMinutesToHourString(ad.hoursStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd),
    }
  }))
})

app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    }
  })

  return response.send({
    discord: ad.discord,
  })
})

app.listen(3333)
