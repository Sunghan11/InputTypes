import ClockTimer from './Clocktimer';


function RampInput(props) {
    const falsyVal = [undefined, null, NaN, 0, "", false];

    // if (Array.isArray(props.input)) {
    if(props.input[0] === '[' && props.input.slice(-1) === ']') {
        let newInput = props.input.slice(1,-1);

        return (
            <div>
                <h2>Prop passed as an Array</h2>
                <ul>
                    {
                        newInput.split(',').map((item, i) => (
                            <li key={i}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    } else if (falsyVal.includes(props.input)) {
        return (
            <div>
                <h2>Prop passed as undefined or Falsy</h2>
                <ClockTimer />
            </div>
        )
    } else {
        return (
            <div>
                <h2>Prop passed as non-array or Falsey</h2>
                <h4>{props.input}</h4>
            </div>
        )
    }
}

export default RampInput;