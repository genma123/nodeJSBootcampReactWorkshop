var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

/*  FOR Angular2 EXAMPLE
var index = require('./routes/index');
*/
var tasks = require('./routes/tasks');

var port = process.env.PORT || 5000;

var app = express();

/*  FOR Angular2 EXAMPLE
//View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

// Set Static Folder
// app.use(express.static(path.join(__dirname, 'client')));
*/

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client_react/build'));
}

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*  FOR Angular2 EXAMPLE
app.use('/', index);
*/
app.use('/api', tasks);

app.listen(port, function() {
    console.log('Server started on port ' + port);
});
