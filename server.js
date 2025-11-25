// import {  createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write("oi")

//     return response.end()
// }   )

// server.listen(3333)

import { fastify } from "fastify"
import { DatabaseMemory } from './database-memory.js'

const server = fastify()
const database = new DatabaseMemory()


// o crud dessa porra (create, read, update, destroy)
// fastify tem Post, Get, Put e Delete



server.post("/videos", (request, reply) => {

    const { title, description, duration} = request.body
     
    database.create({
        title,
        description,
        duration,
    })

    return reply.status(201).send()
})

server.get("/videos", (request, reply) => {
    const videos = database.list()

    return videos
})

server.put("/videos/id", () => {
    return 'Aqui teu videor'
})

server.delete("/videos.id", () => {
    return 'Aqui teu videor'
})



server.listen({
    port: 3333,
})