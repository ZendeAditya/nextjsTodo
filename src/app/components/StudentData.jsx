import React from "react";
import RemoveBtn from "@/app/components/RemoveBtn";
import Link from "next/link";
const getStudent = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/allusers", {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const StudentData = async () => {
  const { stu } = await getStudent();

  if (!stu || !Array.isArray(stu)) {
    return <div>Error: Invalid student data format</div>;
  }
  return (
    <>
      <h2 className="text-3xl p-3 font-bold">Student Data</h2>
      <section>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-96 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 h-[10rem]">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Student Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Mobile No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Github
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {!stu
              ? "No data aviable"
              : stu.map((item, index) => (
                  <tbody key={index}>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.name}
                      </th>
                      <td className="px-6 py-4">{item.mobile}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">{item.github}</td>
                      <td className="px-6 py-4">
                        <Link
                          href={`editStudent/${item._id}`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </Link>

                        <RemoveBtn id={item._id} />
                      </td>
                    </tr>
                  </tbody>
                ))}
          </table>
        </div>
      </section>
    </>
  );
};

export default StudentData;
