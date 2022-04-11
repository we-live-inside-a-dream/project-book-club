import {useState} from 'react';
import './NewComponent.css';

export function BasicComponent (props) {
 //props is something like :   {name: 'the work' , color: '#ffffff'}

 const {color} = props; // equals  :   const name = props.name

 const [name , setName] = useState(props.name);

    return (   
        <div>
            <h1 class='title'> This is the {name} book club</h1>
            <h1 id='wellcome' > Wellcome</h1>

            <button onClick={()=>{setName('reza')}} >changeName</button>
        </div>
    );
}


