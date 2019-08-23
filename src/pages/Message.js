import React from 'react';
import fire from '../sripts/fire';
import UserInfo from '../store/Store';

class Message extends React.Component {
  state = {
      GroupMessages: '',
      message: ''
  }
  componentDidMount()
  {
      if(UserInfo.UserInfo.isLoggedIn)
        fire.database().ref('Messsages/' + UserInfo.getCurrentGroup).on('value', (snapshot)=>{
            //
            let GroupMessages = snapshot.val();
            //console.log(typeof GroupMessages)
            this.setState({GroupMessages})
        })
  }
  _SendMessage(){
      fire.database().ref('Messsages/' + UserInfo.getCurrentGroup).push().set(this.state.message + "  by- " + UserInfo.UserInfo.user.displayName);
  }
  render() {
    return (
        <div>
            
            <input value = {this.state.message} onChange = {(event)=>{this.setState({message:event.target.value})}}></input>
            <button onClick = {
            (UserInfo.userData.user)? ()=>{this._SendMessage()}:null
            }>Send</button>
            {
                (this.state.GroupMessages)?
                    Object.values(this.state.GroupMessages).map((v,i)=>{
                        return(
                            (UserInfo.UserInfo.isLoggedIn)?
                            <div>
                                <h6>{v}</h6>
                                <br/>
                            </div> 
                            :null
                        )
                    })
                    :
                    null
            }
        </div>
    )
  }

 
}

export default Message;
