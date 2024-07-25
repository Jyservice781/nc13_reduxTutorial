import {combineReducers} from "redux";
import counterReducer from "./counter";
import todoReducer from "./todos";

// 여러 개의 리듀서를 합쳤을 경우
// 우리는 그 합본을 rootReducer  라고 부르는게 전통이다.
let rootReducer = combineReducers({
    counterReducer,
    todoReducer
})

export default rootReducer;