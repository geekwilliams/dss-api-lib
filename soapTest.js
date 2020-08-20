const smiSoap = require('./required/smiSoapGenerator');
const dlbSmi = require('./dolbySMI');

console.log('***Top of the test***\n\n');

let operation = 'getClipsRequest';
console.log('Operaton: ' + operation);

let args = {
    auditoriumNumber: '*'
}
let gen = new smiSoap();

let request = gen.generateSoapRequest(operation, args);

//console.log(request);

let serverId = '10.95.128.30';
let port = '8080';

let server = new dlbSmi(serverId);
function getResponse(){
    server.contentManagementRequest(operation, args)
        .then(response => {console.log(response)})
        .catch(response => {console.log(response)});


    //console.log(response);
    
}

getResponse();