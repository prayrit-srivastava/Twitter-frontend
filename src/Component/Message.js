import React from "react";
import MessageBox from "./MessageBox";
import './messgae.css';
import { useUserContext } from "../UserContext.js";

function Message(){
    const Messages = users[0].Messages;
    // console.log(Messages[0].date);
    return(
        <>
        <div className="msgdiv">
        <h2>Messages</h2>
        <div >
            {Messages.map((msg)=><MessageBox id={msg.id} userid={msg.userId} content={msg.Content} date={msg.date} />)}
        </div>
        </div>
        </>
    )
}

export default Message;