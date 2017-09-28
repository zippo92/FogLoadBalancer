/**
 * Created by Caim03 on 12/09/17.
 */



var masterServer = require('../model/edgeServer');

exports.subscribe = subscribeFn;
exports.findMaster = findMasterFn;

//iscrizione dei master degli edge servers.
function subscribeFn(req, res) {

    var ip = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;

    if(req.body.type === "MASTER")
        masterServer = ip;

    console.log(masterServer);

}


function findMasterFn(req, res)
{

    if(masterServer == null)
        res.send("error, we have no master");

    else
        res.send(masterServer);



}