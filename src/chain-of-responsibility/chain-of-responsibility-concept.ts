// comportamental + creational

interface IHandler {
    handle(payload: number): number | void
}

class Successor1 implements IHandler {

    handle(payload: number): number {
        console.log(`Successor1 payload = ${payload}`)
        const test = Math.floor(Math.random() * 2) + 1
        // console.log(`test ${test}`)
        if (test === 1) {
            payload += 1
            payload = new Successor1().handle(payload)
        } else {
            payload -= 1
            payload = new Successor2().handle(payload)
        }
        return payload
    }
}

class Successor2 implements IHandler {

    handle(payload: number) {
        console.log(`Successor2 payload = ${payload}`)
        const test = Math.floor(Math.random() * 3) + 1

        if (test === 1) {
            payload = payload * 2
            payload = new Successor1().handle(payload)

        } else if (test === 2) {
            payload = payload / 2
            payload = new Successor2().handle(payload)
        }
        // daca payload este diferit de 1 sau 2 se returneaza valoarea payload
        return payload
    }
}

class Chain {
    static instance: Chain
    #payLoad: number

    constructor(table: number) {
        if (Chain.instance) {
            this.#payLoad = table;
            return Chain.instance
        }
        this.#payLoad = table
        Chain.instance = this
        return Chain.instance
    }

    start() {
        return new Successor1().handle(this.#payLoad)
    }
}

const CHAIN = new Chain(1)
const OUT = CHAIN.start()

console.log(`Finished result = ${OUT}`)

