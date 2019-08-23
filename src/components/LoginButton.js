import  React, { Component } from 'react'
import firebase from 'firebase'
import fire from '../sripts/fire'
import { observer } from 'mobx-react';
import M from 'materialize-css'

@observer
class LoginButton extends Component{
    state = {
        isLoggedIn: false,
        user: null
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
                //console.log(user.uid);
              // User is signed in.
              this.setState({isLoggedIn:true,
                                user
            })
              //console.log('logged in');
            } else {
              // No user is signed in.
              //console.log('logged out')
              this.setState({isLoggedIn:false,
                            user:null
                })
            }
            this.props.User.addUser(this.state);
            console.log(this.props.User.userData);
          });
    }

    _SignIn(){
        var provider = new firebase.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(provider)
        .then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            //console.log('Signed-In')
            // ...
          }).catch(function(error) {
              console.log(error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    _SignOut(){
        firebase.auth().signOut().then(function() {
            //console.log('Signed-Out');
            // Sign-out successful.
          }).catch(function(error) {
              console.log(error)
            // An error happened.
          });
    }
    render(){
        let {showProfile} = this.props;
        return(
            <div >
                {
                    this.state.isLoggedIn?                
                    <a class="waves-effect waves-light btn" style = {styles.button} onClick = {()=>this._SignOut()}>Sign Out</a>
                    :
                    <a class="waves-effect waves-light btn" style = {styles.button} onClick = {()=>this._SignIn()}>Sign In</a>

                }
                <br/>
                {
                    this.state.user && showProfile?
                    <div>
                        <h3>{this.state.user.displayName}</h3>
                        <h3>{this.state.user.email}</h3>
                        <img src = {this.state.user.photoURL } width={50} height={50}/>

                    </div>
                    :
                    null
                }
            </div>
        )
    }
}
const styles = {
    button : {
        backgroundColor : "blue",
    }
}
export default LoginButton;