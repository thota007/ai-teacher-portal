import './App.css';
import Prep from "./Prep"
import Home from "./Home"
import Session from "./Session"
import SessionFormat from './SessionFormat';
import {Route} from 'react-router-dom'
import Groups from './StudentGroup';
import Agent from './Agent';
import Group from './Group'
import RClass from './RClass'
import Individual from './Individual';
import Group3 from './Group3';
import TaskStatus from './TaskStatus';
import Summary from './Summary';
import TeachAI from './TeachAI';


function App() {
  return (
    <div className="App">
      <Route exact path= "/" component={Home}/>
      <Route exact path= "/prep" component={Prep}/>
      <Route exact path= "/session" component={Session}/>
      <Route exact path= "/sessionformat" component={SessionFormat}/>
      <Route exact path= "/groups" component={Groups}/>
      <Route exact path= "/agent" component={Agent}/>
      <Route exact path= "/group" component={Group}/>
      <Route exact path= "/rclass" component={RClass}/>
      <Route exact path= "/individual" component={Individual}/>
      <Route exact path= "/group3" component={Group3}/>
      <Route exact path= "/taskstatus" component={TaskStatus}/>
      <Route exact path= "/summary" component={Summary}/>
      <Route exact path= "/teachai" component={TeachAI}/>
      
    </div>
  );
}

export default App;
