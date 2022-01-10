import React from "react"
import {useHistory} from "react-router-dom"
import background from './Rclass.png';
import HomeIcon from '@material-ui/icons/Home';


function RClass() {
    let history = useHistory();
    
  
    function handleClick() {
      history.push("/");
    } 


    function goToGroup(){
      history.push("/group");
    }

    function goToIndividual(){
      history.push("/individual");
    }

    function goToTaskStatus(){
      history.push("/taskstatus");
    }

    
    return (
      
      <div style={{backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width: '100vw', height: '100vh' }}>
        
        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection:'row-reverse'}}>
              <HomeIcon style={{width:'7vh',height:'7vh'}} onClick={handleClick}/>
        </div>

        <button onClick={goToGroup} className="group"></button>
        <button onClick={goToIndividual} className="individualb"></button>
        <button onClick={goToTaskStatus} className="taskstatus"></button>


      </div>
    );
  }

  export default RClass;








