import React from "react"
import {useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button';
import background from './Rollercoaster.jpg';

function Login() {
    let history = useHistory();
  
    function handleClick() {
      history.push("/home");
    }
  
    return (
      <div style={{backgroundImage: `url(${background})`, backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize:'1500px 600px', height: '110vh' }}>

       <h1 style={{backgroundColor:'#1e90ff',color:'white',height:'7vh'}}>ROLLERCOASTER</h1>

       <form> 
        <input size="40" style={{height:'40px', border:'1px solid', borderColor:'grey', width:'250px'}} type="text" name="name" placeholder="Username" /><br/><br/>
        <input size="40" style={{height:'40px',  border:'1px solid', borderColor:'grey', width:'250px'}} type="password" name="pass" placeholder="Password"/><br/><br/>
      </form>

      <br/><br/><br/><br/>
      <Button style={{backgroundColor:'#1e90ff', color:'white', margin:'10px', borderColor:"#1e90ff", width:'250px'}} variant='contained' size='large' onClick={handleClick}>
        LOG IN
      </Button>
      </div>
    );
  }

  export default Login








