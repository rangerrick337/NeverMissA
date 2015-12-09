'use strict';

var React = require('react-native');
var AddArtists = require('./AddArtists');

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
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

var HomePage = React.createClass({

  onRightButtonPress: function() {
    this.props.navigator.push({
      title: 'Add Artists',
      component: AddArtists,
   })
 },

  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          onRightButtonPress: onRightButtonPress()
        }}
      />,

      <View style={styles.container}>
        <Text style={styles.text}>You're on the HomePage!</Text>
      </View>
    );
  }
});


module.exports = HomePage;
