// make a get and post api for devs

//get-> to get all the devs
//post-> to create a new dev

import { connectDB } from "@/lib/mongodb";
import Dev from "@/models/Dev";

export async function GET() {
  try {
    await connectDB();
    const dev = await Dev.find({});
    return Response.json({ success: true, dev }, { status: 200 });
  } catch (error) {
    console.error("Error in fetching developers:", error);
    return Response.json(
      { success: false, error: "Failed to fetch developers" },
      { status: 500 }
    );
  }
}
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, experience, charge, techStack, phoneNumber } = body;

    if (!name || !email) {
      return Response.json(
        {
          error: "name or email are required.",
        },
        { status: 400 }
      );
    }

    const newDev = await Dev.create({
      name,
      email,
      experience,
      charge,
      techStack,
      phoneNumber,
    });

    return Response.json(
      { message: "Developer created successfully", dev: newDev },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating developer:", error);
    return Response.json(
      { error: "Failed to create developer" },
      { status: 500 }
    );
  }
}
