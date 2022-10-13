import React from 'react';



export default function componentName(props) {
  return (
    <div className='header1 flex'>
      <h1>Twitter Search</h1>
      <div className="input-group mb-3 inputArea">
        
        <input 
          type="text" 
          className="form-control" 
          placeholder="#enter a Hashtag"
          value={props.inputValue !== '' ? `${props.inputValue}` : ''}
          onChange={(e)=>props.change(e)} />
        <div className="input-group-append btnSearch">
          <span 
            className="input-group-text"
            onClick={()=>props.click()}>
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </div>
  );
}