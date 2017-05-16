// Consumes and produces JSON. Isn't JSON. Can be saved to JSON.

// reactive: foo ->bar
// closure: bedazzle('the.thing[148]') // this is almost like currying, when I look at it that way

const cut-quick = {
  A: "on foo did it",
  B: ""

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
