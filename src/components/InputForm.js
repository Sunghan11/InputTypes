import React, {useState} from 'react'

function InputForm(props) {
    const [input, setInput] = useState('');
    // const [newInput, bindNewInput] = UseInput('');

    const update = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            input: input
        });
    }

    return (
        <div className="input-form">
            <form onSubmit={handleSubmit}>
                <div className="input-form-text">
                    <br />
                    <input 
                    // {...bindNewInput}
                        type="text" 
                        id="text-bubble"
                        placeholder="INPUT HERE"
                        value={input}
                        name="text"
                        onChange={update} 
                    />
                </div>
                <button id="input-form-button">Submit</button>
            </form>
        </div>
    )
}

export default InputForm;