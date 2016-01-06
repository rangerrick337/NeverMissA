Parse.Cloud.job("GetAlbums", function(request, response) {
  var xmlReader = require('cloud/modules/xmlreader.js');
  var itunesURL = 'https://itunes.apple.com/WebObjects/MZStore.woa/wpa/MRSS/justadded/sf=143441/limit=100/explicit=true/rss.xml';

  function readResponse_async(xlmString) {
    var promise = new Parse.Promise();
    xmlReader.read(xlmString, function (err, res) {
        if(err) {
            promise.reject(err);
        } else {
            promise.resolve(res);
        }
    });
    return promise;
  };

  function getAlbums_async(res) {
    var albums = [];
    var promiseAlbum = new Parse.Promise();
    res.rss.channel.item.each(function(i, item){
      var promise = new Parse.Promise();
      var AlbumToAdd = Parse.Object.extend("Album");
      var albumToAdd = new AlbumToAdd();
      var date = new Date (item['itms:releasedate'].text());
      var url = item['itms:coverArt'].at(2).text();

      albumToAdd.set("artist_name", item['itms:artist'].text());
      albumToAdd.set("album_name", item['itms:album'].text());
      albumToAdd.set("album_price", item['itms:albumPrice'].text());
      albumToAdd.set("release_date", date);

      Parse.Cloud.httpRequest({url: url}).then(function(httpResponse) {
        var albumImage = new Parse.File("albumImage", {base64: httpResponse.buffer.toString('base64')});
        albumImage.save().then(function() {
          albumToAdd.set("album_artwork", albumImage);
          promise.resolve(albumToAdd);
        });
      });
      albums.push(promise);
    });
    console.log(albums);
    return Parse.Promise.when(albums);
  };

  Parse.Cloud.httpRequest({
    url: itunesURL
  }).then(function(httpResponse) {
    return readResponse_async(httpResponse.buffer.toString())
  }).then(function(res) {
      return getAlbums_async(res)
    }).then(function(albums) {
        Parse.Object.saveAll(albums, {
          success: function(savelist) {
            response.success('albums should be added to Album object in Parse')
          }, error: function(error) {
            response.error('Request failed with response code ' + error.status);
          }
        });
      });
});
