import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';


function VoiceChatbot() {
  const [inputValue, setInputValue] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userMessage = inputValue.trim();

    if (userMessage !== '') {
      try {
        const response = await fetch(`/api/get_response/?message=${userMessage}`);
        const data = await response.json();
        setBotResponse(data.message);
        speak(data.message);
      } catch (error) {
        console.error(error);
      }
    }
    setInputValue('');
  };

  const speak = (message) => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(utterance);
  };

  return (
    <body>
    <div className='hello'>
            <div class="d-flex flex-column justify-content-center w-100 h-100">

        <div class="d-flex flex-column justify-content-center align-items-center">

          </div>
        </div>
        <div class="wrapper">
          <div><span class="dot"></span></div>
          <div><span class="dot"></span></div>
          <div><span class="dot"></span></div>
          <div><span class="dot"></span></div>
          <div><span class="dot"></span></div>
          <div><span class="dot"></span></div>
          <div><span class="dot"></span></div>
          <div><span class="dot"></span></div>
          <div><span class="dot"></span></div>
          <div><span class="dot"></span></div>
          <div><span class="dot"></span></div>
          <div><span class="dot"></span></div>
          <div><span class="dot"></span></div>
          <div><span class="dot"></span></div>
          <div><span class="dot"></span></div>
        </div>
      
      <h1>ModiBhakt</h1>
      
      <div>
          
        
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <br></br><br></br>
          <button type="submit"> Talk to me.</button>
        </form>
      </div>
       <div>
        {botResponse !== '' && <p>{botResponse}</p>}
      </div> 
      
    </div>
    </body>
  );
}

export default VoiceChatbot;
