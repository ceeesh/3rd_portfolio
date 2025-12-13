import React from "react";
import { resumeData } from "../data/resumeData";
import resumePDF from "../assets/images/CeeJay Malacas Resume 2025.pdf";

const Resume = () => {
  const handleDownloadPDF = () => {
    window.open(resumePDF, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="space-y-4">
      {/* Experience Section */}
      <div className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 p-2 md:p-3">
        <div className="bg-blue-800 text-white px-2 py-1 mb-2 font-bold text-sm md:text-base">
          Work Experience
        </div>
        <div className="border-2 border-t-gray-600 border-l-gray-600 border-b-gray-100 border-r-gray-100 bg-white p-2 md:p-3 text-xs md:text-sm space-y-4">
          {resumeData.experience.map((job, index) => (
            <div key={index} className={index < resumeData.experience.length - 1 ? "pb-4 border-b border-gray-300" : ""}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="font-bold text-blue-900">{job.title}</h3>
                <span className="text-gray-600 text-xs">{job.period}</span>
              </div>
              <p className="font-semibold mb-2">{job.company}</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                {job.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 p-2 md:p-3">
        <div className="bg-blue-800 text-white px-2 py-1 mb-2 font-bold text-sm md:text-base">
          Education
        </div>
        <div className="border-2 border-t-gray-600 border-l-gray-600 border-b-gray-100 border-r-gray-100 bg-white p-2 md:p-3 text-xs md:text-sm">
          {resumeData.education.map((edu, index) => (
            <div key={index} className={index < resumeData.education.length - 1 ? "mb-4 pb-4 border-b border-gray-300" : ""}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="font-bold text-blue-900">{edu.degree}</h3>
                <span className="text-gray-600 text-xs">{edu.period}</span>
              </div>
              <p className="font-semibold mb-2">{edu.institution}</p>
              {edu.achievements && (
                <ul className="list-disc list-inside space-y-1 ml-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 p-2 md:p-3">
        <div className="bg-blue-800 text-white px-2 py-1 mb-2 font-bold text-sm md:text-base">
          Certifications
        </div>
        <div className="border-2 border-t-gray-600 border-l-gray-600 border-b-gray-100 border-r-gray-100 bg-white p-2 md:p-3 text-xs md:text-sm">
          <div className="grid grid-cols-1 gap-2">
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <input type="checkbox" checked readOnly className="accent-blue-800" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-2 justify-center pt-2">
        <button
          onClick={handleDownloadPDF}
          className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 px-4 md:px-6 py-2 font-bold text-sm md:text-base
          active:border-t-gray-600 active:border-l-gray-600 active:border-b-gray-100 active:border-r-gray-100 hover:bg-gray-200">
          Open PDF
        </button>
        <button
          onClick={handlePrint}
          className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 px-4 md:px-6 py-2 font-bold text-sm md:text-base
          active:border-t-gray-600 active:border-l-gray-600 active:border-b-gray-100 active:border-r-gray-100 hover:bg-gray-200">
          Print Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
