import React from "react"
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import {useHistory} from "react-router-dom"


function Prep(){
    let history = useHistory();
  
    function handleClick() {
      history.push("/");
    }

    function goToPrep(){
        history.push("/prep");
    }

    function goToSession(){
      history.push("/session");
  }
    return(
        <div>
            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection:'row-reverse'}}>
                <HomeIcon style={{width:'7vh',height:'7vh'}} onClick={handleClick}/>
                Prep 
            </div>
            <h3>Start a Session</h3> 
            <Button disabled onClick={goToPrep} style={{ width:'300px'}} variant='contained'>Continue Prior Session</Button><br/><br/>
            <Button  onClick={goToSession} style={{color:'black', width:'300px'}} variant='outlined'>New Session</Button><br/><br/>
   
        </div>
    );
}

export default Prep;