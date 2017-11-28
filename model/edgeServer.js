var masterServer = null;

exports.getMasterServer = getMasterServerFn;
exports.setMasterServer = setMasterServerFn;

function getMasterServerFn() {
    return masterServer;
}

function setMasterServerFn(master) {
    masterServer = master;
    return masterServer;
}