var express =  require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://ysumit99:Sumit!!!1995@ds111012.mlab.com:11012/mytasklist_sumit', ['tasks']);

//Get All Tasks
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

//Get Single Task
router.get('/task/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

module.exports = router;