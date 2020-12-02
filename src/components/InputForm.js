import React from 'react'
import UseInput from './UseInput';
import RampInput from './RampInput';

function inputForm() {
    // const [newInput, setInput] = useState('');

    const [newInput, bindNewInput] = UseInput('');

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Input Here</label>
                    <input 
                    {...bindNewInput}
                        type="text" 
                        // value={newInput} 
                        // onChange={e => UseInput(e.target.value)} 
                    />
                </div>
                <button type="submit">Go</button>
                <RampInput input={newInput}/>
            </form>
        </div>
    )
}

export default inputForm;