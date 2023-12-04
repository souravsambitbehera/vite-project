import { createSlice } from "@reduxjs/toolkit";

const initialState = 0

const buttonSlice = createSlice({
    name:"button",
    initialState,
    reducers:{
        increaseClick(state){
            return state= state+1
        },
        decreaseClick(state){
            if(state>0){
                return state = state-1
            }else{
                return state =0
            }

           
        },
        resetClick(state){
            return state=0
        }
    }
})
export const {increaseClick,decreaseClick,resetClick} = buttonSlice.actions
export default buttonSlice.reducer