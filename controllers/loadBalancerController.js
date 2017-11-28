/**
 * Created by Caim03 on 12/09/17.
 */



var masterServer = require('../model/edgeServer');

exports.subscribe = subscribeFn;
exports.findMaster = findMasterFn;

//iscrizione dei master degli edge servers.
function subscribeFn(req, res) {

    var ipMaster = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;

    if(req.body.type === "MASTER")
        masterServer.setMasterServer(ipMaster);

    console.log(masterServer.getMasterServer());
    res.send({status: 'ACK'});
}


function findMasterFn(req, res) {
    if(masterServer.getMasterServer() === null)
        res.send("error, we have no master");

    else
        res.send(masterServer.getMasterServer());
}