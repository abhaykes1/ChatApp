import React from 'react';
import {Link}  from 'react-router-dom'
import Profile from './Profile';
import LoginButton from '../components/LoginButton';
import CreateGroup from '../components/CreateGroup';
import UserInfo from '../store/Store';
import Groups from '../components/Groups';
import { observer } from 'mobx-react';
import M from 'materialize-css'
import Design from '../components/Design';
import Header from '../components/Header';
@observer
class Homepage extends React.Component {

  
 

  render() {
    return (
        <div style = {styles.homepage}>
            {
              (UserInfo.UserInfo.isLoggedIn) ? 
            <div>
              <Header/>
            </div>
            :
              null
            }
            <LoginButton showProfile={false}  User = {UserInfo}/>
            {
              //console.log(UserInfo.userData.isLoggedIn)
              (UserInfo.UserInfo.isLoggedIn) ? <div>
              <br/>
              <Link to='/profile'> Go to Profile</Link>
              <br/>
              <CreateGroup User = {UserInfo}/>
              <Groups User = {UserInfo}/>
            </div> 
            : 
           null
            }
            
            
            
        </div>
    )
  }

}

const styles = {
    homepage: {
        textAlign:'center'
    }
}

export default Homepage;
