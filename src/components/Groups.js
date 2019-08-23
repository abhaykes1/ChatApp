import React from 'react';
import {Link}  from 'react-router-dom'

import fire from '../sripts/fire';
class Groups extends React.Component {

    state = {
        messages:''
    }
   

    componentDidMount()
    {
        //let uid =  stringify(this.props.User.UserInfo.uid) 
        //console.log('ajbcdg')
        if(this.props.User.UserInfo.isLoggedIn)
            fire.database().ref('Groups/' +this.props.User.userData.user.uid).on('value' , (snapshot)=>{
            //console.log(snapshot.val());
            let messages = snapshot.val()
            this.setState({messages});
            //console.log(this.state.messages);
            }) 
    }
    _handleClick(groupName){
        //console.log(groupName);
        this.props.User.addCurrentGroup(groupName);
        //console.log(this.props.User.getCurrentGroup)
    }

  render() {
    let {User} = this.props
    return (
        <div>
          <h4>Current Groups</h4>
        
            {

                (this.state.messages)?
                Object.values(this.state.messages).map((v,i)=>{
                        return(
                            (this.props.User.UserInfo.isLoggedIn)?
                            <div>
                            <Link to='/groups'>
                                {/* <button onClick = {()=>this._handleClick(v)}>{v}</button> */}
                                {/* <a style = {styles.buttons} class="waves-effect waves-light btn" onClick = {()=>this._handleClick(v)}>{v}</a> */}
                                <ul class="collection with-header">
                                    <li onClick = {()=>this._handleClick(v)} class="collection-item"><div>{v}<a href="#!" class="secondary-content"><i class="material-icons" style = {styles.buttons}>send</i></a></div></li>
                                </ul>

                            </Link>
                                <br/>
                            </div> 
                            :null
                        )
                    }):
                    null
                }
          
        </div>
        
    )
  }
}

const styles = {
    buttons: {
    color : "blue"
    }
}

export default Groups;
