import React, {useState} from "react"
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import {useHistory} from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';


function Start(){
    const [icon1,setIcon1]=useState('');
    const [icon2,setIcon2]=useState('');
    const [icon3,setIcon3]=useState('');


   

    let history = useHistory();
  
    function handleClick() {
      history.push("/");
    }

    function goToClass(){
        history.push("/groups");
    }

    function changeColor1(){
        setIcon1(<CheckIcon style={{fill: "green"}}/>);
   
       
        
    }
    function changeColor2(){
        setIcon2(<CheckIcon style={{fill: "green"}}/>);
    }
    function changeColor3(){
        setIcon3(<CheckIcon style={{fill: "green"}}/>);
    }

    return(
        <div>
            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection:'row-reverse'}}>
                <HomeIcon style={{width:'7vh',height:'7vh'}} onClick={handleClick}/>
            </div>
            <h1 style={{color:'grey'}}>WELCOME</h1> 
            <h3>What would you like to do today?</h3>
            <h3 style={{textAlign:'left',textIndent:'329px'}}>MINI CHALLENGE</h3> 
            <Button endIcon={icon1} style={{color:'#1e90ff', margin:'10px', borderColor:"#1e90ff", fill:"green"}} variant='outlined' onClick={changeColor1}>Mini Challenge 1: Height, Mass, and Energy</Button>
            <Button style={{color:'grey', margin:'10px'}} variant='outlined' disabled>Mini Challenge 2: Height, Mass, and Speed</Button> <br/><br/>
            <h3 style={{textAlign:'left',textIndent:'329px'}}>SUB CHALLENGE</h3>
            <Button endIcon={icon2}  style={{color:'#1e90ff', margin:'10px', borderColor:"#1e90ff", }} variant='outlined' onClick={changeColor2}>1. Initial Drop Height and Energy</Button>
            <Button endIcon={icon3}  style={{color:'#1e90ff', margin:'10px', borderColor:"#1e90ff"}} variant='outlined' onClick={changeColor3}>2. Add a Hill</Button> 
            <Button style={{color:'grey', margin:'10px'}} variant='outlined'disabled>3. Explore Mass and Energy</Button> <br/><br/>
            <Button style={{backgroundColor:'#1e90ff', color:'white', margin:'10px', borderColor:"#1e90ff"}} variant='contained' size='large' onClick={goToClass}>START</Button> <br/><br/>
        </div>
    );
}
export default Start;