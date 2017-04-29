var _ = require('lodash');
var mongoall = require('mongodb');
var mongo = mongoall.MongoClient;
var o_id = mongoall.ObjectID;


var url = 'mongodb://localhost:27017/EmpTodos';

var exports;

exports.getAll = function(callback){
    mongo.connect(url, function(err, db){
        if(err)callback(err);

        var collection = db.collection('employees');

        collection.find({}).toArray(function(err, emps){
            var taskCollection = db.collection('tasks');
            taskCollection.find({}).toArray(function(err, tasks){
                var groupedTasks = _.groupBy(tasks, 'empid');
                emps.forEach(emp => emp.tasks = groupedTasks[emp._id]);
                db.close();
                callback(err, emps);
            });
        });
    });
};

exports.deleteTask = function(taskid, callback){
    mongo.connect(url, function(err, db){
        if(err)callback(err);

        var collection = db.collection('tasks');

        collection.deleteOne({_id:o_id(taskid)}, callback);
    });
}

exports.addTask = function(task, callback){
    mongo.connect(url, function(err, db){
        if(err) callback(err);

        var collection = db.collection('tasks');
        collection.insertOne(task, callback);
    })
}

module.exports = exports;