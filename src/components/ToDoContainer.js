import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import ToDos from "./ToDos";
import {insertToDo, toggleToDo, deleteToDo} from "../modules/todos";

function ToDoContainer() {
    let todoArray = useSelector(state => state.todoReducer)

    let dispatch = useDispatch()

    let onCreate = text => dispatch(insertToDo(text))
    let onToggle = useCallback(id => dispatch(toggleToDo(id)), [dispatch])
    let onDelete = useCallback(id => dispatch(deleteToDo(id)), [dispatch])

    return <ToDos todoArray={todoArray} onCreate={onCreate} onToggle={onToggle} onDelete={onDelete} />
}

export default ToDoContainer;