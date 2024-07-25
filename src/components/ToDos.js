import React, {useState} from 'react';

let ToDoItem = React.memo(
    function ToDoItem({todo, onToggle, onDelete}) {
        return (
            <li
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                onClick={() => onToggle(todo.id)}
            >
                {todo.text}
                <button onClick={() => onDelete(todo.id)}>삭제하기</button>
            </li>

        )
    }
)

let ToDoList = React.memo(
    function ToDoList({todoArray, onToggle, onDelete}) {
        return (
            <ul>
                {todoArray.map(t => (
                    <ToDoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete}/>
                ))}
            </ul>
        )
    }
)

function ToDos({todoArray, onCreate, onToggle}) {
    let [text, setText] = useState('')
    // redux 를 사용하기에는 소소한 정도일 때
    let onChange = e => setText(e.target.value)
    // 우리가 submit 을 눌렀을 때의 처리
    // 전송이 끝나면 무조건 새로고침이 일어남.. DB 연결이 안되있어서 새로고침되면 날아가기 때문에
    // 새로고침을 막는 처리를 해줌
    let onSubmit = e => {
        e.preventDefault()
        onCreate(text)
        setText('')
    }

    let onDelete = () => {
        onDelete(text.id)
        setText('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} placeholder='할 일을 입력해주세요' onChange={onChange} />
                <button type='submit'>입력하기</button>
            </form>
            <hr/>
            <ToDoList todoArray={todoArray} onToggle={onToggle} onDelete={onDelete}/>
        </div>
    )
}


export default ToDos