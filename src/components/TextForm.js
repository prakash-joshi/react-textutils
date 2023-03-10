import React, { useState } from 'react'

export default function TextForm(props) {
    let myStyle = {
        color: props.mode === "dark" ? "white" : 'black',
        backgroundColor: props.mode === "dark" ? '#042743' : "white",
        margin: "auto"
    }
    const [text, setText] = useState('');
    const onChangehandler = (event) => {
        console.log("text changed")
        setText(event.target.value)
    }
    const handleUpCaseClick = () => {
        console.log("text changed to UPPER case : " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text changed to Upper Case", "success");
    }
    const handleLoCaseClick = () => {
        console.log("text changed to lower case : " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text changed to Lower Case", "success");
    }
    const clearText = () => {
        console.log("Claering TextArea");
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    return (
        <>
            <div className="container">
                <div style={myStyle}>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" id="myBox" value={text} onChange={onChangehandler} rows="8" style={{ color: props.mode === "dark" ? "white" : 'black', backgroundColor: props.mode === "dark" ? '#042743' : "white" }}></textarea>
                        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1 disabled={text.length===0}" onClick={handleUpCaseClick}>Convert to UpperCase</button>
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoCaseClick}>Convert to LowerCase</button>
                        <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={clearText}>Clear Text</button>
                    </div>
                </div>
            </div>
            <div className="container my-3" style={myStyle}>
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
            </div>
        </>
    )
}

