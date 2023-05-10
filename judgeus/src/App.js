import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import modi from './img.png'


function VoiceChatbot() {
  const [inputValue, setInputValue] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userMessage = inputValue.trim();

    if (userMessage !== '') {
      try {
        const response = await fetch(`/api/response/?message=${userMessage}`);
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
      

       
      <div className='chatbot-container'>
      <div className='chatbot-messages'>
      
        <h3 >IPC ArticleBot</h3>
        <h4>"Enter section number,keyword of the article you would like to know about</h4><br></br>
        
        <img className="my-image" src={modi}></img>
        
        {botResponse !== '' && (
          <div className='chatbot-message bot'>{botResponse}</div>
        )}
      
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit} className='chatbot-form'>
        
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Type your message here...'
        />
        <button type='submit'>Send</button>
      </form>
      
    </div>
      </div>
    </body>
  );
}

export default VoiceChatbot;



 