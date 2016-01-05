'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');

var HomePage = require('./HomePage');

var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  NavigatorIOS,
  TextInput
} = React;

var LoginPage = React.createClass({

  // getInitialState: function() {
  //    return {
  //      error: null,
  //      signup: false
  //    };
  //  },

  //  observe: function() {
  //    return {
  //      user: ParseReact.currentUser
  //    };
  //  },

  render: function() {
      // if (!this.data.user) {
        var user = new Parse.User();
        return (
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              placeholder="enter your email address"
              returnKeyType='next'
              keyboardType='email-address'
              onChangeText={(text) => user.set("username", {text})}
              onSubmitEditing={(event) => {this.refs.PasswordInput.focus()}}
            />
            <TextInput
              ref='PasswordInput'
              style={styles.textInput}
              placeholder="enter a password"
              returnKeyType='done'
              secureTextEntry={true}
              onChangeText={(text) => user.set("password", {text})}
            />
            <View>
              <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Create Account</Text>
              </TouchableHighlight>
            </View>
          </View>
        );
      // };
        return (
          <View style={styles.container}>
            <Text style={styles.text}>You're on the AddArtists page!</Text>
          </View>
        );


    }
});

var styles = StyleSheet.create({
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    textAlign: 'center'
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
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 65,
    padding: 30
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

module.exports = LoginPage;




// 'use strict';
//
// var React = require('react-native');
// var Parse = require('parse/react-native');
// var ParseReact = require('parse-react/react-native');
//
// var HomePage = require('./HomePage');
//
// var {
//   StyleSheet,
//   Image,
//   View,
//   TouchableHighlight,
//   ListView,
//   Text,
//   NavigatorIOS,
//   TextInput
// } = React;
//
// var Login = React.createClass({
//
//   // getInitialState: function() {
//   //   return {
//   //     error: null,
//   //     signup: false
//   //   };
//   // },
//   //
//   // observe: function() {
//   //   return {
//   //     user: ParseReact.currentUser
//   //   };
//   // },
//
//   render: function() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>You're on the AddArtists page!</Text>
//       </View>
//
//       );
//     }
//
//   // render: function() {
//   //   if (this.data.user) {
//   //     return (
//   //       <view styles={styles.containter}>
//   //       <TextInput
//   //         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//   //         defaultValue={"this.data.user has data"}
//   //         onChangeText={(text) => this.setState({text})}
//   //         value={this.state.text}
//   //       />
//   //       </view>
//   //     );
//   //   };
//   //   return (
//   //     <view styles={styles.containter}>
//   //     <TextInput
//   //       style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//   //       defaultValue="this.data.user has no data"
//   //       onChangeText={(text) => this.setState({text})}
//   //       value={this.state.text}
//   //     />
//   //     </view>
//   //   )
//   // };
// });
//
// var styles = StyleSheet.create({
//   separator: {
//     height: 1,
//     backgroundColor: '#dddddd'
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     padding: 10
//   },
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   rightContainer: {
//     flex: 1,
//   },
//   listview: {
//     paddingTop: 20,
//     backgroundColor: '#F5FCFF',
//   },
//   text: {
//     color: 'black',
//     backgroundColor: 'white',
//     fontSize: 30,
//     margin: 80
//   },
// });
//
// module.exports = Login;
//
//   //     <div>
//   //       <h1>AnyBudget</h1>
//   //       <h2>Powered by Parse + React</h2>
//   //       <div className='loginForm' onKeyDown={this.keyDown}>
//   //         {
//   //           this.state.error ?
//   //           <div className='row centered errors'>{this.state.error}</div> :
//   //           null
//   //         }
//   //         <div className='row'>
//   //           <label htmlFor='username'>Username</label>
//   //           <input ref='username' id='username' type='text' />
//   //         </div>
//   //         <div className='row'>
//   //           <label htmlFor='password'>Password</label>
//   //           <input ref='password' id='password' type='password' />
//   //         </div>
//   //         <div className='row centered'>
//   //           <a className='button' onClick={this.submit}>
//   //             {this.state.signup ? 'Sign up' : 'Log in'}
//   //           </a>
//   //         </div>
//   //         <div className='row centered'>
//   //           or&nbsp;
//   //           <a onClick={this.toggleSignup}>
//   //             {this.state.signup ? 'log in' : 'sign up'}
//   //           </a>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );
//   // },
//   //
//   // submit: function() {
//   //   var self = this;
//   //   var username = React.findDOMNode(this.refs.username).value;
//   //   var password = React.findDOMNode(this.refs.password).value;
//   //   if (username.length && password.length) {
//   //     if (this.state.signup) {
//   //       console.log('signup');
//   //       var u = new Parse.User({
//   //         username: username,
//   //         password: password
//   //       });
//   //       u.signUp().then(function() {
//   //         self.setState({
//   //           error: null
//   //         });
//   //       }, function() {
//   //         self.setState({
//   //           error: 'Invalid account information'
//   //         });
//   //       });
//   //     } else {
//   //       Parse.User.logIn(username, password).then(function() {
//   //         self.setState({
//   //           error: null
//   //         });
//   //       }, function() {
//   //         self.setState({
//   //           error: 'Incorrect username or password'
//   //         });
//   //       });
//   //     }
//   //   } else {
//   //     this.setState({
//   //       error: 'Please enter all fields'
//   //     });
//   //   }
//   // },
//   //
//   // logOut: function() {
//   //   Parse.User.logOut();
//   // },
//   //
//   // keyDown: function(e) {
//   //   if (e.keyCode === 13) {
//   //     this.submit();
//   //   }
//   // },
//   //
//   // toggleSignup: function() {
//   //   this.setState({
//   //     signup: !this.state.signup
//   //   });
//   // }
