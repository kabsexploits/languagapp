import "./App.css";
import Test from "./Map"
import Pics from "./Pic"
import io from "socket.io-client";
import { useState,useEffect } from "react";
import Start from "./Start";
import Consta from "./Test";
import Language from "./Language";
import Counter from './Counter'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
const {v4:uuid} = require('uuid')



const socket = io.connect("http://localhost:5000");

function App() {
  const [run,setrun]=useState(null)
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showbuilt, setbuilt] = useState(false);
  const [displaycode,setdisplaycode] = useState(12345)
  const [compar,setcompare]=useState(null)
  const [Notuser,setNotuser] = useState('')
   

    var show = ()=>{
         setbuilt(!showbuilt)
    }
    const notUser=()=>{
         setNotuser('please you are not the user')
    }
  useEffect(() => {
    
     
  }, []);

  const compare =()=>{
        if(displaycode == compar){
          
          show() 
          setcompare('')
        }

        else{
          notUser()
            show() 
        }

  }

  const hello=()=>{
     console.log("hello")
  }
  return (
     
    <div className="App">
            
       

          

          <Test />
           
        
    </div>
    
  );
}

export default App;
