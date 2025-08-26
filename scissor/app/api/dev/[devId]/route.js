// fetch the dev data for id: xybmb24b3
// this is a get request
// prompt - ill be getting dev id as search url params, help me make a get apito get developer data assocted with that ID.
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Dev from "@/models/Dev";

export async function GET(req, {params}) {
    try{

        //1. connect to DB
        await connectDB();

        //2. Extract the dynamic "id" from the Url
        const {devId} = await params;
        console.log(devId);
        const developer = await Dev.findById(devId);

        if(!developer){
            return NextResponse.json({error: "Developer not found"});
        }

        return NextResponse.json(developer, {status:200});

    }
    catch(error) {
        return NextResponse.json({error: error.message}, {status:500});
    }
}