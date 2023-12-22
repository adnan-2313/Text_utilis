import React,{useState} from 'react'
export default function TextForm(props) {

    const handleUPClick = () =>{
        // console.log("UpperCase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleRemoveSpaceClick = () =>{
        // console.log("UpperCase was clicked")
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Spaces are removed","success")
    }
    const handleLowClick = () =>{
        // console.log("UpperCase was clicked")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClearClick = () =>{
        let newText = ""
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    const handleCopyClick = () =>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard","success")
    }
    const handleFirstLetterClick = () =>{
        let newText = text.charAt(0).toUpperCase()
        setText(newText+text.slice(1))
        props.showAlert("First letter beacme Cap","success")
    }
    // handleFirstLetterClick();

    const handleonChange = (event) =>{
        // console.log("Handle On change")
        setText(event.target.value)
    }
    const [text,setText] = useState('')
    // text =  "new Text"; //wrong  way to change the state
    // setText("new Text");  //correct way to set text s
  return (
    <>
    <div className ="container" style = {{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style = {{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleonChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary"   onClick={handleUPClick} >Convert To UpperCase</button>
        <button className="btn btn-primary mx-2"  onClick={handleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1"  onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1"  onClick={handleCopyClick}>Copy To Clipboard</button>
        <button className="btn btn-primary mx-1"  onClick={handleRemoveSpaceClick}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1"  onClick={handleFirstLetterClick}>First Letter Capital</button>
        
    </div>
    <div className="container my-3" style = {{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}  >
        <h2 >Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <b><p>{text.length>0 ? text:"ENTER SOMETHING TO PREVIEW IT HERE"}</p></b>
    </div>
    </>
  )
}
