var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index');
const port = process.env.PORT || 3000;

var app = express();

// const db = require('./data/db.js');
const Article = db.Article;
const Author = db.Author;

// app.use(express.static(path.join(`${__dirname}/../public`)));
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/home', function(req, res) {
  db.selectAll(Article, function(err, data) {
    if (err) {
      console.log('more errors');
      res.sendStatus(500);
    } else {
      let dataArray = data;
      dataArray = shuffle(dataArray);
      dataArray.slice(0, 30);
      const ids = [];

      dataArray.map((e) => {
        ids.push(e.authorId);
      });

      Author.find({
        id: {
          $in: ids
        }
      }).then((result) => {
        console.log(result.length);
        result.forEach((e, i) => {
          dataArray[i]._doc['authorName'] = e['name'];
        });
        res.json(dataArray.slice(0, result.length));
      });
    }
  });
});

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
