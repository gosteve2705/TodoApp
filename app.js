//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date =  require(__dirname + "/date.js");

const tasks = [];
const worktasks = [];


app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));


app.set('view engine', 'ejs');



app.get("/", function(req, res){

const day = date.getDate();
res.render('list', {listTitle: day , newTask: tasks});

});



app.post('/',function(req,res){

const   task = req.body.task ;

console.log(req.body.tasksList);

if(req.body.tasksList === 'Work'){
  worktasks.push(task);
   res.redirect('/work');
}else{
  tasks.push(task);
   res.redirect('/');

}


});



app.get('/work',function (req,res){
  res.render('list', {listTitle: 'Work Tasks' , newTask: worktasks});
});


app.get('/about',function (req,res){
  res.render('about');
});




app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000.");
});
