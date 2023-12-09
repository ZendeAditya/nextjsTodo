import React from "react";

const TodoForm = () => {
  return (
    <>
      <section className="w-[40rem] h-[30rem] border-2 rounded-md shadow-md">
        <h2 className="text-center py-2 text-3xl font-semibold">Student Form</h2>
        <form
          action="#"
          className="flex flex-col flex-wrap items-center justify-center [&_div]:flex [&_div]:items-start [&_div]:flex-col text-lg p-3"
        >
          <div className="[&_input]:py-1 [&_input]:px-10 [&_input]:rounded-md [&_input]:outline-none [&_input]:m-2 [&_input]:border-2 "> 
            <label htmlFor="nameId">Your Name</label>
            <input type="text" name="textName" id="nameId" required/>
            <label htmlFor="mobileId">Your Mobile No:</label>
            <input type="number" name="mobile" id="mobileId"required />
            <label htmlFor="emailId">Your Email Id</label>
            <input type="email" name="emailName" id="emailId"required />
            <label htmlFor="githubId">Your github Link</label>
            <input type="url" name="urlName" id="githubId"required />
            <button className="py-2 m-2 rounded-md bg-green-400 text-white hover:bg-green-300 px-10">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default TodoForm;
