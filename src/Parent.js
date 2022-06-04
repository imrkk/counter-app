
import React,{useState} from 'react'
import Child from './Child'

function Parent(){

    const [count,setCount] = useState(0)
    const num = 0;

    return(
        <div>

        {
            count>=0? <Child data={count} /> : <h1>Count : {num}</h1>
        }
        <button  onClick={()=>setCount(count+1)}>Increment</button> <br/>
        <button  onClick={()=>setCount(count-1)}>Decrement</button>


        </div>
    )
}

export default Parent;

