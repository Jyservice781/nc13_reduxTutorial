import React from 'react';

function Counter({number, diff, onPlus, onMinus, onSetDiff}) {
    let onChange = e => {
        let value = e.target.value
        // value = string, onSetDiff = int parseInt 로 형변환해줌.
        onSetDiff(parseInt(value))
    }

    return (
        <div>
            <h1> 현재 값: {number}</h1>
            <hr/>
            <button onClick={onMinus}>-</button>
            <input value={diff} min='1' onChange={onChange} />
            <button onClick={onPlus}>+</button>
        </div>
    )
}

// 컴포넌트를 분리할 것임.
// 액션을 정의하는 컴포넌트로 다 분리를 해줄것임.

export default Counter
