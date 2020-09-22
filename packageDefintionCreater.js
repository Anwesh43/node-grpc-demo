const {loadPackageDefinition} = require('grpc')
const {loadSync} = require('@grpc/proto-loader')

module.exports = (protoPath) => {
    const packageDefintion = loadSync(protoPath)
    const protoDescriptor = loadPackageDefinition(packageDefintion)
    return protoDescriptor 
}