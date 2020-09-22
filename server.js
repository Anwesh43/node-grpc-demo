const {Server, ServerCredentials} = require('grpc')
const getSimpleService = require('./getSimpleService')

const sayHello = (call, callback) => {
    const message = `hello ${call.request.name}`
    console.log(call, call.request.name)
    callback(null, {message});
}
const createServer = () => {
    const SimpleService = getSimpleService()
    const server = new Server()
    server.addService(SimpleService.service, {sayHello})
    console.log("starting server")
    server.bind('0.0.0.0:50051', ServerCredentials.createInsecure())
    server.start()
    console.log("started server")
}

createServer()