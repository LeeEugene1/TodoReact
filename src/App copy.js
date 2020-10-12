import React, {useState, useRef} from 'react';
import { createGlobalStyle } from 'styled-components';
import Create from './Create';
import UserList from './UserList';

const GlobalStyle = createGlobalStyle`
  body{
    background:#e9ecef;
  }
`

function App() {
  const [inputs, setInputs] = useState({
    username : '',
    email:''
  })

  const [family, setUsers] = useState([
    {
      id:1,
      username:'yujin',
      email:'uwm10@naver.com'
    },
    {
      id:2,
      username:'yumin',
      email:'uam10@naver.com'
    },
    {
      id:3,
      username:'hayoung',
      email:'hahaha10@naver.com'
    }
  ]);
  const {username, email} = inputs;
  const onChange = e =>{
    setInputs({
      ...inputs,
      [e.target.name]:e.target.value
    })
  }
  
  const nextId = useRef(4);
  const onCreate = () =>{
    const user = {
      id:nextId.current,
      username,
      email
    }
    // setUsers([...users, user])
    setUsers(family.concat(user))
    setInputs({
      username:'',
      email:''
    })
    // console.log(nextId.current);//4~
    nextId.current += 1;
  }

  const onRemove = (id) => {
    setUsers(family.filter(test => test.id !== id))
  }
  return (
    <>
      <GlobalStyle />
      <Create onChange={onChange} onCreate={onCreate} username={username} email={email} />
      <UserList testest={family} onRemove={onRemove}/>
    </>
  );
}

export default App;
