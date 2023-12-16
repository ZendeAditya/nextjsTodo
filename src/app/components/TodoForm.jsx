"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TodoForm = ({ model }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const router = useRouter();

  const handleForm = async (e) => {
    e.preventDefault();

    if (!name || !mobile || !email || !github) {
      alert("All fields are required!");
      return;
    }

    let url = "http://127.0.0.1:3000/api/allusers";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          mobile: mobile,
          email: email,
          github: github,
        }),
      });

      if (res.ok) {
        alert("Data submitted successfully!");
        setName("");
        setMobile("");
        setEmail("");
        setGithub("");
        router.refresh();
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <section
        className={`absolute w-96 h-[33rem] md:w-[40rem] md:h-[30rem] border-2 rounded-md shadow-md top-52 ${
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
                setName(e.target.value);
              }}
              value={name}
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
            <ul className="flex items-center justify-start gap-2">
              <li>
                <button
                  type="submit"
                  className="py-2 m-2 rounded-md bg-green-400 text-white hover:bg-green-300 px-10"
                >
                  Submit
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="py-3 m-2 rounded-md bg-red-400 text-white hover:bg-red-300 px-10"
                >
                  Close
                </a>
              </li>
            </ul>
          </div>
        </form>
      </section>
    </>
  );
};

export default TodoForm;
