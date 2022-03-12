import { createSlice } from "@reduxjs/toolkit";

const initialState={
    sendMessageIsOpen:false,
    email:[
        {id:1,
        title:'twitch',
        subject:'hey fellow stemear',
        description:'this is a seat',
        time:'10pm'
    }
    ]

}

const mailSlice=createSlice({
    name:'mailslice',
    initialState,
    reducers:{
        openSendMessage:(state,action)=>{
            state.sendMessageIsOpen=true
        },
        closeSendMessage:(state,action)=>{
            state.sendMessageIsOpen=false
        },
        addtoeemail:(state,action)=>{
            state.email.push(action.payload)
        }
    }
})

export const {openSendMessage,closeSendMessage ,addtoeemail}=mailSlice.actions

export default mailSlice.reducer