import { randomUUID } from "crypto" 

export class DatabaseMemory{

    #livros = new Map()
    //listar livros
    list(){
        return this.#livros.values()
    }

        //criando livro
        create(livro){
            const livroId = randomUUID()
            this.#livros.set(livroId, livro) 
        }
        //atualizar livro
        update(id, livro){
            this.#livros.set(id, livro)
        }
        delete(id, livro){
            this.#livros.delete(id, livro)
        }
}