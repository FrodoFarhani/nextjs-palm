// pages/index.js
import React, { useState } from 'react';
import { postToPalm } from '../api/api';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handlePostToPalm = async () => {
    try {
      const postData = {
      model: 'chat-bison-001',
      method: 'generateMessage',
      prompt: {"messages": [{"content":`${prompt}`}]},
      temperature: 0.1, 
      candidateCount: 8
    };
      console.log("🚀 ~ file: index.js:18 ~ handlePostToPalm ~ postData:", postData)

      const result = await postToPalm(postData);
      console.log("🚀 ~ file: index.js:21 ~ handlePostToPalm ~ result:", JSON.stringify(result))
     
      setResponse(result.candidates[0].content);

    } catch (error) {
      console.error('Error posting to PALM API:', error);
    }
  }
  return (
     <div>
      <h1>Next.js PALM API Integration</h1>
      <form>
        <label>
          Enter your prompt:
          <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        </label>
        <button type="button" onClick={handlePostToPalm}>Get Response</button>
      </form>
      {response && (
        <div>
          <h2>Response from PALM API:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
