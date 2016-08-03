'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var AddArtists = require('./AddArtists');
var AlbumDetails = require('./AlbumDetails');

var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  NavigatorIOS
} = React;

Parse.initialize(
  'O2Fw3IPHmhoprtnktLBzFPuQqLWU9ZoN3QYNDCrA',
  'v8pz1yu5ixvxiWq2qqIuOGyWStZwFU4mlubcCNpd'
);

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
  release_date: {
    textAlign: 'center',
    fontSize: 8,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listview: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

var HomePage = React.createClass({
  mixins: [ParseReact.Mixin], // Enable query subscriptions

  observe: function(props, state) {
    var albumQuery = (new Parse.Query('Album')).descending('release_date');
    return state.loaded ?  { albums: albumQuery } : null;
  },

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
      <TouchableHighlight
        underlayColor='#dddddd'
        onPress={() => this.selectAlbum(album)}>
        <View style={styles.container}>
          <Image
            source={{uri: album.album_artwork.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.artist_name}>{album.artist_name}</Text>
            <Text style={styles.album_name}>{album.album_name}</Text>
            <Text style={styles.release_date}>{album.release_date}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },
});

var NEW_ALBUMS = [
  {artist_name: 'Jay-Z', album_artwork: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}, album_price: '$49.99', release_date: '21/12/2013', album_name: 'The Blueprint 3'},
  {artist_name: 'Disclosure', album_artwork: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}, album_price: '$9.99', release_date: '01/01/2015', album_name: 'Caracal'},
  {artist_name: 'Disclosure', album_artwork: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}, album_price: '$29.99', release_date: '30/01/2012', album_name: 'Settle'},
  {artist_name: 'Beck', album_artwork: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}, album_price: '$99.99', release_date: '05/06/2006', album_name: 'Guero'},
  {artist_name: 'Armin Van Burren', album_artwork: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}, album_price: '$399.99', release_date: '11/02/2013', album_name: 'Intense'},
  {artist_name: 'Alicia Keys', album_artwork: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}, album_price: '$199.99', release_date: '16/11/1999', album_name: 'As I Am'}
];

var USER_ARTISTS = [
  {user_artist_name: 'Beck'},
  {user_artist_name: 'Disclosure'}
];

module.exports = HomePage;
