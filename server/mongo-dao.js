var mongoall = require('mongodb');
var mongo = mongoall.MongoClient;
var o_id = mongoall.ObjectID;


var url = 'mongodb://localhost:27017/EmpTodos';

var exports;

exports.getAll = function(callback){
    mongo.connect(url, function(err, db){
        if(err)callback(err);

        var collection = db.collection('employees');

        collection.find({}).toArray(function(err, docs){
            db.close();
            callback(err, docs);
        });
    });
};

module.exports = exports;