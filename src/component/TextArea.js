import { useState } from "react"


export default function TextArea(props){
const [text,setText]=useState("")

const handleUpperClick=()=>{
    console.log("Upper function clicked...");
    var newText = text.toUpperCase();
    setText(newText);

}

const handleOnChange=(event)=>{
    console.log("On change fired...");
    var newText=(event.target.value).toUpperCase();
    setText(newText);
}

const handleLowerClick=()=>{
    console.log("LowerCase Button Clicked...");
    var newText = text.toLowerCase();
    setText(newText);
}

const handleClearClick=()=>{
    console.log("Clear Button Clicked...");
    setText("");
}

const handleCopyClick=()=>{
    console.log("Text Copied to clipbooard...");
    var text=document.getElementById("textarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
}


return<>
<div>
    <div className="mb-3 mx-4 my-4 text-center" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 >{props.Heading}</h1>
        <p><b>Note: </b>Typing new character will automatically convert characters into Uppercase. Use Lowercase Button to change the text</p>
    <div className="container">
    <textarea className="form-control" id="textarea1" rows="7" placeholder={text} onChange={handleOnChange} value={text} style={{backgroundColor: props.mode==='dark'?'black':'light',color:props.mode==='dark'?'white':'black'}}></textarea>
    <br/>
    <button className="btn btn-primary mx-2" onClick={handleUpperClick}>UpperCase</button>
    <button className="btn btn-success mx-2" onClick={handleLowerClick}>LowerCase</button>
    <button className="btn btn-danger mx-2" onClick={handleClearClick}>Reset</button>
    <button className="btn btn-warning mx-2" onClick={handleCopyClick}>Copy</button>
    </div>
</div>
</div>
<div className="container text-center" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your Words Summary</h2>
    <p>It has {text.split(" ").length} words and {text.length} characters.</p>
    <p>{0.08 * text.split(" ").length} Minutes read.</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Please enter text in textbox for Preview'}</p>
</div>
</>
}