import {observable, action, computed} from 'mobx';

class Store {
    @observable userData = {
        isLoggedIn: false,
        user: null
    };

    @observable CurrentGroup = {}

    @action addCurrentGroup(x){
        this.CurrentGroup = x;
    }

    @action addUser = (x)=>{
        this.userData = x;
    }

    @computed get UserInfo() {
        return this.userData;
    }
    @computed get getCurrentGroup(){
        return this.CurrentGroup;
    }
}
const UserInfo = new Store();
export default UserInfo;