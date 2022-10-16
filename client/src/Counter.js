import React, { useEffect, useState,useReducer } from "react";


const InitialState={count:0}


const reducer=(state,a)=>{
       switch(a.type){
          case "add":
             return {count:state.count+1}
       }



}
const Counter=()=>{
      
       const [state,setstate]=useReducer(reducer,InitialState)

       return(


     <div>
          count:{state.count}
          <button onClick={()=>{setstate({type:'add'})}}>button</button>

     </div>
   )

}

export default Counter