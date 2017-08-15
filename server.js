var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={
   'article-one': {
    title : 'article-one',
    heading: 'article one',
    date: 'aug 23',
    content: `
             <p>
                This is a random paragagraph simply to waste some lines
             </p>
             <p>
                This is a random paragagraph simply to waste some lines
            </p>`
},
 'article-two' :{
    title : 'article-two',
    heading: 'article two',
    date: 'aug 23',
    content: `
             <p>
                This is a random two paragagraph simply to waste some lines
             </p>
             <p>
                This is a random paragagraph simply to waste some lines
            </p>`},
 'article-three' :{
    title : 'article-three',
    heading: 'article three',
    date: 'aug 23',
    content: `
             <p>
                This is a random third paragagraph simply to waste some lines
             </p>
             <p>
                This is a random paragagraph simply to waste some lines
            </p>`}
};


function createTemplate(data){
var title = data.title;    
var date = data.date    ;
var heading = data.heading;
var content = data.content;
var htmlTemplate =`
<!DOCTYPE html>
<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
         <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
         </div>
        </div>
        
    </body>
    
</html>

`;
 return htmlTemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req, res){
    var articleName = req.params.articleName;
 res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
