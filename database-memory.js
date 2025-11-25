import { randomUUID } from "node:crypto"

export class DatabaseMemory{
    #videos = new Map()

    list(){
        return Array.from(this.#videos.values())
    }

    create(video){
        const videoid = randomUUID()

        return this.#videos.set(videoid, video)

        // UUID = Unique Universal ID
    }

    update(id,video){
        return this.#videos.set(id, video)
    }

    delete(id){
        return this.#videos.delete(id)

    }
}