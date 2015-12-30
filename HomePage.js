'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var AlbumRow = require('./AlbumRow')
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
      <AlbumRow
        album={album}
        onClick={(savedAlbum)=>{
          this.selectAlbum(savedAlbum)
        }}  />
    );
  },
});

//
// var USER_ARTISTS = [
//   {user_artist_name: 'Beck'},
//   {user_artist_name: 'Disclosure'}
// ];

var styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
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
  listview: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});


module.exports = HomePage;
