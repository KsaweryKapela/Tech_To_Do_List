import React, {useState} from 'react'
import axios from "axios";


export default function PLEdit(tech) {

    const [isClicked, setIsClicked] = useState(false);

    const [values, setValues] = useState({
        PL: tech.tech_name});

    const handleInputChange = (event) => setValues({values, PL: event.target.value})

    const handleKeypress = (event) => {
    if (event.keyCode === 13) {

      axios({
             method: "patch",
             url: "http://127.0.0.1:8000/edit-PL/",
             data: {name: values.PL,
                    old_name: tech.tech_name},
             headers: { "Content-Type": "json" }})

      setValues({values, PL: ''})
      window. location. reload();
    }}

    return (
        <>
            {!isClicked &&
            <h1 onClick={() => setIsClicked(!isClicked)}>{values.PL}</h1>}

            {isClicked &&
             <input value={values.PL}
                         onChange={handleInputChange}
                         onKeyDown={handleKeypress}/>}


       </>
    )}