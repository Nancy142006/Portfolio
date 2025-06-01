import React, { useState } from "react";
import { GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Education = ({ education }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]); 
    }
  };

  return (
    <section
      id="education"
      className="min-h-screen py-20 bg-gray-800 bg-opacity-50"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Academic Background
        </h2>

        <div className="space-y-4">
          {education.map((edu, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className={`bg-gray-900 rounded-xl shadow-md border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 overflow-hidden`}
              >
                <button
                  className="w-full flex items-center justify-between p-4 text-left text-white font-semibold text-lg bg-gray-800 hover:bg-gray-700 transition"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                    {edu.degree}
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-cyan-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-300" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 pt-2 text-gray-300 space-y-1"
                    >
                      <p>🎓 {edu.year}</p>
                      <p>🏫 {edu.institution}</p>
                      <p>📊 {edu.CGPA}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
