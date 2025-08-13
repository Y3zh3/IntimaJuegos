'use server';
/**
 * @fileOverview A flow to continue an erotic story.
 *
 * - continueEroticStory - A function that continues an erotic story based on the previous context.
 * - EroticStoryInput - The input type for the continueEroticStory function.
 * - EroticStoryOutput - The return type for the continueEroticStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EroticStoryInputSchema = z.object({
  story: z.string().describe('The current state of the erotic story.'),
});
export type EroticStoryInput = z.infer<typeof EroticStoryInputSchema>;

const EroticStoryOutputSchema = z.object({
  continuation: z.string().describe('The next part of the erotic story.'),
});
export type EroticStoryOutput = z.infer<typeof EroticStoryOutputSchema>;


export async function continueEroticStory(input: EroticStoryInput): Promise<EroticStoryOutput> {
  return eroticStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'eroticStoryPrompt',
  input: {schema: EroticStoryInputSchema},
  output: {schema: EroticStoryOutputSchema},
  prompt: `You are an expert erotic story writer. Continue the following story in a creative and sensual way.

Story so far:
{{{story}}}

Continue the story.`,
  config: {
    safetySettings: [
        {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_NONE",
        },
        {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_NONE",
        },
        {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_NONE",
        },
        {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_NONE",
        }
    ]
  }
});

const eroticStoryFlow = ai.defineFlow(
  {
    name: 'eroticStoryFlow',
    inputSchema: EroticStoryInputSchema,
    outputSchema: EroticStoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
