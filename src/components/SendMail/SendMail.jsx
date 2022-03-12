import React, { useState } from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'; 
import { useDispatch } from 'react-redux';
import { addtoeemail, closeSendMessage } from '../../features/mailSlice';



export default function SendMail() {

    const dispatch=useDispatch()
    const [input1,setInput1]=useState('')
    const [input2,setInput2]=useState('')
    const [input3,setInput3]=useState('')
    
    const submithandler=(event)=>{
        event.preventDefault()
        let newobj={
           
            
            id:Math.random(),
        title:input1,
        subject:input2,
        description:input3,
        time:'10pm'
        }
        dispatch(addtoeemail(newobj))
    }
  return (
    <div className='sendmail'>
        <div className="sendmail__header">
            <h4>New Message</h4>
            <CloseIcon className='sendmail__close'
            onClick={()=>dispatch(closeSendMessage())}
            />
        </div>
        
        <form onSubmit={submithandler} >
            <input placeholder='To' type="text" name='to'
            value={input1}
            onChange={(event)=>setInput1(event.target.value)}
            />
            <input placeholder='Subject' type="text" name='subject'
          value={input2}
          onChange={(event)=>setInput2(event.target.value)}
            />
            <input className='sendmail__message' placeholder='message...' name='meesage'  type="text" 
            value={input3}
            onChange={(event)=>setInput3(event.target.value)}
            />
            

            <div className="sendmail__options">
                <button className='sendmail__send'>send</button>
            </div>
        </form>   
        
    </div>
  )
}
