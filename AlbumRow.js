'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  TouchableHighlight,
  Text,
  View }
= React;


var AlbumRow = React.createClass({
  render: function() {
    return(
      <TouchableHighlight
        underlayColor='#dddddd'
        onPress={this.onPress}>
        <View style={styles.container}>
          <Image
            source={{uri: this.props.album.album_artwork.url()}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.artist_name}>{this.props.album.artist_name}</Text>
            <Text style={styles.album_name}>{this.props.album.album_name}</Text>
            <Text style={styles.release_date}>{this.props.album.release_date.toDateString()}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  onPress: function() {
    if (this.props.onClick) {
      this.props.onClick(this.props.album);
    }
  },
});

var styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  artist_name: {
    fontSize: 20,
    textAlign: 'center',
  },
  album_name: {
    textAlign: 'center',
    fontSize: 16,
  },
  album_price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  release_date: {
    textAlign: 'center',
    fontSize: 8,
  },
  thumbnail: {
    width: 81,
    height: 81,
  },
  listview: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

module.exports = AlbumRow;
