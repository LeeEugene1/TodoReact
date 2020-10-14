import React from 'react'
import styled, {css} from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md';
import { useTodoDispatch } from './todoContext';

const Remove = styled.div`
    opacity:0;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#dee2e6;
    cursor:pointer;

    &:hover{color:#ff5b6b}
`;
const CheckCircle = styled.div`
    width:32px;
    height:32px;
    border-radius:16px;
    border:1px solid #ced4da;
    font-size:24px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    cursor:pointer;
    ${props => props.done && css`
        border:1px solid #38d9a9;
        color:#38d9a9;
    `}
`;
const Text = styled.div`
    flex:1;
    font-size:21px;
    color:#495057;
    ${props => props.done && css`
        color:#ced4da;
    `}
`;

const TodoItemBlock = styled.div`
    display:flex;
    align-items:center;
    padding-top:12px;
    &:hover{
        ${Remove}{
            opacity:1;
        }
    }
`;

function Object({props, done}){
    return(
        <>
            <CheckCircle done={props.done}>
                {props.done && <MdDone/>}
            </CheckCircle>
            <Text done={props.done}>
                <p>{props.text}</p>
            </Text>
            <Remove><MdDelete/></Remove>
        </>
    );
}

export default function TodoItem({_things}) {

    return (
        <TodoItemBlock>
            {/* <CheckCircle done={done}>
                {done && <MdDone/>}
            </CheckCircle>
            <Text done={done}>{text}</Text>
                <Remove>
                    <MdDelete/>
                </Remove> */}

                {/* <Object props={_things[0]} /> */}
                {_things.map(test => 
                    <Object props={test} 
                />)}
        </TodoItemBlock>
    )
}
