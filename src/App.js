import './App.css';
import Login from "./Login"
import Home from "./Home"
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App" >
      <Route exact path= "/" component={Login}/>
      <Route exact path= "/home" component={Home}/>
    </div>
  );
}

export default App;
