// 액션 타입 정의
let SET_DIFF = 'counter/DIFF'
let PLUS = 'counter/PLUS'
let MINUS = 'counter/MINUS'

// 생성함수 만들기
export let setDiff = diff => ({type: SET_DIFF, diff})
export let plus = () => ({type: PLUS})
export let minus = () => ({type: MINUS})

// 초기 상태 만들기
let initialState = {
    number: 0,
    diff: 10
}

// 리듀서 만들어주기
export default function counterReducer(state = initialState, action){
    switch(action.type){
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            }
        case PLUS:
            return {
                ...state,
                number: state.number + state.diff
            }
        case MINUS:
            return{
                ...state,
                number: state.number - state.diff
            }
        default:
            return state;
    }
}

// 리덕스를 통해서 리듀서를 전체적으로 관리를 하게 된다.