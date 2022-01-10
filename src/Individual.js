import React from "react"
import {useHistory} from "react-router-dom"
import background from './Individual.png';
import HomeIcon from '@material-ui/icons/Home';


function Individual() {
    let history = useHistory();
    
  
    function handleClick() {
      history.push("/");
    } 

    function goToGroup(){
      history.push("/group");
    }

    function goToWholeClass(){
      history.push("/rclass");
    }


    
    return (
      
      <div style={{backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width: '100vw', height: '100vh' }}>
        
        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection:'row-reverse'}}>
              <HomeIcon style={{width:'7vh',height:'7vh'}} onClick={handleClick}/>
        </div>

        
        <button onClick={goToWholeClass} className="wclassb"></button>
        <button onClick={goToGroup} className="groupb"></button>

      </div>
    );
  }

  export default Individual;








