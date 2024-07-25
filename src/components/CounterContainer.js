import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {minus, plus, setDiff} from "../modules/counter";
import Counter from "./Counter";

function CounterContainer() {
    // react-redux 안에는 리액트와 리덕스를 연결시켜주는 다양한 함수가 존재한다.
    // 1. useSelector
    // 현재 리덕스에 저장된 스토어의 상태 조회할때 사용됨.
    // state 를 통쨰로 가져와서 비구조적 할당 해주는 방식임.
    let {number, diff} = useSelector( state => ({
        number: state.counterReducer.number,
        diff: state.counterReducer.diff
    }))

    // 2. useDispatch
    // redux 의 dispatch() 함수를 사용할 수 있게 해준다.
    let dispatch = useDispatch()
    let onPlus = () => dispatch(plus())
    let onMinus = () => dispatch(minus())
    let onSetDiff = (diff) => dispatch(setDiff(diff))

    return (
        <Counter
            number={number}
            diff={diff}
            onPlus={onPlus}
            onMinus={onMinus}
            onSetDiff={onSetDiff}
        />
    )
}

export default CounterContainer;