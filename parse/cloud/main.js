var xmlreader = require('cloud/modules/xmlreader.js')

Parse.Cloud.job("GetAlbums", function(request, response) {

  Parse.Cloud.httpRequest({
    url: 'https://itunes.apple.com/WebObjects/MZStore.woa/wpa/MRSS/justadded/sf=143441/limit=100/explicit=true/rss.xml'
  }).then(function(httpResponse) {
      console.log("We made it say this");
      xmlreader.read(httpResponse.buffer.toString(), function(err, res) {
        if(err) return console.log(err);
        res.rss.channel.item.each(function(i, item){
          Parse.Cloud.run('addAlbumInfoToAlbums', item['itms:artist'].text() );
		    console.log( item['itms:artist'].text() );
        });
        response.success('xmlreader ran');
      });
      // response.success("ended on httprequest success")
    }, function(httpResponse) {
      response.error('Request failed with response code ' + httpResponse.status);
    });
  });

Parse.Cloud.define('addAlbumInfoToAlbums', function(request, response) {
  Parse.addUnique()
});



// Previous Code:
// Parse.Cloud.job("runGetAlbums", function(request, response) {
//
//   Parse.Cloud.define("getAlbums", function(request, response) {
//
//     var xml = Parse.Cloud.HTTPResponse({
//       url: "https://itunes.apple.com/WebObjects/MZStore.woa/wpa/MRSS/justadded/sf=143441/limit=100/explicit=true/rss.xml",
//       success: function(httpResponse) {
//         console.log('xml fetched');
//         response.success('xml fetched');
//       },
//       error: function(httpResponse) {
//         console.error('xml failed to fetch');
//         response.error('xml failed to fetch');
//       },
//     });
//
//     xmlreader.read(xml, function(err, res) {
//       if (err) return console.error(err);
//       console.log(res.channel.text() );
//       response.success('xmlreader ran');
//     });
//   });
//   response.success(Parse.Cloud.getAlbums());
// });



// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

// Parse.Cloud.httpRequest({
//   url: 'https://itunes.apple.com/WebObjects/MZStore.woa/wpa/MRSS/justadded/sf=143441/limit=100/explicit=true/rss.xml'
// }).then(function(httpResponse) {
//   // success
//   console.log(httpResponse.text);
// },function(httpResponse) {
//   // error
//   console.error('Request failed with response code ' + httpResponse.status);
// });
