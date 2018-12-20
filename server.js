
//required packages
var express = require('express');
var request = require("request");
var rq = require("request-promise");
var cheerio = require("cheerio");



//Initialization
var app = express();
app.set("view engine", "ejs");



//Routes

app.get("/",function(req,res){

  var url = 'http://www.google.com';
  rq(url).then(function(html){

    var $ = cheerio.load(html);

    var data = $("#lga").html();



    res.render("index",{data:data});


  }).catch(function(err){
    console.log(err);
  });

});


//Listener
app.listen(4000, function(){
  console.log("The server is running.");
});
