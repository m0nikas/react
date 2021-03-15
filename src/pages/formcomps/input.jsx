import React from 'react'

export default function Input({pattern, type, onChange, className}) {
    let renderDiv;
    if(type==="email"){
        renderDiv = 
        <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
        </div>
    } else renderDiv=""

    return (
        <div>
            <div className="mb-5">
                <input className={className} pattern={pattern} type={type} onChange={onChange}/>
                {renderDiv}              
            </div>

        </div>
    )
}
