import connectDB from "@/app/helper/connectdb";
import { NextResponse } from "next/server";
import Todo from "@/app/models/todo";

export const POST = async (req: any, res: any) => {
  const { name, mobile, email, github } = await req.json();
  await connectDB();
  await Todo.create({ name, mobile, email, github });
  return NextResponse.json({ data: "topic created!" });
};

export const GET = async () => {
  await connectDB();
  const stu = await Todo.find();
  return NextResponse.json({ stu });
};

export const DELETE = async (request: any) => {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Topic deleted!" });
};
