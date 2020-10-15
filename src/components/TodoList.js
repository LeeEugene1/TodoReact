import React,{useState, useRef} from 'react'
import styled,{css} from 'styled-components'
// import { useTodoState } from './todoContext';
import TodoItem from './TodoItem';
import {MdAdd} from 'react-icons/md'

const TodoListBlock = styled.div`
    flex:1;
    padding:20px 32px;
    padding-bottom:48px;
    overflow-y:auto;
`;

const CircleButton = styled.button`
    background:#38d9a9;
    &:hover{
        background:#63e6be;
    }
    &:active{
        background:#20c997;
    }

    z-index:5;
    cursor: pointer;
    width:80px;
    height:80px;
    display:flex;
    align-items:center;
    justify-content:center;

    position:absolute;
    left:50%;
    bottom:0;
    transform:translate(-50%, 50%);
    
    font-size:60px;
    color:white;
    border-radius:50px;
    border:none;
    outline:none;

    transition:0.125s all ease-in;

    ${props => props.open && css`
        background:#ff6b6b;
        &:hover{
            background:#ff8787;
        }
        &:active{
            background:#fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
    `}
`

const InsertFormPositioner = styled.div`
    width:100%;
    bottom:0;
    left:0;
    position:absolute;
`;

const InsertForm = styled.div`
    background:#f8f9fa;
    padding:32px;
    padding-bottom:72px;
    border-bottom-left-radius:16px;
    border-bottom-right-radius:16px;
    border-top:1px solid #e9ecef;
`;

const Input = styled.input`
 padding:12px;
 border-radius:4px;
 border:1px solid #dee2e6;
 width:100%;
 outline:none;
 font-size:18px;
 box-sizing:border-box;
`;

export default function TodoList() {
    const [inputs, setInputs] = useState({
        text:'',
        done:false
    });


    const {text, done} = inputs
    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
    
    const [_things, set_things] = useState([
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
    ]);

    const OnCreate = () =>{
        const nextId = useRef(3)
        const newThing = {
            id:nextId.current,
            text,
            done
        }
        set_things(_things.concat(newThing))
        setInputs({
            text:'',
            done:false
        })
        nextId.current += 1
    }

    return(
        <>
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
            <InsertFormPositioner>
                <InsertForm>
                    <Input placeholder="입력" autoFocus onChange={onChange}/>
                    <button onClick={OnCreate}>입력</button>
                </InsertForm>
            </InsertFormPositioner>
            <CircleButton>
                <MdAdd/>
            </CircleButton>
        </>
    ) 
}
