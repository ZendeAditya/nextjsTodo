import connectDB from "@/app/helper/connectdb";
import Todo from "@/app/models/todo";
import { NextResponse } from "next/server";

export const PUT = async (req: any, { params }: any) => {
  try {
    const { id } = params;
    const requestBody = await req.text(); // Log the raw request body
    console.log("Request Body:", requestBody);

    const {
      newName: name,
      newMobile: mobile,
      newEmail: email,
      newGithub: github,
    } = JSON.parse(requestBody);

    await connectDB();
    await Todo.findByIdAndUpdate(id, { name, mobile, email, github });

    return NextResponse.json({ msg: "Updated" }, { status: 200 });
  } catch (error: any) {
    console.error("Error processing PUT request:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
};

export const GET = async (request: any, { params }: any) => {
  try {
    const { id } = params;
    await connectDB();
    const stu = await Todo.findOne({ _id: id });
    return NextResponse.json({ stu }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
