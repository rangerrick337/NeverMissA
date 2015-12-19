'use strict';

var React = require('react-native');
var AddArtists = require('./AddArtists');
var AlbumDetails = require('./AlbumDetails');
var AlbumRow = require('./AlbumRow');

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
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listview: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

var HomePage = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(NEW_ALBUMS),
      loaded: true,
    });
  },

  selectAlbum: function(album) {

// this is the function I want to be recieving the selected album from the renderNewAlbum function
  // found the below code suggested in a tut, I don't know why I'd have to create a new variable here.
    // var album = this.props.NEW_ALBUMS.filter(prop => prop.album_name == album)[0];

    this.props.navigator.push({
      title: album.album_name,
      component: AlbumDetails,
      passProps: {album},
    });
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderNewAlbum}
        style={styles.listview}
      />
    );
  },

  renderLoadingView: function() {
      return(
        <View style={styles.container}>
          <Text>
            Loading NEW_ALBUMS
          </Text>
        </View>
      );
    },

  renderNewAlbum: function(album) {
    return(
      <AlbumRow
        album={album}
        onClick={(savedAlbum)=>{
          this.selectAlbum(savedAlbum)
        }} />
    );
  },
});

var NEW_ALBUMS = [
  {artist_name: 'Jay-Z', album_artwork: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}, price: '$49.99', release_date: '21/12/2013', album_name: 'Two'},
  {artist_name: 'Disclosure', album_artwork: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}, price: '$9.99', release_date: '01/01/2015', album_name: 'Caracal'},
  {artist_name: 'Disclosure', album_artwork: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}, price: '$29.99', release_date: '30/01/2012', album_name: 'Settle'},
  {artist_name: 'Beck', album_artwork: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}, price: '$99.99', release_date: '05/06/2006', album_name: 'Guero'},
  {artist_name: 'Armin Van Burren', album_artwork: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}, price: '$399.99', release_date: '11/02/2013', album_name: 'Intense'},
  {artist_name: 'Alicia Keys', album_artwork: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}, price: '$199.99', release_date: '16/11/1999', album_name: 'As I Am'}
];

var USER_ARTISTS = [
  {user_artist_name: 'Beck'},
  {user_artist_name: 'Disclosure'}
];

module.exports = HomePage;
