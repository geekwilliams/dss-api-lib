// Soap request generator for DSS/DSL smi service. 
// Operation is string, args must be object. 


class soapGen {
    constructor(sessionId) {
        this.sessionId = sessionId;
    }

    generateSoapRequest(operation, args) {
        
        // start of soap envelope
        let soapRequest = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:v1=\"http://www.dolby.com/dcinema/ws/smi/v1_0\">" + 
        "<soapenv:Header/>" +
        "<soapenv:Body>" +
        "<v1:" + operation + ">";

        // add args
        Object.keys(args).forEach(function (key) {
            soapRequest += "<" + key + ">" + args[key] + "</" + key + ">";
        });

        // close envelope
        soapRequest += "</v1:" + operation + ">" +
			"</soapenv:Body>" +
			"</soapenv:Envelope>";
        
        return soapRequest;
    }
}

module.exports = soapGen;