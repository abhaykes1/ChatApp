import React from 'react';
import fire from '../sripts/fire'
import LoginButton from '../components/LoginButton';
import { observer } from 'mobx-react';
import { stringify } from 'querystring';

@observer
class CreateGroup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            group: '',
        }
    }

    componentDidMount()
    {
        //let uid =  stringify(this.props.User.UserInfo.uid) 
        //console.log('ajbcdg')
        if(this.props.User.UserInfo.isLoggedIn)
            fire.database().ref('Groups/' +this.props.User.userData.user.uid).on('value' , (snapshot)=>{
            //console.log(snapshot.val());
            }) 
    }

  _CreateGroup(){
    
    //console.log(this.state.uid)
    //fire.database().ref('Groups/TxJsPHndslSZ5g4OMClENmcSzOx1').child('5').set(this.state.group);
    //console.log(this.props.User.userData)
    fire.database().ref('Groups/' +this.props.User.userData.user.uid).push().set(this.state.group).then(()=>{alert('Group Created');});
    
  } 
 
  render() {
    //console.log(this.props.User.UserInfo)
   
    return(
        <div>
            <input value = {this.state.group} onChange = {(event)=>{this.setState({group:event.target.value})}}></input>
            <button onClick = {
                (this.props.User.userData.user)? ()=>{this._CreateGroup()}:null
                }>Create Group</button>
        </div>
    )
  }
}

export default CreateGroup;
