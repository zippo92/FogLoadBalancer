/**
 * Created by Caim03 on 12/09/17.
 */



var master = require('../model/masterServer');

exports.subscribe = subscribeFn;
exports.findMaster = findMasterFn;

//iscrizione dei master degli edge servers.
function subscribeFn(req, res) {

    var ip = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;

    if (req.body.type === "MASTER") {
        console.log(ip);
        res.send({status: 'ACK'});

    }
    else
        res.send({status: "BAD_REQUEST"});


}


function findMasterFn(req, res) {
    var masterIp = master.getMasterServerIp();

    if (!masterIp)
        res.send({status: "NO_MASTER"});

    else
        res.send({
            status: "ACK",
            masterIp: masterIp
        });
}