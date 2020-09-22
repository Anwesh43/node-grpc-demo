const {join} = require('path')
const pdc = require('./packageDefintionCreater')
const obj  = pdc(join(__dirname, 'simple_service.proto'))
console.log(obj.SimpleService.service)