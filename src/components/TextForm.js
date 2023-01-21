import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("enter text here")
    const handleUpCaseClick = () => {
        console.log("text chnged to UPPER case : " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const onChangehandler =(event)=>{
        console.log("text changed")
        setText(event.target.value)
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" id="myBox" value={text} onChange={onChangehandler} rows="8"></textarea>
                <button className="btn btn-primary" onClick={handleUpCaseClick}>Convert To UPPER case</button>
            </div>
        </div>
    )
}

