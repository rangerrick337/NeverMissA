'use strict';

var React = require('react-native');
var HomePage = require('./HomePage');

var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  NavigatorIOS,
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

  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: HomePage,
          title: 'NeverMissA',
          rightButtonTitle: 'Add artists',
        }}
      />
    );
  }
});


React.AppRegistry.registerComponent('NeverMissA', () => NeverMissA);
