import React from 'react';
import UserlogoforPost from './UserLogoforPost.js';
import './messgae.css';

export default function MessageBox({id,userid,content,date}){
    return(
        <>
        <div className="container-chat">
            <div>
                <UserlogoforPost/>
            </div>
            <div className='content'>
                <p style={{fontStyle:'italic',fontWeight:'bolder'}}>@{userid}</p>
            
                <div className='msg'>
                    <p>{content}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>  
        </>
    )
}