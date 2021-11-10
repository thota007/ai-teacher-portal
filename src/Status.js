import React from "react"
import {useHistory} from "react-router-dom"
import background from './ClassStatus.png';
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';
import ErrorIcon from '@mui/icons-material/Error';

function Status() {
    let history = useHistory();
  
    function handleClick() {
      history.push("/");
    }


    function goToStatus() {
      history.push("/status");
    } 

    function goToCSummary() {
      history.push("/cSummary");
    } 

    function goToESummary() {
      history.push("/eSummary");
    } 

    function goToProgress() {
      history.push("/progress");
    } 


    function goToParticipation() {
      history.push("/participation");
    } 


  
    return (
      <div style={{backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width: '100vw', height: '100vh' }}>
       <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection:'row-reverse'}}>
              <HomeIcon style={{width:'7vh',height:'7vh'}} onClick={handleClick}/>
        </div>

        <br/><br/><br/><br/><br/><br/>
      
        <Button endIcon={<ErrorIcon style={{fill: "red"}}/>} onClick={goToStatus} style={{color:'black', borderColor:"#1e90ff", display: 'flex', height:'50px', width:'300px', margin:'10px'}} variant='outlined' >Class Status</Button>
        <Button endIcon={<ErrorIcon style={{fill: "red"}}/>} onClick={goToProgress} style={{color:'black', borderColor:"#1e90ff", display: 'flex', height:'50px', width:'300px', margin:'10px'}} variant='outlined' >Group Progress</Button>
        <Button disabled onClick={goToStatus} style={{color:'black', borderColor:"#1e90ff", display: 'flex', height:'50px', width:'300px', margin:'10px'}} variant='outlined' >Stuckness !⃝</Button>
        <Button endIcon={<ErrorIcon style={{fill: "red"}}/>} disabled onClick={goToStatus} style={{color:'black', borderColor:"#1e90ff", display: 'flex', height:'50px', width:'300px', margin:'10px'}} variant='outlined' >Idleness</Button>
        <Button endIcon={<ErrorIcon style={{fill: "red"}}/>} disabled onClick={goToStatus} style={{color:'black', borderColor:"#1e90ff", display: 'flex', height:'50px', width:'300px', margin:'10px'}} variant='outlined' >On task/off Task</Button>
        <Button onClick={goToParticipation} style={{color:'black', borderColor:"#1e90ff", display: 'flex', height:'50px', width:'300px', margin:'10px'}} variant='outlined' >Participation</Button>
        <Button onClick={goToCSummary} style={{color:'black', borderColor:"#1e90ff", display: 'flex', height:'50px', width:'300px', margin:'10px'}} variant='outlined' >Close-Ended Questions</Button>
        <Button onClick={goToESummary} style={{color:'black', borderColor:"#1e90ff", display: 'flex', height:'50px', width:'300px', margin:'10px'}} variant='outlined' >Essay Questions</Button>


      
      </div>
    );
  }

  export default Status









