import React from 'react';
import fire from '../sripts/fire';
import LoginButton from '../components/LoginButton';
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        id : 1,
        profile: ''
       };
  }

   _getUser(){
    fire.database().ref('users/'+ this.state.id).once('value').then((snapshot)=>{
      var user = snapshot.val(); 
      //console.log(user);
      this.setState({profile:user});

    })
    .catch(()=>{
      console.error();
    })
  }

  componentDidMount() {
    this._getUser()
  }

  render() {
    return (
      <div style = {styles.profile}>
        <LoginButton showProfile={true}/>
        {/* <h3>Username: {this.state.profile.name}</h3>
        <h3>Age: {this.state.profile.age}</h3> */}
      </div>
    )
  }

  
}
const styles = {
  profile: {
      textAlign:'center'
  }
}
export default Profile;
