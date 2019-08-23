import React from 'react';
import M from 'materialize-css'
import UserInfo from '../store/Store';
import {Link}  from 'react-router-dom'

class Header extends React.Component {

componentDidMount(){
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:"left" , inDuration:600});

    var elems1 = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems1, {});
    //M.AutoInit();
}
  render() {
    return (
        <div>
            {
                (UserInfo.UserInfo.isLoggedIn) ? 
                <div>
                    <nav class="blue" > Menu </nav>

                    <ul id="slide-out" class="sidenav" >
                        <li><div class="user-view">
                        <div class="background">
                            <img src="https://www.seoclerk.com/pics/593598-1M7SQ71522011606.jpg"/>
                        </div>
                        <a href="#user"><img class="circle" src={UserInfo.UserInfo.user.photoURL}/></a>
                        <a href="#name"><span class="white-text name">{UserInfo.UserInfo.user.displayName}</span></a>
                        <a href="#email"><span class="white-text email">{UserInfo.UserInfo.user.email}</span></a>
                        </div></li>
                        {/* <li><a href="/profile"><i class="material-icons">cloud</i> Profile</a></li> */}
                    </ul>
                    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>   
                </div>:
                null
            }
            

            {/* ------------------------------------------------------------------------- */}

            <div class="parallax-container">
                <div class="parallax"><img src="http://yesofcorsa.com/wp-content/uploads/2015/10/3528_blue_flowers.jpg"/></div>
                </div>
                <div class="section white">
                <div class="row container">
                    <h2 class="header">Chat App</h2>
                    <p class="grey-text text-darken-3 lighten-3"> Chatting with your loved ones is the best felling ever.  </p>
                </div>
                </div>
        </div>
       
    )
  }

}

export default Header;
