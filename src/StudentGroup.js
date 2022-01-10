import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import CheckIcon from '@mui/icons-material/Check';

function StudentGroup() {
    const [icon1,setIcon1]=useState('');

    function changeColor1(){
        setIcon1(<CheckIcon style={{fill: "black"}}/>);   
    }

    return (
        <div>
            <Button endIcon={icon1} onClick={changeColor1} variant='outlined'> Randomly Assign students to groups</Button><br/><br/>
            <form>
             <label for="groups">Number of Groups: </label>
             <input size="40" style={{fontSize:'15px',height:'40px', border:'1px solid', borderColor:'black', width:'100px'}} type="text" name="name" placeholder="6"/><br/><br/>   
            </form><br/>
            <Button variant='outlined'>Manually Assign students to groups</Button>
        </div>
    )
}

export default StudentGroup

