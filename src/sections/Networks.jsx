import React from "react";
import { profileData } from "../data/profileData";

const Networks = () => {
  const contacts = [
    {
      title: "Email",
      icon: "📧",
      value: profileData.contact.email,
      link: `mailto:${profileData.contact.email}`,
      description: "Send me an email"
    },
    {
      title: "GitHub",
      icon: "💻",
      value: profileData.contact.github.display,
      link: profileData.contact.github.url,
      description: "Check out my code"
    },
    {
      title: "LinkedIn",
      icon: "💼",
      value: profileData.contact.linkedin.display,
      link: profileData.contact.linkedin.url,
      description: "Let's connect professionally"
    }
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 p-2 md:p-3">
        <div className="bg-blue-800 text-white px-2 py-1 font-bold text-sm md:text-base">
          Contact Networks
        </div>
      </div>

      {/* Contact Cards */}
      {contacts.map((contact, index) => (
        <div key={index} className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 p-2 md:p-3">
          <div className="flex items-start gap-3">
            {/* Icon */}
            <div className="border-4 border-l-white border-t-white border-r-gray-700 border-b-gray-700 p-2 bg-gray-300 shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center text-2xl">
                {contact.icon}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-blue-900 text-sm md:text-base mb-1">
                {contact.title}
              </h3>
              <div className="border-2 border-t-gray-600 border-l-gray-600 border-b-gray-100 border-r-gray-100 bg-white p-2 text-xs md:text-sm">
                <p className="text-gray-600 mb-2">{contact.description}</p>
                <a
                  href={contact.link}
                  target={contact.title !== "Email" ? "_blank" : undefined}
                  rel={contact.title !== "Email" ? "noopener noreferrer" : undefined}
                  className="text-blue-700 underline hover:text-blue-900 break-all block"
                >
                  {contact.value}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Call to Action */}
      <div className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 p-3 md:p-4">
        <div className="border-2 border-t-gray-600 border-l-gray-600 border-b-gray-100 border-r-gray-100 bg-white p-3 md:p-4 text-center text-xs md:text-sm">
          <p className="font-bold text-blue-900 mb-2">Let's Work Together!</p>
          <p className="text-gray-700">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Networks;
