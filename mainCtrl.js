module.exports = {

  getMovies: function(req, res, next) {
    console.log('running all movies');
    const db = req.app.get('db');
    db.get_all_movies()
      .then( movies => res.status(200).send( movies ) )
      .catch( error => res.status(500).send( error ) );
  },

  // use this endpoint to search actors by partial name, or return all actors if no query present
  // no query =  /api/actors   => return all actors
  // /api/actors?lastname=knoxville
  // query url = /api/actors?userFirstStart=joh  => return Johnny Knoxville object
  getActors: function (req, res) {
    console.log('running all actors');
    const db = req.app.get('db');

    // if url has ?userFirstStart, run the get_actor_by_partial_name.sql file, sending '%<whatever the user typed>%'
    // otherwise, send all the actors back.

    if (req.query.userFirstStart) {
      db.get_actor_by_partial_name(['%' + req.query.userFirstStart + '%'])
        .then( actor => res.status(200).send( actor ) )
        .catch( error => res.status(500).send( error ) );
    } else {
      db.get_all_actors()
        .then( actors => res.status(200).send( actors ) )
        .catch( error => res.status(500).send( error ) );
    }
  },

  getBoxOfficeStats: function (req, res) {
    const db = req.app.get('db');
    console.log('running all stats');
    db.get_box__office_stats()
      .then( stats => res.status(200).send(stats) )
      .catch( error => res.status(500).send( error ) )
  }


};