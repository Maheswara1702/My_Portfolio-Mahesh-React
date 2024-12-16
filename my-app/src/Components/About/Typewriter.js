import React, { useEffect, useState } from 'react'

const Typewriter = ({text,delay=150}) => {
    const [displayedText,setDisplayedText] = useState("");
    const [index,setIndex]=useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(index<text.length){
                setDisplayedText((prev)=>prev+text[index]);
                setIndex((prev)=>prev+1);
            }
        },delay)
        return ()=>clearInterval(interval);
    },[index,text,delay]);
  return (
    <span>
        {displayedText}
    </span>
  )
}

export default Typewriter