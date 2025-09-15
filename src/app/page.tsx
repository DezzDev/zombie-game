'use client'

import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    fetch('/api/generate-story', {
      method: 'POST', headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        userMessage: 'Look around',
        conversationHistory: [],
        isStart: true
      })
    }).then(res => res.json())
      .then(data => {
       console.log("image prompt",data.imagePrompt);
        fetch('/api/generate-image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            imagePrompt: data.imagePrompt
          })
        })
          .then(imageData => {
            console.log('Generated image data:', imageData);
          })
          .catch(error => {
            console.error('Error generating image', error);
          });
      })
      .catch(error => {
        console.error('Error generating story', error);
      });
  }, []);
    return (
      <div className="font-sans min-h-screen p-8">
        <h1>Zombie apocalypse game</h1>
      </div>
    );
  }
