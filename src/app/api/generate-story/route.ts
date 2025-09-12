import {google} from '@ai-sdk/google';
import {generateText} from "ai";

import { NextResponse, type NextRequest } from 'next/server';
import { GAME_PROMPT } from '@/lib/prompts';
import { GAME_CONFIG } from '@/lib/consts';
import { GenerateStoryRequest } from '@/lib/types';

export async function POST(request: NextRequest){
  try {
    const {userMessage, conversationHistory, isStart}: GenerateStoryRequest = await request.json();
    console.log("hola");
    
    // Determine the prompt based on whether it's the start of the game or a continuation
    let prompt: string = GAME_PROMPT.INITIAL_STORY;

    if(!isStart){
      const historyText = conversationHistory.map(
        (message)=> `${message.role}:${message.content}`
    ).join('\n');

    prompt = GAME_PROMPT.CONTINUE_STORY(historyText, userMessage)
  }

  // Generate the text and image using the AI model
  const {text} = await generateText({
    model:google('gemini-2.5-flash'),
    prompt: prompt,
  })

  console.log('Generated story:', text);

  return NextResponse.json({story: text});

  } catch (error) {
    console.error('Error generating story:', error);
    return NextResponse.json({error: 'Error generating story'}, {status: 500});
  }
}