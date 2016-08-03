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
    width: 81,
    height: 81,
  },
  listview: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

var HomePage = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      albums: (new Parse.Query('Album')).descending('release_date')
    };
  },

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  },

  // componentWillMount: function() {
  //   this.fetchData();
  // },
  //
  // fetchData: function() {
  //   this.setState({
  //     // dataSource: this.data.albums,
  //     loaded: true,
  //   });
  // },

  selectAlbum: function(album) {
    this.props.navigator.push({
      title: album.album_name,
      component: AlbumDetails,
      passProps: {album},
    });
  },

  render: function() {

    return (
      <ListView
        dataSource={this.state.dataSource.cloneWithRows(this.data.albums)}
        renderRow={this.renderNewAlbum}
        style={styles.listview}
      />
    );
  },

  renderNewAlbum: function(album) {

    return(
      <TouchableHighlight
        underlayColor='#dddddd'
        onPress={() => this.selectAlbum(album)}>
        <View style={styles.container}>
          <Image
            source={{uri: album.album_artwork.url()}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.artist_name}>{album.artist_name}</Text>
            <Text style={styles.album_name}>{album.album_name}</Text>
            <Text style={styles.release_date}>{album.release_date.toDateString()}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },
});

//
// var USER_ARTISTS = [
//   {user_artist_name: 'Beck'},
//   {user_artist_name: 'Disclosure'}
// ];

module.exports = HomePage;
