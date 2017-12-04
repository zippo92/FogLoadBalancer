/**
 * Created by Caim03 on 12/09/17.
 */
module.exports = function (app) {

    var loadBalancerController = require('../controllers/loadBalancerController');

    app.post('/api/lb/edge/subscribe',loadBalancerController.subscribe);


    app.get('/api/lb/edge/subscribe',loadBalancerController.findMaster)
};
