import React from "react"
import {useHistory} from "react-router-dom"
import background from './TeachAI.png';
import HomeIcon from '@material-ui/icons/Home';



function TeachAI() {
    let history = useHistory();
    
  
    function handleClick() {
      history.push("/");
    } 

    
    return (

       
       <div style={{backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width: '100vw', height: '100vh' }}>
        
        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection:'row-reverse'}}>
              <HomeIcon style={{width:'9.2vh',height:'9.2vh'}} onClick={handleClick}/>
        </div>
        
      </div>
    );
  }

  export default TeachAI;








