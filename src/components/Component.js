import React, { useState } from 'react';
import './Style.css';

function Component({name,sub}){

//declare the variable and asign value
const [email,setEmail]=useState("");




const handleEmail=(e)=>{
    setEmail(e.target.value);
}


const handleForm=(e)=>{
    e.preventDefault();
    console.log("form is submitted")
}




return(
    <div>
    <br/>
          <br/>
            
         { email?  "Email is: "+email : ""}
         <br/>
          <br/>
          
        <form onSubmit={handleForm}>
            <label >Email:</label>
            <input onChange={handleEmail}/>
            <br/>
            <label>Age</label>
            <input type={"number"}/>

            <br/>

            <label>Select any number: </label>
            <select>
                <option>
                    one
                </option>
                <option>
                    two
                </option>
            </select>
<br/>
<br/>
            <button type='submit'>Submit</button>

        </form>
    </div>
)

}

export default Component;

