import React from "react"
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import {useHistory} from "react-router-dom"


function Home(){
    let history = useHistory();
  
    function handleClick() {
      history.push("/");
    }

    function goToPrep(){
        history.push("/prep");
    }
    function goToGroup(){
        history.push("/group")
    }

    function goToSummary(){
        history.push("/summary")
    }

    function goToAI(){
        history.push("/teachai")
    }

    return(
        <div>
            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection:'row-reverse'}}>
                <HomeIcon style={{width:'7vh',height:'7vh'}} onClick={handleClick}/>
            </div>
            <h3>HOME</h3> 
            <Button onClick={goToPrep} style={{color:'black', width:'300px'}} variant='outlined'>Prep</Button><br/><br/>
            <Button  onClick={goToGroup} style={{color:'black', width:'300px'}} variant='outlined'>Real-Time Dashboard</Button><br/><br/>
            <Button  style={{color:'black', width:'300px'}} variant='outlined'>Summary</Button><br/><br/>
            <Button  onClick={goToAI} style={{color:'black',width:'300px'}} variant='outlined'>Teach the AI</Button><br/><br/>
   
        </div>
    );
}

export default Home;