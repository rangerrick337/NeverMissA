'use strict';

var React = require('react-native');
var HomePage = require('./HomePage');
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

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  },
});

var NeverMissA = React.createClass({

  onRightButtonPress: function() {
    this.refs.nav.push({
      title: 'Add Artists',
      component: AddArtists,
   })
 },

  render: function() {
    return (
      <NavigatorIOS
        ref='nav'
        style={styles.container}
        initialRoute={{
          component: HomePage,
          title: 'New Albums',
          rightButtonTitle: 'Add artists',
          onRightButtonPress: this.onRightButtonPress,
        }}
      />
    );
  }
});


React.AppRegistry.registerComponent('NeverMissA', () => NeverMissA);
