var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
var store = require('store')


var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/sensor_info', (req, res) => {
    var data = store.get('sensor_info');
    //store.remove('sensor_info');
    res.send(data);
});

router.post('/sensor_info', (req, res) => {
    //store.remove('sensor_info');
    console.log(req.body);
    store.set('sensor_info', req.body);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: true, status: 'success' });
});

// router.post('/speed_ctrl', (req, res) => {
//     //store.remove('speed_ctrl');
//     console.log(req.body);
//     store.set('speed_ctrl', req.body);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     //res.json({ success: true, status: 'success' });                                                                                                                                                                                                                                                                                                                                               
//     res.json(req.body);
// });

// router.get('/speed_ctrl', (req, res) => {
//     var data = store.get('speed_ctrl');
//     //store.remove('speed_ctrl');
//     console.log(data);
//     res.send(data);
// });

router.post('/req_temp', (req, res) => {
    //store.remove('speed_ctrl');
    console.log(req.body);
    store.set('req_temp', req.body);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    //res.json({ success: true, status: 'success' });                                                                                                                                                                                                                                                                                                                                               
    res.json(req.body);
});

router.get('/req_temp', (req, res) => {
    if(store.get('req_temp')==undefined){
        res.send({'req_temp':'20'});
    }
    else{
    var data = store.get('req_temp');
    //store.remove('speed_ctrl');
    //console.log(data);
    res.send(data);
    }
});

router.post('/req_state', (req, res) => {
    //store.remove('speed_ctrl');
    console.log(req.body);
    store.set('req_state', req.body);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    //res.json({ success: true, status: 'success' });                                                                                                                                                                                                                                                                                                                                               
    res.json(req.body);
});

router.get('/req_state', (req, res) => {
    if(store.get('req_state')==undefined){
        res.send({'req_state':'1'});
    }
    else{
    var data = store.get('req_state');
    //store.remove('speed_ctrl');
    //console.log(data);
    res.send(data);
    }
});

module.exports = router;
