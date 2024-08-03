"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface IFormInput {
  title: string;
  color: string;
  link: string;
}

const CreateSkillForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await axios.post(
        "https://portfolio-backend-sable-delta.vercel.app/api/skills",
        data
      );
      setSubmitMessage("Skill created successfully!");
      reset();
    } catch (error) {
      setSubmitMessage("Error creating skill. Please try again.");
      console.error("Error creating skill:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-yellow-400">
          Create New Skill
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
              htmlFor="color"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Color (Hex code)
            </label>
            <input
              id="color"
              type="text"
              placeholder="#000000"
              {...register("color", {
                required: "Color is required",
                pattern: {
                  value: /^#[0-9A-Fa-f]{6}$/,
                  message: "Invalid hex color code",
                },
              })}
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
            {errors.color && (
              <span className="text-red-400 text-sm mt-1">
                {errors.color.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="link"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Link
            </label>
            <input
              id="link"
              {...register("link", {
                required: "Link is required",
                pattern: { value: /^https?:\/\/.+/i, message: "Invalid URL" },
              })}
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
            {errors.link && (
              <span className="text-red-400 text-sm mt-1">
                {errors.link.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isSubmitting ? "Submitting..." : "Create Skill"}
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

export default CreateSkillForm;
