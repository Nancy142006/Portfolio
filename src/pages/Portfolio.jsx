import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Education from "../components/Education";
import SkillsBubble from "../components/SkillsBubble";
import Projects from "../components/Projects";
import Story from "../components/Story";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import personalData from "../data/personalData";

const Portfolio = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navbar scrollToSection={scrollToSection} name={personalData.name} />
      <Hero personalData={personalData} scrollToSection={scrollToSection} />
      <Journey journeyData={personalData.codingJourney} />
      <Education education={personalData.education} />
      <SkillsBubble skills={personalData.skills} name={personalData.name} />
      <Projects projects={personalData.projects} />
      <Story currentFocus={personalData.currentFocus} />
      <Contact contact={personalData.contact} />
      <Footer name={personalData.name} title={personalData.title} />
    </div>
  );
};

export default Portfolio;
