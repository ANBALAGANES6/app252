import React ,{Component} from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import NotFounds from './components/NotFound'
import Edit from './components/Edit'

class App extends Component {

  render(){
    return(
      
      
      <div>
        <Route path="/opportunity/:opportunity_id" exact  name="Home" component={Home} />
        <Route path="/Edit/:edit_id" exact name="Edit" component={Edit} />
        <Route path="/" exact  name="notfound" component={NotFounds} />
		</div>
    )
  }
}
export default App;