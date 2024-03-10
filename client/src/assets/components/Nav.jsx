import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-slate-400 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-male-student-icon-png-image_4252845.jpg"
            className="h-10"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Y-SCHOOL
          </span>
        </div>
        <div>
          <Link to="/createStudent">
            <button
              className="font-medium bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 border border-white rounded"
            >
              Add Students
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
