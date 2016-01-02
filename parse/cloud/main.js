var xmlreader = require('cloud/modules/xmlreader.js');

Parse.Cloud.job("GetAlbums", function(request, response) {

  Parse.Cloud.httpRequest({
    url: 'https://itunes.apple.com/WebObjects/MZStore.woa/wpa/MRSS/justadded/sf=143441/limit=100/explicit=true/rss.xml'
  }).then(function(httpResponse) {
      xmlreader.read(httpResponse.buffer.toString(), function(err, res) {
        if(err) return console.log(err);

        var toSaves = [];
        res.rss.channel.item.each(function(i, item){
          var AlbumToAdd = Parse.Object.extend("Album");
          var albumToAdd = new AlbumToAdd();
          var date = new Date (item['itms:releasedate'].text());
          var url = item['itms:coverArt'].at(2).text();
          albumToAdd.set("artist_name", item['itms:artist'].text());
          albumToAdd.set("album_name", item['itms:album'].text());
          albumToAdd.set("album_price", item['itms:albumPrice'].text());
          albumToAdd.set("release_date", date);
          console.log(albumToAdd);

          Parse.Cloud.httpRequest({url: url}).then(function(httpResponse) {
            var albumImage = new Parse.File("albumImage", {base64: httpResponse.buffer.toString('base64')});
            console.log(albumImage);
            albumImage.save().then(function() {
                albumToAdd.set("album_artwork", albumImage);
            });
          });
          toSaves.push(albumToAdd);
          });
        Parse.Object.saveAll(toSaves, {
          success: function(savelist) {
            response.success('albums should be added to Album object in Parse')
          }, error: function(error) {
          response.error('Request failed with response code ' + error.status);
          }
        });
      });
    });
});



// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
