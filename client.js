const {credentials} = require('grpc')
const getSimpleService = require('./getSimpleService')

const createClient = () => {
    const SimpleService = getSimpleService()
    const client = new SimpleService('localhost:50051', credentials.createInsecure())
    return client 
}
const client = createClient()
const cb = (err, data) => {
    console.log(data)
}
console.log("start typing")
process.stdin.resume()
process.stdin.on('data', (data) => {
    const name = data.toString()
    client.sayHello({name}, (err, body) => {
        console.log(body.message)
    })
})