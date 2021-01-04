const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

/* get | post | put | delete */
app.get('/blog/*.html',(req, res) => {
	res.send('Hello World!');
});

app.route('/form')
	.get((req, res) => {
		//res.send('You would see a FORM');
		res.sendFile(__dirname + '/private/form.html');
	})
	.post((req, res) => {
		res.send(req.body.name + ', this is the results.');
	});

app.use((req, res, next) =>{
	res.status(404).send("Sorry I can't find this page");
});



app.listen(3001, () =>{
	console.log('We are running on port 3001!');
});