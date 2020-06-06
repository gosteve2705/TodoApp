//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var tasks = ['buy food','cook food','eat food'];
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
var today =  new Date();
var options = {
  weekday: 'long',
   year: 'numeric',
   month: 'long',
    day: 'numeric'
   };
var day =today.toLocaleDateString("en-US", options);

res.render('list', {kindofday: day , newTask: tasks});

});

app.post('/',function(req,res){
var   task = req.body.task ;
console.log(task);
tasks.push(task);
 res.redirect('/');
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
