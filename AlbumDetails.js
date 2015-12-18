'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');

var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  NavigatorIOS
} = React;

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  album_price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  artist_name: {
    fontSize: 20,
    textAlign: 'center',
  },
  album_name: {
    textAlign: 'center',
    fontSize: 16,
  },
  release_date: {
    textAlign: 'center',
    fontSize: 8,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  largeArtwork: {
    width: 300,
    height: 300
  },
});

var AlbumDetails = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: this.props.album.album_artwork.thumbnail}}
          style={styles.largeArtwork}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.artist_name}>{this.props.album.artist_name}</Text>
          <Text style={styles.album_name}>{this.props.album.album_name}</Text>
          <Text style={styles.release_date}>{this.props.album.release_date}</Text>
          <Text style={styles.album_price}>{this.props.album.album_price}</Text>
        </View>
        <View>
          <TouchableHighlight style={styles.button}
              underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Buy on iTunes</Text>
          </TouchableHighlight>
        </View>
      </View>
      );
    }
});


module.exports = AlbumDetails;
