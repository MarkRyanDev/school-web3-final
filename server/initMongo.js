var mongoall = require('mongodb');
var mongo = mongoall.MongoClient;

var url = 'mongodb://localhost:27017/EmpTodos';

mongo.connect(url, function(err, db){
    var collection = db.collection('employees');
    collection.insertMany([
        {
            name: "Sally Salamander",
            tasks:[
                {text:"clean computers", done:true},
                {text:"email frank", done:false},
                {text:"make invoice", done:false}
            ]
        },
        {
            name: "John Johnson",
            tasks:[
                {text:"clean toilet", done:false},
                {text:"take out trash", done:false},
                {text:"mop floors", done:false}
            ]
        },
        {
            name: "Catbert",
            tasks:[
                {text:"Fire Dilbert", done:false},
                {text:"Cackle", done:true},
                {text:"Yell at Wally", done:false}
            ]
        }
    ], function(err, result){
        // console.log(result);
        db.close();
    })
})
