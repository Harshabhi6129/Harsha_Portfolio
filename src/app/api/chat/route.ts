
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
    try {
        const { question, knowledgeBase } = await req.json();

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json(
                { error: { message: 'GEMINI_API_KEY is not set' } },
                { status: 500 }
            );
        }

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                { text: `${knowledgeBase}\n\nUser Question: ${question}\n\nProvide a helpful, concise answer based on the knowledge base above.` }
                            ]
                        }
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 500,
                    }
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(data, { status: response.status });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: { message: 'Failed to process request' } },
            { status: 500 }
        );
    }
}
