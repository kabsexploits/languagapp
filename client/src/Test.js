import "./App.css";
import "./index.css";
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';



const Test = ()=>{
  const [Fls,setFls]=useState(false)
  const [Te,setTe]=useState(true)
  const [name,setname]=useState('miami')


	const nameChange=()=>{
        setname('something else')
         setTe(true)
         setFls(false)
  }

  const swiches=(e)=>{
    setname('what about sunrise what about rain ')
         setTe(false)
         setFls(true)

  }
   return(

    <>
    <h1>hellow </h1>

    <input onChange={(e)=>swiches(e)}></input>
    <h1>{name}</h1>
     	
     {Fls &&	<button onClick={nameChange}>ChangeNames</button>}
        {Te &&<button onClick={swiches }>ChangeNames</button>}
    </>



   )

}

export default Test;