var mongojs = require('mongojs');
var db = mongojs('mongo-sample',['users']);

/*var bulk = db.users.initializeOrderedBulkOp();
		bulk.insert({name:"Ben", age:33,height:181,charm:5});
		bulk.insert({name:"Belann", age:55,height:162,charm:9});
		bulk.insert({name:"Sharon", age:37,height:165,charm:6});
		bulk.insert({name:"David", age:15,height:142,charm:3});
		bulk.insert({name:"Gloria", age:27,height:177,charm:10});
		bulk.find({age:{$lt:30}}).remove();
		bulk.find({name:'Ben'}).updateOne({$set:{age:34}});

		bulk.execute((err,r) =>{
			console.log("GOOD STUFF!");
			db.close();
		});*/

db.users.remove({_id:mongojs.ObjectId("57595b8133d58be98704abad")},true, (err,r) =>{
	console.log("Ben was removed");
	db.close();
});



