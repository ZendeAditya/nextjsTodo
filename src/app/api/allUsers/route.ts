import connectDB from "@/app/helper/connectdb";
import { NextResponse } from "next/server";
import { Student } from "@/app/models/todo";

export async function POST(req: string, res: string) {
  await connectDB();
  const studentData = {
    name: "random user",
    mobile: 1234563434,
    email: "randomuser@gmail.com",
    github: "randomusergithub",
  };
  let studentFirst = await Student.create(studentData);
  return NextResponse.json({data: studentFirst});
}

export async function GET(req: string, res: string) {
  await connectDB();
  const data = await Student.find();
  console.log("data", data);
  return NextResponse.json({ result: data });
}
