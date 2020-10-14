import React from 'react'
import styled from 'styled-components'
// import { useTodoState } from './todoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex:1;
    padding:20px 32px;
    padding-bottom:48px;
    overflow-y:auto;
`;

export default function TodoList() {
    const _things = [
        {
            id:1,
            text:'todoApp',
            done:true
        },
        {
            id:2,
            text:'wash face',
            done:false
        }
    ]
    return(
        <TodoListBlock>
            {/* {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))} */}
            <TodoItem _things={_things}/>
            {/* <TodoItem text="프로젝트생성하기" done={true}/>
            <TodoItem text="컴포넌트 생성하기" done={false}/> */}

        </TodoListBlock>
    ) 
}
