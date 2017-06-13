var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbconfig = require('./config/database.js');
var path = require('path');
var Disneydb = require('./models/disneychars.js');
console.log('I am listening');

mongoose.connect(dbconfig.url);

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/test', function (req, res) {
    Disneydb.findOne({name: req.body.data}, function(err, character){
        if(err){
            console.log('Error!');
        }
        if(!character){
            var newCharacter = new Disneydb();

            newCharacter.name = "Maleficent"
            newCharacter.movieList = ['Sleeping Beauty', 'Sleeping Beauty II']
            newCharacter.type = 'Villain'
            newCharacter.famousQuote = 'She shall prick her finger on the spindle and die!'
            newCharacter.yearOfAppearance = new Date();

            newCharacter.save();
            console.log(req.body);
            res.send({
              data: 'Created New Character',
              character: newCharacter
            })
        }
        if(character){
            res.send({
              data: 'Character Found',
              character: character
            })
        }
    })



});


app.listen(3000);
