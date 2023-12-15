"use client";
import React, { useState } from "react";
import Router, { useRouter } from "next/navigation";
const TodoForm = ({ model }) => {
  const [title, setTitle] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const router = useRouter();
  const handleForm = async (e) => {
    e.preventDefault();
    if (!title || !mobile || !email || !github) {
      alert("all fields are require!");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/allusers", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, mobile, email, github }),
      });
      if (res.ok) {
        setTitle("");
        setMobile("");
        setEmail("");
        setGithub("");
        alert("Information stored into the database");
      } else {
        throw new Error("Faild to create student data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section
        className={` absolute w-96 h-[30rem] md:w-[40rem] md:h-[30rem] border-2 rounded-md shadow-md top-52 ${
          model ? "-translate-y-[50rem]" : "block"
        } duration-500 ease-in rounded-md bg-slate-500 z-10`}
      >
        <h2 className="text-center py-2 text-3xl font-semibold">
          Student Form
        </h2>
        <form
          onSubmit={handleForm}
          action="/api/allusers"
          className="flex flex-col flex-wrap items-center justify-center [&_div]:flex [&_div]:items-start [&_div]:flex-col text-lg p-3"
        >
          <div className="[&_input]:py-1 [&_input]:px-10 [&_input]:rounded-md [&_input]:outline-none [&_input]:m-2 [&_input]:border-2 ">
            <label htmlFor="nameId">Your Name</label>
            <input
              type="text"
              name="textName"
              id="nameId"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
            <label htmlFor="mobileId">Your Mobile No:</label>
            <input
              type="number"
              name="mobile"
              id="mobileId"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              value={mobile}
            />
            <label htmlFor="emailId">Your Email Id</label>
            <input
              type="email"
              name="emailName"
              id="emailId"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <label htmlFor="githubId">Your github Link</label>
            <input
              type="url"
              name="urlName"
              id="githubId"
              onChange={(e) => {
                setGithub(e.target.value);
              }}
              value={github}
            />
            <button className="py-2 m-2 rounded-md bg-green-400 text-white hover:bg-green-300 px-10">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default TodoForm;
