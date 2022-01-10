import React from "react"
import {useHistory} from "react-router-dom"
import background from './Group.png';
import HomeIcon from '@material-ui/icons/Home';



function Group() {
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

    function goToGroup3(){
      history.push("/group3");
    }
    
    return (

       
       <div style={{backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width: '100vw', height: '100vh' }}>
        
        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection:'row-reverse'}}>
              <HomeIcon style={{width:'7vh',height:'7vh'}} onClick={handleClick}/>
        </div>

        <button onClick={goToWholeClass} className="wclass"></button>
        <button onClick={goToIndividual} className="individual"></button>
        <button onClick={goToGroup3} className="group3"></button>

        

      </div>
    );
  }

  export default Group;








