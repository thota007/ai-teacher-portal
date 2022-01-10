import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import HomeIcon from '@material-ui/icons/Home';
import {useHistory} from "react-router-dom"
import SessionFormat from './SessionFormat';
import Groups from './StudentGroup';
import Agent from './Agent';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Session() {

    let history = useHistory();
  
    function handleClick() {
      history.push("/");
    }

    function goToGroup() {
      history.push("/group");
    }


    return (
        <div>
        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection:'row-reverse'}}>
                <HomeIcon style={{width:'7vh',height:'7vh'}} onClick={handleClick}/>
                Prep 
            </div>
        <h2 style={{textAlign:'left'}}>New Session</h2>

        <Button className="button" variant="outlined" onClick={goToGroup}>Start Session</Button>

        <Tabs className="react-tabs">
        <TabList className="react-tabs__tab-list">
          <Tab>
            <p>Session Format</p>
          </Tab>
          <Tab>
            <p>Student Groups</p>
          </Tab>
          <Tab>
            <p>Agent Settings</p>
          </Tab>

         
  
        </TabList>

        

       

        <TabPanel>
          <div className="panel-content">
           <SessionFormat/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Groups/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Agent/>
          </div>
        </TabPanel>
    
        
      </Tabs>

      

      </div>
   
    )
}

export default Session

