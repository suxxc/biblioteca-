import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'
import { request } from 'http'

const server = fastify()
const database = new DatabaseMemory()
server.get('/', () => {
    return 'oi mundinho!'
})
server.post('/livro', () => {
    //scessando dados do corpo
    //const body = request.body
    //exibindo dados no terminal
    //console.log(body)

    const (titulo, autor, npaginas) = request
    
  database.create ({
    titulo: "livro 01",
    autor: "autor 01",
    npaginas: 400,
  })
  //listando obj criate
  console.log(database.list())
  //retornando o stt da rota
  return replay.status(201).send()
})
server.get('/livro', () => {
    return"ler!"
})

server.listen({
    port: 3333,
})
