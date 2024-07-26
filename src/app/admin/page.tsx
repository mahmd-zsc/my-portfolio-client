"use client"
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface IFormInput {
  title: string;
  description: string;
  image: FileList;
  githubLink: string;
  appLink: string;
  skills: string[];
}

interface Skill {
  _id: string;
  name: string;
}

const AdminProjectForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFormInput>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/skills");
        setSkills(response.data);
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
    formData.append("skills", JSON.stringify(data.skills)); // Send skills as JSON string

    try {
      const response = await axios.post("http://localhost:8000/api/projects", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSubmitMessage("Project created successfully!");
      reset(); // Reset the form after successful submission
    } catch (error) {
      setSubmitMessage("Error creating project. Please try again.");
      console.error("Error creating project:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Project</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">
            Title
          </label>
          <input
            id="title"
            {...register("title", { required: "Title is required" })}
            className="w-full p-2 border rounded"
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full p-2 border rounded"
          />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="image" className="block mb-1">
            Project Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            {...register("image")}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="githubLink" className="block mb-1">
            GitHub Link
          </label>
          <input
            id="githubLink"
            {...register("githubLink", {
              required: "GitHub link is required",
              pattern: {
                value: /^https?:\/\/.+/i,
                message: "Invalid URL",
              },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.githubLink && (
            <span className="text-red-500">{errors.githubLink.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="appLink" className="block mb-1">
            App Link
          </label>
          <input
            id="appLink"
            {...register("appLink", {
              required: "App link is required",
              pattern: {
                value: /^https?:\/\/.+/i,
                message: "Invalid URL",
              },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.appLink && (
            <span className="text-red-500">{errors.appLink.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="skills" className="block mb-1">
            Skills
          </label>
          <select
            id="skills"
            multiple
            {...register("skills", { required: "At least one skill is required" })}
            className="w-full p-2 border rounded"
          >
            {skills.map((skill) => (
              <option key={skill._id} value={skill._id}>
                {skill.title}
              </option>
            ))}
          </select>
          {errors.skills && (
            <span className="text-red-500">{errors.skills.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Create Project"}
        </button>
      </form>

      {submitMessage && <p className="mt-4 text-center">{submitMessage}</p>}
    </div>
  );
};

export default AdminProjectForm;