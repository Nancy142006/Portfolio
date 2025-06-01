import React from "react";
import photo from "../assets/photo.jpg"
const SkillsBubble = ({ skills}) => {
  const allSkills = Object.values(skills).flat();

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-[11rem] h-[11rem] rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={photo}
            alt="photo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      {allSkills.map((skill, index) => (
        <div
          key={index}
          className="absolute bg-purple-600 text-white text-md px-[0.5rem] py-[0.6rem] rounded-full shadow-md"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          {skill}
        </div>
      ))}
    </section>
  );
};

export default SkillsBubble;
