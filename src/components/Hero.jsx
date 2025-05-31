import React, { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import * as THREE from "three";

const Hero = ({ personalData, scrollToSection }) => {
  const [typedText, setTypedText] = useState("");
  const constellationRef = useRef(null);

  // Typing animation
  useEffect(() => {
    const codeSteps = [
      "c.onst name = 'Nancy';",
      ".const loves = ['coding', 'design', 'coffee'];",
      ".const goal = 'Build delightful web experiences!';",
      ".console.table({ name, loves, goal });",
    ];

    let stepIndex = 0;
    let charIndex = 0;

    const typeCode = () => {
      if (stepIndex < codeSteps.length) {
        if (charIndex < codeSteps[stepIndex].length) {
          setTypedText((prev) => prev + codeSteps[stepIndex][charIndex]);
          charIndex++;
          setTimeout(typeCode, 50);
        } else {
          setTypedText((prev) => prev + "\n");
          stepIndex++;
          charIndex = 0;
          setTimeout(typeCode, 500);
        }
      }
    };

    const timer = setTimeout(typeCode, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Three.js animated stars
  useEffect(() => {
    if (!constellationRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    constellationRef.current.appendChild(renderer.domElement);

    const starGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const stars = [];

    personalData.skills.frontend.forEach((skill, i) => {
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0x64ffda });
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.set(Math.cos(i * 0.5) * 3, Math.sin(i * 0.5) * 3, 0);
      scene.add(star);
      stars.push(star);
    });

    camera.position.z = 8;

    const animate = () => {
      requestAnimationFrame(animate);
      stars.forEach((star) => {
        star.rotation.x += 0.01;
        star.rotation.y += 0.01;
      });
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (constellationRef.current && renderer.domElement) {
        constellationRef.current.removeChild(renderer.domElement);
      }
    };
  }, [personalData.skills.frontend]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div ref={constellationRef} className="absolute inset-0 opacity-30" />

      <div className="max-w-4xl mx-auto px-4 text-center z-10">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {personalData.name}
          </h1>
          <h2 className="text-2xl text-gray-300 mb-2">{personalData.title}</h2>
          <p className="text-lg text-cyan-400">{personalData.status}</p>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="ml-4 text-gray-400 text-sm">
              nancy-developer.js
            </span>
          </div>
          <pre className="text-left text-green-400 font-mono text-sm leading-relaxed">
            {typedText}
            <span className="animate-pulse">|</span>
          </pre>
        </div>

        <button
          onClick={() => scrollToSection("journey")}
          className="inline-flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition-colors"
        >
          <span>Explore My Journey</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
