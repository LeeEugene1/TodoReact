import React from 'react'

function Family({props, onRemove}){
    return(
        <div>
            {props.id}:{props.username}:{props.email}
            {/* 삭제버튼추가 */}
            <button onClick={()=>onRemove(props.id)}>삭제</button>
        </div>
    );
}
export default function UserList({testest, onRemove}) {
    return (
        <>
            <div>
                {testest.map((test,index) => <Family props={test} key={test.id} onRemove={onRemove}/>)}
            </div>
        </>
    );
}
