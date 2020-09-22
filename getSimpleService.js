const {join} = require('path')


module.exports = () => {
    const pdc = require('./packageDefintionCreater')
    const obj  = pdc(join(__dirname, 'simple_service.proto'))
    return obj.SimpleService 
}