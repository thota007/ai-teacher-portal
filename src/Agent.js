import React from 'react'
import {useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button';

function Agent() {

    let history = useHistory();

    function goToGroup() {
        history.push("/group");
      }

    return (
        <div>
            <h3>[Settings will be added here]</h3>
            <Button className="button" variant="outlined" onClick={goToGroup}>Start Session</Button>
        </div>
    )
}

export default Agent
