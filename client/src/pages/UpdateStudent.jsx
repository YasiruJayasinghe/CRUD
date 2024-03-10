import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:8081/updateStudent/"+id, { name, email })
      .then((res) => {
        console.log(res);
        navigate('/');
      }).catch(err => console.log(err));
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-200">  
    <h1 className="text-3xl font-semibold mb-5">Update a Student</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl w-full px-6 py-8 bg-cyan-300 shadow-md rounded-lg"
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="input w-full"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input w-full"
            placeholder="name@gmail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="font-medium text-xl bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 border border-black rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateStudent;


