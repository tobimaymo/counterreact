import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, initial}) => {

const [count, setCount] = useState(initial)

    const suma = () =>{
        if (stock > count){
            setCount(count + 1)
        }
    }
    const resta = ()=>{
        if(count > 1){
            setCount(count -1)
        }
    }
  return (
    <>
    <div>
        <div className='count'> {count}</div>
        <div>
        <button onClick={resta}> - </button>
        <button onClick={suma}> + </button>
        </div>
    </div>
    </>
  )
}

export default ItemCount