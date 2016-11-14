import EventEmitter from 'events'

class MyEmitter extends EventEmitter {}

export const apilistEvent = new MyEmitter()

// export const httpEvent = new MyEmitter()