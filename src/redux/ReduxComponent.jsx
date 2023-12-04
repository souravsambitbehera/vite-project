import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseClick, increaseClick, resetClick } from './buttonSlice'

const ReduxComponent = () => {
    const value = useSelector(store=>store.button)
    const dispatch = useDispatch()
    const[isDisabled,setIsDisabled] = useState(false)

    // value?setIsDisabled(false):setIsDisabled(true)
    // console.log(dispatch)
    // if(value===0){
    //     setIsDisabled(!isDisabled)
    // }
    console.log(value)
    useEffect(()=>{
        if(value===0){
            setIsDisabled(true)
        }else{
            setIsDisabled(false)
        }
    },[value])
    
  return (
    <div>ReduxComponent


        <div>
            <button onClick={()=>dispatch(increaseClick())}  >Increase</button>
            <button onClick={()=>dispatch(decreaseClick())} disabled={isDisabled} >Decrease</button>
            <button onClick={()=>dispatch(resetClick())}>Reset</button>

            <p>{value}</p>
        </div>
    </div>
  )
}

export default ReduxComponent