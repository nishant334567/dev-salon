import {NextResponse} from "next/server";
import {GoogleGenerativeAI} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


export async function POST(request){
    try{
          const {message} = await request.json();
        const model = genAI.getGenerativeModel({model: "gemini-2.0-flash-exp"});
        
        //AI response
        const result = await model.generateContent(message);
        const reply = result.response.text();
        console.log(result)
        console.log(reply)
        return NextResponse.json({reply});

    }
    catch(error){
        console.error("Error in chat API", error);
        return NextResponse.json({message:error})
    }
}