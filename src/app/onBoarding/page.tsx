"use client";

import React, { useState } from "react";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { api } from "../../../convex/_generated/api";

const ReachUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    experience: "",
    github: "",
    twitter: "",
    linkedin: "",
    walletAddress: "",
    portfolio: "",
  });

  const saveFormData = useMutation(api.reachUs.saveFormData); 
  const router = useRouter(); // Initialize the router

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
        experience: formData.experience,
        github: formData.github,
        twitter: formData.twitter,
        linkedin: formData.linkedin,
        walletAddress: formData.walletAddress,
        portfolio: formData.portfolio,
      });

      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        experience: "",
        github: "",
        twitter: "",
        linkedin: "",
        walletAddress: "",
        portfolio: "",
      });

      router.push("/dashboard"); // Redirect after successful submission
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
        backgroundImage: "url('/landingPage/ReachUs.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="py-48 sm:py-0 h-screen justify-center items-center flex">
        <div className="gap-14 flex flex-col sm:flex-row justify-center items-center rounded-xl px-0 sm:px-14 lg:px-0 w-full max-w-4xl">
          <div className="w-auto sm:w-1/2 px-14 sm:px-0 py-20 pr-6 space-y-6 sm:pr-20">
            <div className="mb-20">
              <h2 className="text-4xl font-semibold text-white mb-6">Fill your details</h2>
              <p className="text-xl text-white/70 mb-6">
              Join the network of open-source innovators
              </p>
            </div>
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
                <label className="text-white block mb-2">Experience</label>
                <textarea
                  name="message"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Past-Project/ Experince"
                  rows={2}
                  className="w-full p-3 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  required
                ></textarea>
              </div>
          </div>
          <div className="w-auto sm:w-1/2 px-14 sm:px-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-white block mb-2">Github</label>
                <input
                  type="text"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="github.com/ username"
                  className="w-full p-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div>
                <label className="text-white block mb-2">Twitter / X</label>
                <input
                  type="text"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  placeholder="x.com/ username"
                  className="w-full p-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div>
                <label className="text-white block mb-2">Linkedin</label>
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="www.linkedin.com/in/ username"
                  className="w-full p-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div>
                <label className="text-white block mb-2">Portfolio/ Website</label>
                <input
                  type="text"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="your link"
                  className="w-full p-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div>
                <label className="text-white block mb-2">walletAddress address</label>
                <input
                  type="text"
                  name="walletAddress"
                  value={formData.walletAddress}
                  onChange={handleChange}
                  placeholder="0x"
                  className="w-full p-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black p-2 rounded-md font-semibold hover:bg-gray-300 transition"
              >
                {" Continue "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
