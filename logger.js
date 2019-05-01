//function(exports, require, module, --filename, ---dirname)
console.log(__filename, __dirname);
var url = 'google.com'
console.log('google.com')


function log(message){
    
    console.log(message,'----', url); 
}

module.exports.log = log;