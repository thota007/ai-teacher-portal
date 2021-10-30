import React from "react"
import {useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button';
import background from '/Users/pratyushthota/ai-teacher-dashboard/src/Rollercoaster.jpg';

function Login() {
    let history = useHistory();
  
    function handleClick() {
      history.push("/home");
    }
  
    return (
      <div style={{backgroundImage: `url(${background})`, backgroundPosition: 'center bottom', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width: '100vw', height: '100vh' }}>
       <h1>ROLLERCOASTER</h1>

       <form> 
        <input size="40" style={{height:'25px'}} type="text" name="name" placeholder="Username" /><br/><br/>
        <input size="40" style={{height:'25px'}} type="password" name="pass" placeholder="Password"/><br/><br/>
      </form>

      <Button style={{backgroundColor:'#87cefa'}} variant='contained' onClick={handleClick}>
        LOGIN
      </Button>
      </div>
    );
  }

  export default Login








