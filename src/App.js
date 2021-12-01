import React, { useState } from 'react';
import './App.css'

  const App = () => {
    //let message = "hello world";
    const [message, setMessage] = useState("Hello world")
    return(
      <>
      <div className= "container">{message}

    </div>
   <button onClick={() => setMessage ("hellooooo")}> mudar mensagem
   </button>
   
       </>
     );
  };
  export default App; 
