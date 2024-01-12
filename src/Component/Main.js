import React from "react";
import PostContent from "./PostContent";
import Posts from "./Posts";
function Main(){
    return(
        <>
        <div style={{
            width:'40%'
        }}>
            <PostContent/>
            <Posts/>
            </div>
        </>
    )
}

export default Main;