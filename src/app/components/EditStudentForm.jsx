"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const EditStudentForm = ({ id, name, mobile, email, github }) => {
  const [newName, setNewName] = useState(name);
  const [newMobile, setNewMobile] = useState(mobile);
  const [newEmail, setNewEmail] = useState(email);
  const [newGithub, setNewGithub] = useState(github);
  const router = useRouter();
  const handleForm = async (e) => {
    e.preventDefault();

    if (!newName || !newMobile || !newEmail || !newGithub) {
      alert("All fields are required!");
      return;
    }

    let url = `http://127.0.0.1:3000/api/allusers/${id}`;

    try {
      const res = await fetch(url, {
        method: "PUT", // or "PATCH" depending on your API
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newName, newMobile, newEmail, newGithub }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Data submitted successfully!");
        router.refresh();
        router.push("/");
      } else {
        console.error("Update failed:", data.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleForm}
        className="flex flex-col flex-wrap items-center justify-center [&_div]:flex [&_div]:items-start [&_div]:flex-col text-lg p-3"
      >
        <div className="[&_input]:py-1 [&_input]:px-10 [&_input]:rounded-md [&_input]:outline-none [&_input]:m-2 [&_input]:border-2 ">
          <label htmlFor="nameId">Your Name</label>
          <input
            type="text"
            name="textName"
            id="nameId"
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
          />
          <label htmlFor="mobileId">Your Mobile No:</label>
          <input
            type="number"
            name="mobile"
            id="mobileId"
            onChange={(e) => setNewMobile(e.target.value)}
            value={newMobile}
          />
          <label htmlFor="emailId">Your Email Id</label>
          <input
            type="email"
            name="emailName"
            id="emailId"
            onChange={(e) => setNewEmail(e.target.value)}
            value={newEmail}
          />
          <label htmlFor="githubId">Your github Link</label>
          <input
            type="url"
            name="urlName"
            id="githubId"
            onChange={(e) => setNewGithub(e.target.value)}
            value={newGithub}
          />
          <ul className="flex items-center justify-start gap-2">
            <li>
              <button
                type="submit"
                className="py-2 m-2 rounded-md bg-green-400 text-white hover:bg-green-300 px-10"
              >
                Update
              </button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default EditStudentForm;
