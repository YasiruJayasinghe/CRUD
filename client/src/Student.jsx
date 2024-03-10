import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./assets/components/Nav";
import { Link } from "react-router-dom";

function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        setStudents(res.data); // Assuming res.data is an array of student objects
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        // Handle error (e.g., display an error message to the user)
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8081/student/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-green-200">
      <Nav />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-center mt-10 text-3xl font-bold dark:text-white">
          Student Table
        </h1>
        <div className="relative overflow-x-auto mt-7">
          <table className="w-full text-m rtl:text-right text-gray-500 dark:text-gray-400 text-center">
            <thead className="text-l text-gray-900 dark:text-white uppercase bg-cyan-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => (
                <tr
                  key={i}
                  className="bg-gray-200 border-b hover:bg-gray-300 dark:hover:bg-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {student.name}
                  </th>
                  <td className="px-6 py-4">{student.email}</td>
                  <td className="px-6 py-4">
                    <Link to={`updateStudent/${student.id}`}>
                      <button className="font-medium bg-blue-500 hover:bg-blue-700 text-white  py-1 px-4 border border-black rounded">
                        Update
                      </button>
                    </Link>
                    <button
                      className="font-medium bg-red-500 hover:bg-red-700 text-white  py-1 px-4 border border-black rounded ml-2"
                      onClick={(e) => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Student;
