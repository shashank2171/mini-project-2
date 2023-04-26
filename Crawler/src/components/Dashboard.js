import React from 'react'
import { cookies } from '../App';




export default function Dashboard(){
    function logout(){
        cookies.set('TOKEN',"",{path:'/'});
        cookies.remove('NAME');
    }
  return (
    <div id='dash'>
        <div id='head'>
            <h3 id='user'>Welcome</h3>
            <button id='logout' onClick={logout}>Log Out</button>
        </div>
    </div>
  )
}






