import ClockTimer from './Clocktimer';
import React from 'react';

function RampInput(props) {
    const falsyVal = [undefined, null, NaN, 0, "", false];

    // if (Array.isArray(props.input)) {
    debugger;
    if(props.value === undefined) {
        return ("");
    } else if (falsyVal.includes(props.value.input)) {
        return (
            <div className="input-result">
                <h2>Prop passed as undefined or Falsy</h2>
                <div id="clock">
                    <ClockTimer />
                </div>
            </div>
        )
    } else if (props.value.input[0] === '[' && props.value.input.slice(-1) === ']') {
        let newInput = props.value.input.slice(1,-1);

        return (
            <div className="input-result">
                <h2>Prop passed as an Array</h2>
                <div id="array">
                    <ul>
                        {
                            newInput.split(',').map((item, i) => (
                                <li key={i}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
            <div className="input-result">
                <h2>Prop passed as non-array or Falsey</h2>
                <div id="string">{props.value.input}</div>
            </div>
        )
    }
}

export default RampInput;