"use client";

import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

const options = ["Development", "Design", "Branding", "Other"];

const ReachUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
    selectedOption: "Development",
  });

  const saveFormData = useMutation(api.reachUs.saveFormData); // Fix: Use correct path

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await saveFormData({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        selectedOption: formData.selectedOption,
      }); // Pass the form data explicitly
      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
        selectedOption: "Development",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message.");
    }
  };


  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundImage: "url('/assets/ReachUs.svg')",
        backgroundSize: "cover",
      }}
    >
      <div className="py-48 justify-center items-center flex bg-[#121212]">
        <div className="gap-14 flex flex-col sm:flex-row justify-center items-center rounded-xl px-0 sm:px-14 lg:px-0 w-full max-w-4xl">
          <div className="w-auto sm:w-1/2 px-14 sm:px-0 py-20 pr-6 sm:pr-20">
            <h2 className="text-4xl font-semibold text-white mb-6">Reach us out</h2>
            <p className="text-xl text-white/70 mb-6">
              Have an idea, a project, or just want to collaborate?
            </p>
            <p className="text-xl text-white/60">
             {" We're here to turn possibilities into reality. Let's explore how we can engineer your vision into something extraordinary."}
            </p>
          </div>
          <div className="w-auto sm:w-1/2 px-14 sm:px-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white block mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full p-2 text-white bg-white/15 rounded-md focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="text-white block mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full p-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-white block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@name.com"
                  className="w-full p-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  required
                />
              </div>
              <div>
                <label className="text-white block mb-2">Company / Organization</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full p-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div className="w-full">
                <label className="text-white block mb-2">What Can We Help You With?</label>
                <div className="space-y-2">
                   <select 
                      name="selectedOption" 
                      value={formData.selectedOption} 
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    >
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                </div>
              </div>
              <div>
                <label className="text-white block mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={2}
                  className="w-full p-3 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black p-2 rounded-md font-semibold hover:bg-gray-300 transition"
              >
                {" Let's Talk "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;

