
var express = require('express');

var app = express();
 
var Gallery = require('express-photo-gallery');
  
var options = {
  title: 'My Awesome Photo Gallery'
};
 
app.use('/', Gallery('./images', options));
console.log(app.options);
 console.log("searching");
app.listen(3000);