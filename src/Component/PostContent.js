import React from 'react';
import Userlogo from './Userlogo';
import './PostContent.css'
import { useUserContext } from '../UserContext';
import axios from 'axios';

export default function PostContent(){
    return(
        <>
        <div className="Topdiv" >
        <div>
            <Userlogo/>
        </div>
        <div>
            <form>
            <div className='postcontent-1'>
            <input type="text" placeholder="What is happening?!"></input>
            </div>
            <div className='postcontent-2'>
            <input type='file'/>
            <button type="submit">Post</button> 
            </div>
            </form>
        </div>
        </div>
        </>
    )
}
