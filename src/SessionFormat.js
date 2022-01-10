import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import CheckIcon from '@mui/icons-material/Check';

function SessionFormat() {
    const [icon1,setIcon1]=useState('');
    const [icon2,setIcon2]=useState('');

    function changeColor1(){
        setIcon1(<CheckIcon style={{fill: "black"}}/>);   
    }

    function changeColor2(){
        setIcon2(<CheckIcon style={{fill: "black"}}/>);
    }

    return (
        <div>
            <h2>Will student be working in groups?</h2>
            <Button endIcon={icon1} onClick={changeColor1} variant='outlined'>Yes, students will work in groups</Button>
            <Button variant='outlined'>No, students will only work individually</Button>
            <h2> Select activity students will complete</h2>
            <form>
                <select name="groups" id="groups">
                    <option value="not listed">Not listed </option>
                </select>     
            </form>
            <h2>Will you be using the agent in this session</h2>
            <Button endIcon={icon2} onClick={changeColor2} variant='outlined'>Yes</Button><Button variant='outlined'>No</Button>
        </div>
    )
}

export default SessionFormat
