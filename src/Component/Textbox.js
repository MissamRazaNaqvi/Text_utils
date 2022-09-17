import React, { useState } from 'react';

export default function TextBox(props) {

  const handlerUpClicked = () => {
    //console.log("clicked");
    let newtext = text.toUpperCase();
    settext(newtext)
  }
  const handlerLoClicked = ()=>{
    let LowerText = text.toLowerCase();
    settext(LowerText);
  }
  const handlerClearClicked = () =>{
    settext(" ")
  }
  const CopyText = ()=>{
    var textCopy = document.getElementById("myBox");
    navigator.clipboard.writeText(textCopy.value);
  }
 
  const RemoveExtraSpace = ()=>{
    let spaceRemove=text.split(/[ ]+/);
    settext(spaceRemove.join(" "))
  }
  const OnchangeHandler = (event) => {
    //console.log("on change");
    settext(event.target.value)
  }
  const [text, settext] = useState(" ");
  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="m-3">
          <h3 className='my-2'>Try TextUlils - Word counter, Character Counter, Remove Extra Spaces</h3>
          <textarea className='form-control' value={text} onChange={OnchangeHandler} id='myBox' rows='8'></textarea>
          <button disabled={text.length===0} className="btn btn-primary my-2 my-1" onClick={handlerUpClicked} >Convert to UpperCase</button>
          <button disabled={text.length===0} className="btn btn-primary my-2 mx-2 my-1" onClick={handlerLoClicked} >Convert to LowerCase</button>
          <button disabled={text.length===0} className="btn btn-primary my-2 mx-2 my-1" onClick={handlerClearClicked} >Clear Text</button>
          <button disabled={text.length===0} className="btn btn-primary my-2 mx-2 my-1" onClick={CopyText} >Copy</button>
          <button disabled={text.length===0} className="btn btn-primary my-2 mx-2 my-1" onClick={RemoveExtraSpace} >Remove Extra Space</button>
        </div>
      </div>

      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="m-3">
          <h2>Your text summary</h2>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Character</p>
          <p>{0.008 * text.split(" ").length} Minutes to Read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}