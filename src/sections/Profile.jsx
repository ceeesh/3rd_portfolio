import React from "react";
import { profileData } from "../data/profileData";

const Profile = () => {
  return (
    <div className="space-y-4">
      {/* Profile Header */}
      <div className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 p-2 md:p-4">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center md:items-start">
          {/* Profile Picture Frame */}
          <div className="border-4 border-l-white border-t-white border-r-gray-700 border-b-gray-700 p-1 bg-gray-300 shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center text-5xl md:text-6xl">
              {profileData.profileEmoji}
            </div>
          </div>

          {/* Bio Section */}
          <div className="flex-1 w-full">
            <h1 className="text-xl md:text-2xl font-bold mb-2 text-blue-900 text-center md:text-left">{profileData.name}</h1>
            <div className="border-2 border-t-gray-600 border-l-gray-600 border-b-gray-100 border-r-gray-100 bg-white p-2 text-xs md:text-sm">
              <p className="mb-2">
                <strong>Title:</strong> {profileData.title}
              </p>
              <p className="mb-2">
                <strong>Location:</strong> {profileData.location}
              </p>
              <p>
                <strong>Status:</strong> {profileData.status}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 p-2 md:p-3">
        <div className="bg-blue-800 text-white px-2 py-1 mb-2 font-bold text-sm md:text-base">
          About Me
        </div>
        <div className="border-2 border-t-gray-600 border-l-gray-600 border-b-gray-100 border-r-gray-100 bg-white p-2 md:p-3 text-xs md:text-sm">
          {profileData.about.map((paragraph, index) => (
            <p key={index} className={index < profileData.about.length - 1 ? "mb-2" : ""}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 p-2 md:p-3">
        <div className="bg-blue-800 text-white px-2 py-1 mb-2 font-bold text-sm md:text-base">
          Technical Skills
        </div>
        <div className="border-2 border-t-gray-600 border-l-gray-600 border-b-gray-100 border-r-gray-100 bg-white p-2 md:p-3 text-xs md:text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {profileData.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <input type="checkbox" checked readOnly className="accent-blue-800" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 p-2 md:p-3">
        <div className="bg-blue-800 text-white px-2 py-1 mb-2 font-bold text-sm md:text-base">
          Contact Information
        </div>
        <div className="border-2 border-t-gray-600 border-l-gray-600 border-b-gray-100 border-r-gray-100 bg-white p-2 md:p-3 text-xs md:text-sm space-y-2">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <span className="font-bold">Email:</span>
            <a href={`mailto:${profileData.contact.email}`} className="text-blue-700 underline hover:text-blue-900 break-all">
              {profileData.contact.email}
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <span className="font-bold">GitHub:</span>
            <a href={profileData.contact.github.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900 break-all">
              {profileData.contact.github.display}
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <span className="font-bold">LinkedIn:</span>
            <a href={profileData.contact.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900 break-all">
              {profileData.contact.linkedin.display}
            </a>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-2 justify-center pt-2">
        <button className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 px-4 md:px-6 py-2 font-bold text-sm md:text-base
          active:border-t-gray-600 active:border-l-gray-600 active:border-b-gray-100 active:border-r-gray-100 hover:bg-gray-200">
          Download CV
        </button>
        <button className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 px-4 md:px-6 py-2 font-bold text-sm md:text-base
          active:border-t-gray-600 active:border-l-gray-600 active:border-b-gray-100 active:border-r-gray-100 hover:bg-gray-200">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Profile;
