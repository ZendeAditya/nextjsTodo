"use client";
import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Hero = () => {
  const [model, setModel] = useState(true);
  const handleFrom = () => {
    setModel(!model);
  };
  return (
    <>
      <h1 className="text-3xl text-center italic p-6 font-semibold">
        Todo with Nextjs 14, mongooes & mongoDB.
      </h1>
      <div className="flex items-center justify-between bg-slate-300 py-2 w-[40rem] m-3 p-2">
        <h2>Todo</h2>
        <button
          onClick={handleFrom}
          className="text-white bg-green-300 py-2 px-3 rounded-md hover:bg-green-400 focus:outline-4 focus:outline-blue-400 p-3 border-2 border-blue-400"
        >
          Add Student Info
        </button>
      </div>
      <TodoForm model={model} />
    </>
  );
};

export default Hero;
