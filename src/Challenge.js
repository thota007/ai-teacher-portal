import React from "react"
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import {useHistory} from "react-router-dom"


function Challenge(){
    let history = useHistory();
  
    function handleClick() {
      history.push("/");
    }

    function goToStart(){
        history.push("/start");
    }
    return(
        <div>
            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection:'row-reverse'}}>
                <HomeIcon style={{width:'7vh',height:'7vh'}} onClick={handleClick}/>
            </div>
            <h1>WELCOME</h1> 
            <h4>What would you like to do today?</h4>
            <h5>MINI CHALLENGE</h5>
            <Button style={{color:'#1e90ff'}} variant='outlined'>Mini Challenge 1: Height, Mass, and Energy</Button>
            <Button style={{color:'grey'}} variant='outlined' disabled>Mini Challenge 2: Height, Mass, and Speed</Button> <br/><br/>
            <h5>SUB CHALLENGE</h5>
            <Button style={{color:'#1e90ff'}} variant='outlined'>1. Initial Drop Height and Energy</Button>
            <Button style={{color:'#1e90ff'}} variant='outlined'>2. Add a Hill</Button>
            <Button style={{color:'grey'}} variant='outlined' disabled>3. Explore Mass and Energy</Button> <br/><br/>
            <Button onClick={goToStart} style={{backgroundColor:'#1e90ff', color:'white'}} variant='contained' size='large'>CONTINUE</Button> <br/><br/>
        </div>
    );
}

export default Challenge;