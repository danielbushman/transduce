// Consumes and produces JSON. Isn't JSON. Can be saved to JSON.

// reactive: foo ->bar
// closure: bedazzle('the.thing[148]') // this is almost like currying, when I look at it that way
// update based on model relationships

const cut-quick = {
  "A": "on foo: done did it", // just text
  "B": "{{the.place.to.get.it}}", // a simple listener
  "C": "{{(*)-[HAS_SISTER]->(.name)[0]}}" // graph listener
}

{
  "A": "on foo: done did it",
  "B": "{{the.place.to.get.it}}",
  "C": "{{(*)-[HAS_SISTER]->(.name)[0]}}"
}

/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.helloWorld = function helloWorld(req, res) {
  // Example input: {"message": "Hello!"}
  if (req.body.message === undefined) {
    // This is an error case, as "message" is required.
    res.status(400).send('No message defined!');
  } else {
    // Everything is okay.
    console.log(req.body.message);
    res.status(200).send('Success: ' + req.body.message);
  }
};
upadate(the, {
  "place": {
    "to": {
      "get": {
        "it": "new value" // reactively triggers listener
      }
    }
  }
}

const circa-februaryish-maybe = {
    "service nodes": {
      "provider-data": {
        "|plex>>>>":{"tracks":[{"title":"scatterbrain","year":"2016","id":"##"}]},
        "|itunes>>>>":{"songs":[{"name":"submarine","released":"2016","id":"##"}]}
      },
      "|songs>>>>": [
        {
          "name": ">>>>plex|.tracks[i].title",
          "year": ">>>>plex|.tracks[i].released","id":"#"
        },
        {"each":[">>>>itunes|.songs",{"name":"name","year":"released","id":"#"}]}
      ],
      "favoriting-service": {
        "song-list":[{"each":[">>>>songs|",{"name":"name","id":"#"}]}],
        "|favs>>>>":["id"]
      },
      "itunes-favorites": [{"name":">>>>favs|#>>>>itunes|.title"}],
      "song-catalog": {
        "songs": [">>>>songs|", ">>>>favs|"]
      }
    }
  }
