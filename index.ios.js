'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
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

Parse.initialize(
  'O2Fw3IPHmhoprtnktLBzFPuQqLWU9ZoN3QYNDCrA',
  'v8pz1yu5ixvxiWq2qqIuOGyWStZwFU4mlubcCNpd'
);


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

React.AppRegistry.registerComponent('NeverMissA', () => NeverMissA);
