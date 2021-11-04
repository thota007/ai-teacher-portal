import './App.css';
import Login from "./Login"
import Home from "./Home"
import Challenge from "./Challenge"
import Start from "./Start"
import Groups from "./Groups"
import Status from "./Status"
import CloseSummary from "./CloseSummary"
import EssaySummary from './EssaySummary';
import Progress from './Progress';
import {Route} from 'react-router-dom'



function App() {
  return (
    <div className="App" >
      <Route exact path= "/" component={Login}/>
      <Route exact path= "/home" component={Home}/>
      <Route exact path= "/challenge" component={Challenge}/>
      <Route exact path= "/start" component={Start}/>
      <Route exact path= "/groups" component={Groups}/>
      <Route exact path= "/status" component={Status}/>
      <Route exact path= "/cSummary" component={CloseSummary}/>
      <Route exact path= "/eSummary" component={EssaySummary}/>
      <Route exact path= "/progress" component={Progress}/>
    </div>
  );
}

export default App;
