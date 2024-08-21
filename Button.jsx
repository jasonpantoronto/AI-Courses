import React, {useState} from 'react';

function Button() {
    
    const [name, setName] = useState("First State");
    const [age, setAge] = useState(18);
    const {gender, setGender} = useState("Male");

    const updateName = function (){
        var nameInput = document.getElementById('box');
        setName(nameInput.value);
    }

    const updateAge = function() {
        var ageInput = document.getElementById('age-box');
        setAge(ageInput.value);
    }

    const agePlus = function() {
        setAge(age+2);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>

            <ul>

                <li>
                    <input id = "box" type="text" />
                    <button onClick={updateName}>Set Name</button>
                </li>

                <li>
                    <input id = 'age-box'type="integer" />
                    <button onClick = {updateAge}>Set Age</button>
                </li>

                <li>
                    <button onClick = {agePlus}>+1 Age</button>
                </li>
            </ul>
        </div>
    );

}

export default Button;