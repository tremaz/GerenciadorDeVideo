import { randomUUID } from "node:crypto"

export class DatabaseMemory{
    #videos = new Map()

    list(){
        this.#videos.values()
    }

    create(video){
        const videoid = randomUUID()

        this.#videos.set(videoid, "video1")

        // UUID = Unique Universal ID
    }

    update(id,video){
        this.#videos.set(id, video)
    }

    delete(id){
        this.#videos.delete(id)

    }
}