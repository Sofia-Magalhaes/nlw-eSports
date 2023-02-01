//ECMAScript Modules
import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.send([
    {id: 1, name:'Anúncio 1'},
    {id: 2, name:'Anúncio 2'},
    {id: 2, name:'Anúncio 3'},
  ])
})

app.listen(3333)
