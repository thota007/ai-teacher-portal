import React from "react"
import {useHistory} from "react-router-dom"
import background from './Group3.png';
import HomeIcon from '@material-ui/icons/Home';



function Group3() {
    let history = useHistory();
    
  
    function handleClick() {
      history.push("/");
    } 

    function goToWholeClass(){
        history.push("/rclass");
      }
  
      function goToIndividual(){
        history.push("/individual");
      }

      function goToGroup(){
        history.push("/group");
      }


  
    
    return (

       
       <div style={{backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width: '100vw', height: '100vh' }}>
        
        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection:'row-reverse'}}>
              <HomeIcon style={{width:'7vh',height:'7vh'}} onClick={handleClick}/>
        </div>

        <button onClick={goToWholeClass} className="wclassc"></button>
        <button onClick={goToIndividual} className="individualc"></button>
        <button onClick={goToGroup} className="group4"></button>

      

        

      </div>
    );
  }

  export default Group3;








