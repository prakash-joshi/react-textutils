import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const onChangehandler = (event) => {
        console.log("text changed")
        setText(event.target.value)
    }
    const handleUpCaseClick = () => {
        console.log("text changed to UPPER case : " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoCaseClick = () => {
        console.log("text changed to lower case : " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearText = () => {
        console.log("Claering TextArea");
        let newText = "";
        setText(newText);
    }
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={onChangehandler} rows="8"></textarea>
                    <button className="btn btn-success mx-2 my-2" onClick={handleUpCaseClick}>Convert To UPPER case</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleLoCaseClick}>Convert To lower case</button>
                    <button className="btn btn-danger mx-2 my-2" onClick={clearText}>Clear Text</button>
                </div>
            </div>
            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <p>{text.split(' ').length} words and {text.length} characters</p>
            </div>
        </>
    )
}

