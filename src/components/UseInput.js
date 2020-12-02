import { useState } from 'react'

function UseInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const bind = {
        value: value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value, bind];
}

export default UseInput
