import React from "react"
import {useHistory} from "react-router-dom"
import background from './TaskStatus.png';
import HomeIcon from '@material-ui/icons/Home';


function TaskStatus() {
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

    function goToWholeClass(){
      history.push("/rclass");
    }

    
    return (
      
      <div style={{backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width: '100vw', height: '100vh' }}>
        
        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection:'row-reverse'}}>
              <HomeIcon style={{width:'7vh',height:'7vh'}} onClick={handleClick}/>
        </div>

        <button onClick={goToGroup} className="groupc"></button>
        <button onClick={goToWholeClass} className="wclassd"></button>
        <button onClick={goToWholeClass} className="taskstatus"></button>
      
       


      </div>
    );
  }

  export default TaskStatus;








