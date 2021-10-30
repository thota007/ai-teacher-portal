import React from "react"
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import {useHistory} from "react-router-dom"


function Home(){
    let history = useHistory();
  
    function handleClick() {
      history.push("/");
    }

    function goToChallenge(){
        history.push("/challenge");
    }
    return(
        <div>
            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection:'row-reverse'}}>
                <HomeIcon style={{width:'7vh',height:'7vh'}} onClick={handleClick}/>
            </div>
            <h1>WELCOME</h1> 
            <h4>What would you like to do today?</h4>
            <Button onClick={goToChallenge} style={{color:'#1e90ff'}} variant='outlined'>Continue from where you left off</Button><br/><br/>
            <Button style={{color:'#1e90ff'}} variant='outlined'>Start new challenge</Button> 
        </div>
    );
}

export default Home;