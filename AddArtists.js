'use strict';

var React = require('react-native');

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
    flex: 1
  }
});

var AddArtists = React.createClass({
    render: function () {
      return (
        <View>
          <Text> 'You're on the AddArtists Page!'</Text>
        </View>
      );
    }
});


module.exports = AddArtists;
