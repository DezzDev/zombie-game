import { google } from '@ai-sdk/google';
import { generateText } from "ai";

import { NextResponse, type NextRequest } from 'next/server';
import { GAME_PROMPTS } from '@/lib/prompts';
import { GAME_CONFIG } from '@/lib/consts';
import { GenerateImageRequest, GenerateStoryRequest } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const { imagePrompt }: GenerateImageRequest = await request.json();
    console.log("imagePrompt: ",imagePrompt);

    const prompt = GAME_PROMPTS.GENERATE_IMAGE(imagePrompt);
    console.log("prompt: ",prompt);
    // Generate image using the AI model
    // generateText is for create text and image
    const { files } = await generateText({
      model: google('gemini-2.5-flash',),
      prompt,
      providerOptions:{
        google:{
          responseModalities:['IMAGE'],
        }
      }

    })

    console.log('Generated image files:', files);



    return NextResponse.json({ image: files[0] || null  });

  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json({ error: 'Error generating image' }, { status: 500 });
  }
}