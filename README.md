# dss-api-lib
Require 'dolbySMI' to initialize.  
DSS/DSL servers use http port 8080 for soap

Example code:


const dlbSmi = require('./dolbySMI);

let operation = 'getClipsRequest';

let args = {
    auditoriumNumber: '*'
}
let serverId = '0.0.0.0';
let dlbServer = new dlbSmi(serverId);

server.contentManagementRequest(operation, args)
      .then(res => {console.log(res)})
      .catch(err => {console.log(err)});
