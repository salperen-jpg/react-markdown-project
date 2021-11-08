import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [input, setInput] = useState('## Write here....');
  return (
    <main>
      <div className='section-title'>
        <h1>Markdown</h1>
        <div className='underline'></div>
      </div>
      <div className='container'>
        <textarea
          value={input}
          className='input'
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <div className='markdown'>
          <ReactMarkdown>{input}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
}

export default App;
