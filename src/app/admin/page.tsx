"use client";
import React, { useState } from "react";
import AdminProjectForm from "./adminProjectForm";
import PasswordPage from "./passwordPage";
import CreateSkillForm from "./createSkillForm";

function Page() {
  let [isAdmin, setIsAdmin] = useState(false);
  let [create, setCreate] = useState("project");
  return (
    <div className="cursor-default min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {isAdmin ? (
        <>
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex justify-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg">
              <button
                onClick={() => setCreate("project")}
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  create === "project"
                    ? "bg-yellow-500 text-gray-900"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setCreate("skill")}
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  create === "skill"
                    ? "bg-yellow-500 text-gray-900"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Skills
              </button>
            </div>
          </div>
          {create === "project" ? <AdminProjectForm /> : <CreateSkillForm />}
        </>
      ) : (
        <PasswordPage setIsAdmin={setIsAdmin} />
      )}
    </div>
  );
}

export default Page;
