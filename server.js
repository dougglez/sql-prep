const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");

const app = express();
const port = 3000;
app.use(bodyParser.json());

massive({
  host: 'ec2-54-221-220-82.compute-1.amazonaws.com',
  database: 'dcpjuaqi868if1',
  user: 'odyobkcuwkyqbn',
  port: 5432,
  password: '5cad1f038d465577c9b595c8eb9bed9230cbfadccd9d5dd594ee35b2535e804e',
  ssl:true
}).then( db => {

  app.set('db', db);
  const mainCtrl = require("./mainCtrl");

  // db.init_tables.create_movies_seed()
  //     .then( () => console.log('Movie table created') )
  //     .catch( error => console.log('The movies table had an error: ', error) )
  //   .then( () => db.init_tables.create_box_office_seed())
  //     .then( () => console.log('Box Office table created'))
  //     .catch( error => console.log('The Box Office table had an error: ', error) )
  //   .then( () => db.init_tables.create_actors_seed())
  //     .then( () => console.log('Actors table created') )
  //     .catch( error => console.log('The actors table had an error: ', error) );


  app.get('/api/movies', mainCtrl.getMovies);
  app.get('/api/actors', mainCtrl.getActors);
  app.get('/api/boxoffice', mainCtrl.getBoxOfficeStats);



  app.listen(port, console.log('🚢 docked on: ', port));
});
