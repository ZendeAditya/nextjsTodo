import React from "react";

const TodoForm = () => {
  return (
    <>
      <section className="w-[47rem] h-[41rem] border-2 rounded-md">
        <form
          action="#"
          className="flex flex-col flex-wrap items-center justify-center [&_div]:flex [&_div]:items-start [&_div]:flex-col text-lg p-3"
        >
          <div>
            <label htmlFor="subjectInput" className="py-2 ps-5">Subject Name : </label>
            <input
              type="text"
              name="subjectInputName"
              id="subjectInput"
              className="py-2 border-2 border-gray rounded-full w-80 mx-2 text-start "
              placeholder="add subject name here"
            />
          </div>
          <div>
            <label htmlFor="taskDescId" className="py-2">Task Description</label>
            <textarea
              name="taskDescName"
              id="taskDescId"
              cols="30"
              rows="10"
              className="resize-none border-2 w-80 h-52 rounded-lg outline-none p-2"
            ></textarea>
          </div>
          <div>
            <label htmlFor="dueDateId" className="ps-10 py-1 -mx-16">Due Date</label>
            <input type="date" name="dueDateIdName" id="dueDateId"  className="py-2 px-10 m-3 rounded-md border-2 "/>
          </div>
          <div>
            <label htmlFor="priorityId" className="py-2 -mx-10">Priority Level</label>
            <select name="selectPriority" id="priorityId" className="py-2 px-20 rounded-md border-2 mx-2">
              <option value="select" defaultValue="select">
                select
              </option>
              <option value="Low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="markId" className="px-2 py-2">Task Completed</label>
            <select name="taskName" id="taskNameId" className="py-2 rounded-md border-2 px-20">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
          </div>
        </form>
      </section>
    </>
  );
};

export default TodoForm;
