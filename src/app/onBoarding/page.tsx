"use client";

import React, { useState } from "react";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
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

  const saveFormData = useMutation(api.reachUs.saveFormData); // Ensure API path is correct
  const router = useRouter();

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const {
        firstName, lastName, email, experience, github,
        twitter, linkedin, walletAddress, portfolio
      } = formData;
  
      await saveFormData({
        firstName, lastName, email, experience, github,
        twitter, linkedin, walletAddress, portfolio
      });
  
      setFormData({
        firstName: "", lastName: "", email: "", experience: "",
        github: "", twitter: "", linkedin: "", walletAddress: "", portfolio: ""
      });
  
      sessionStorage.setItem("showSuccessToast", "true"); // ✅ Store flag
      router.push("/"); // Redirect to landing page
  
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
      <div className="py-48 sm:py-0 sm:h-screen h-auto justify-center items-center flex">
        <div className="gap-14 flex flex-col sm:flex-row justify-center items-center rounded-xl px-0 sm:px-14 lg:px-0 w-full max-w-4xl">
          <div className="w-auto sm:w-1/2 px-14 sm:px-0 py-20 pr-6 space-y-6 sm:pr-20">
            <div className="mb-16 flex flex-col">
              <i className="text-4xl font-semibold text-white mb-6">Fill your details</i>
              <i className="text-xl text-white/70 mb-6">
                Join the network of open-source innovators
              </i>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-white block mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full p-2 text-white  rounded-md bg-gradient-to-r from-[rgba(70,48,104)] to-[rgba(163,103,228)] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-white block mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full p-2 bg-gradient-to-r from-[rgba(70,48,104)] to-[rgba(163,103,228)] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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
                onChange={handleInputChange}
                placeholder="name@name.com"
                className="w-full p-2 bg-gradient-to-r from-[rgba(70,48,104)] to-[rgba(163,103,228)] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>
            <div>
              <label className="text-white block mb-2">Experience</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Past-Project/ Experience"
                rows={2}
                className="w-full p-3 bg-gradient-to-r from-[rgba(70,48,104)] to-[rgba(163,103,228)] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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
                  onChange={handleInputChange}
                  placeholder="github.com/ username"
                  className="w-full p-2 bg-gradient-to-r from-[rgba(96,51,94)] to-[rgba(170,65,87)]   text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div>
                <label className="text-white block mb-2">Twitter / X</label>
                <input
                  type="text"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleInputChange}
                  placeholder="x.com/ username"
                  className="w-full p-2 bg-gradient-to-r from-[rgba(96,51,94)] to-[rgba(170,65,87)]   text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div>
                <label className="text-white block mb-2">Linkedin</label>
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="www.linkedin.com/in/ username"
                  className="w-full p-2 bg-gradient-to-r from-[rgba(96,51,94)] to-[rgba(170,65,87)]   text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div>
                <label className="text-white block mb-2">Portfolio/ Website</label>
                <input
                  type="text"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="your link"
                  className="w-full p-2 bg-gradient-to-r from-[rgba(96,51,94)] to-[rgba(170,65,87)]   text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div>
                <label className="text-white block mb-2">Wallet Address</label>
                <input
                  type="text"
                  name="walletAddress"
                  value={formData.walletAddress}
                  onChange={handleInputChange}
                  placeholder="0x"
                  className="w-full p-2 text-white bg-gradient-to-r from-[rgba(96,51,94)] to-[rgba(170,65,87)]  rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-opacity-20 border-2 border-gray-600 text-white p-2 rounded-full font-semibold hover:bg-gray-500 hover:bg-opacity-50 transition"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default ReachUs;