var express = require('express');
var router = express.Router();

router.get('/tasks/:empid', function(req, res) {
    console.log("got get for " + req.params.empid);
    res.sendStatus(200);
});

router.delete('/tasks/:empid/:taskid', function(req, res) {
    console.log("got get for " + req.params.empid);
    res.sendStatus(200);
});

router.post('/tasks/:empid', function(req, res) {
    console.log("got get for " + req.params.empid);
    res.sendStatus(200);
});
module.exports = router;