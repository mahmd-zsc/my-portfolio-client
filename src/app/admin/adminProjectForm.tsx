"use client";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import Select from "react-select";

interface IFormInput {
  title: string;
  description: string;
  image: FileList;
  githubLink: string;
  appLink: string;
  skills: { value: string; label: string }[];
}

interface Skill {
  _id: string;
  title: string;
}

const AdminProjectForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<IFormInput>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [skills, setSkills] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-topaz-three.vercel.app/api/skills"
        );
        const skillOptions = response.data.map((skill: Skill) => ({
          value: skill._id,
          label: skill.title,
        }));
        setSkills(skillOptions);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchSkills();
  }, []);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }
    formData.append("githubLink", data.githubLink);
    formData.append("appLink", data.appLink);

    data.skills.forEach((skill, index) => {
      formData.append(`skills[${index}]`, skill.value);
    });

    try {
      const response = await axios.post(
        "https://portfolio-backend-topaz-three.vercel.app/api/projects",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSubmitMessage("Project created successfully!");
      reset();
    } catch (error) {
      setSubmitMessage("Error creating project. Please try again.");
      console.error("Error creating project:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-yellow-400">
          Create New Project
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Title
            </label>
            <input
              id="title"
              {...register("title", { required: "Title is required" })}
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
            {errors.title && (
              <span className="text-red-400 text-sm mt-1">
                {errors.title.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              rows={4}
            />
            {errors.description && (
              <span className="text-red-400 text-sm mt-1">
                {errors.description.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Project Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register("image")}
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-yellow-600 file:text-white hover:file:bg-yellow-700"
            />
          </div>

          <div>
            <label
              htmlFor="githubLink"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              GitHub Link
            </label>
            <input
              id="githubLink"
              {...register("githubLink", {
                required: "GitHub link is required",
                pattern: { value: /^https?:\/\/.+/i, message: "Invalid URL" },
              })}
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
            {errors.githubLink && (
              <span className="text-red-400 text-sm mt-1">
                {errors.githubLink.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="appLink"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              App Link
            </label>
            <input
              id="appLink"
              {...register("appLink", {
                required: "App link is required",
                pattern: { value: /^https?:\/\/.+/i, message: "Invalid URL" },
              })}
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
            {errors.appLink && (
              <span className="text-red-400 text-sm mt-1">
                {errors.appLink.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Skills
            </label>
            <Select
              id="skills"
              isMulti
              options={skills}
              className="basic-multi-select text-black "
              classNamePrefix="select"
              onChange={(selected) => {
                setValue(
                  "skills",
                  selected as { value: string; label: string }[]
                );
              }}
            />
            {errors.skills && (
              <span className="text-red-400 text-sm mt-1">
                {errors.skills.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isSubmitting ? "Submitting..." : "Create Project"}
          </button>
        </form>

        {submitMessage && (
          <p className="mt-6 text-center text-lg font-medium text-yellow-400">
            {submitMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminProjectForm;
