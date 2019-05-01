const os = require('./osinfo');
const logger =  require('./logger');
function helloWorld(name) {
   // console.log(name, module);
    console.log(logger);
}

logger.log('call');

helloWorld('vj'); 