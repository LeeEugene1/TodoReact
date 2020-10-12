//흰색박스
import React from 'react'
import styled from 'styled-components'

const TodoTemplateBlock = styled.div`
    width:500px;
    height:768px;

    position:relative;
    background:white;
    border-radius:16px;
    box-shadow:0 0 8px rgba(0, 0, 0, 0.04);

    margin: 0 auto;
    margin-top:100px;
    margin-bottom:32px;

    display:flex;
    flex-direction:column;

`;

export default function TodoTemplate({children}) {
return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}
