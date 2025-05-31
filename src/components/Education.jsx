import React from "react";
import { GraduationCap } from "lucide-react";

const Education = ({ education }) => {
  return (
    <section
      id="education"
      className="min-h-screen py-20 bg-gray-800 bg-opacity-50"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Academic Background
        </h2>

        <div className="bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <GraduationCap className="w-12 h-12 text-purple-400 mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-2">
            {education.degree}
          </h3>
          <p className="text-lg text-gray-300 mb-1">🎓 {education.year}</p>
          {/* <p className="text-sm text-gray-400">🏫 {education.institution}</p> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
