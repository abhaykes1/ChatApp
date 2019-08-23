import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './pages/Profile';
import Homepage from './pages/Homepage';
import Message from './pages/Message';
import Header from './components/Header';
class App extends Component {
  

  render() {
    return(
         <div>
            <Router>
              <div>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/profile' component={Profile}/>
                <Route exact path = '/groups' component = {Message}/>
              </div>
            </Router>
         </div>)
  }

}

export default App;
