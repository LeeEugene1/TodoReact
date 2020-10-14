import React from 'react'
import styled from 'styled-components'
// import { useTodoState } from './todoContext';

const TodoHeadBlock = styled.div`
    padding:48px 32px 24px 32px;
    border-bottom:1px solid #e9ecef;

    h1{
        font-size:36px;
        color:#343a40;
    }
    .day{
        margin-top:4px;
        color:#868e96;
        font-size:21px;

    }
    .tasks-left{
        color:#20c997;
        font-size:18px;
        font-weight:bold;
    }
`;

export default function TodoHead() {

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR',{
        year:'numeric',
        month:'long',
        day:'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR',{
        weekday:'long'
    })
    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
        </TodoHeadBlock>
    )
}
