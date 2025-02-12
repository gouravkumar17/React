import React, { useContext } from "react";
import {fname,lname} from '../../App';
function Compo4(){
    let firstName = useContext(fname)
    let lastName = useContext(lname)
    return(
        <div>
            <h1>I am a Component4</h1>
            <h1>My name is {firstName} {lastName}</h1>
        </div>
    )
}
export default Compo4;