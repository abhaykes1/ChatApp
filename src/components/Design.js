import React from 'react';
import UserInfo from '../store/Store';
class Design extends React.Component {
  
    componentDidMount(){
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
    }

  render() {
    return (
        <div>
            {
                    (UserInfo.UserInfo.isLoggedIn) ?
                    <span>
                        <nav>njn </nav>
                        <ul id="slide-out" class="sidenav">
                            <li>
                                <div class="user-view"/>
                                <div class="background"/>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Solicitor%27s_office%2C_Ravensworth_Terrace%2C_Town%2C_Beamish_Museum%2C_6_October_2012.jpg"
                                    width={400} height={180}
                                    />
                                <div>
                                    <a href="#user"><img class="circle" src={UserInfo.UserInfo.user.photoURL}/></a>
                                    <a href="#name"><span class="white-text name">John Doe</span></a>
                                    <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                                </div>
                            </li>

                            <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                        </ul>
                        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    </span> 
                    : null
            }
           
        </div>
        

        
    )
  }

  
}

export default Design;
