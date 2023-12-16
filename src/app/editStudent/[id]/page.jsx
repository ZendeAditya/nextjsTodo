import React from "react";
import EditStudentForm from "../../components/EditStudentForm";
const getTopicById = async (id) => {
  console.log(id);
  try {
    const res = await fetch(`http://localhost:3000/api/allusers/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.log("Faild to fetch data!");
    }
    return res.json();
  } catch (error) {
    console.log("something went wrong!", error);
  }
};
const page = async ({ params }) => {
  const { id } = params;
  const { stu } = await getTopicById(id);
  const { name, mobile, email, github } = stu;
  return (
    <EditStudentForm
      id={id}
      name={name}
      mobile={mobile}
      email={email}
      github={github}
    />
  );
};

export default page;
