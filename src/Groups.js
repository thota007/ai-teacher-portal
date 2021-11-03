import React from "react"
import {useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button'
import background from './ClassBackground.png';
import HomeIcon from '@material-ui/icons/Home';

function Groups() {
    let history = useHistory();
  
    function handleClick() {
      history.push("/");
    } 

    function goToStatus() {
      history.push("/status");
    } 
    return (
      
      <div style={{backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width: '100vw', height: '100vh' }}>
        
        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection:'row-reverse'}}>
              <HomeIcon style={{width:'7vh',height:'7vh'}} onClick={handleClick}/>
        </div>

        <br/><br/><br/><br/>

        <Button onClick={goToStatus} style={{color:'black', borderColor:"red", display: 'flex', height:'100px'}} variant='outlined' >Class Status❗</Button><br/><br/>
        <Button onClick={handleClick} style={{color:'black', borderColor:"red", display: 'flex', height:'100px'}} variant='outlined' >Close-Ended Question Summary!⃝</Button><br/><br/>
        <Button onClick={handleClick} style={{color:'black', borderColor:"red", display: 'flex', height:'100px'}} variant='outlined' >Essay Question Summary❗</Button><br/><br/>
        <Button onClick={handleClick} style={{color:'black', borderColor:"red", display: 'flex', height:'100px'}} variant='outlined' >Group Progress!⃝</Button><br/><br/>

      </div>
    );
  }

  export default Groups;








