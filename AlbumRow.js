'use strict';

var React = require('react-native');

var { Image, StyleSheet, TouchableHighlight, Text, View } = React;

var AlbumRow = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        underlayColor='#dddddd'
        onPress={this.onPress}>
        <View style={styles.container}>
          <Image
            source={{uri: this.props.album.album_artwork.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.artist_name}>{this.props.album.artist_name}</Text>
            <Text style={styles.album_name}>{this.props.album.album_name}</Text>
            <Text style={styles.release_date}>{this.props.album.release_date}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  onPress: function() {
    if (this.props.onClick) { // Check that a click handler was provided before calling it
      this.props.onClick(this.props.album);
    }
  }
});

var styles = StyleSheet.create({
  artist_name: {
    fontSize: 20,
    textAlign: 'center',
  },
  album_name: {
    textAlign: 'center',
    fontSize: 16,
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
  release_date: {
    textAlign: 'center',
    fontSize: 8,
  },
  thumbnail: {
    width: 53,
    height: 81,
  }
});


module.exports = AlbumRow;
