const Navbar = ({ scrollToSection, name }) => {
  const sections = [
    "hero",
    "journey",
    "education",
    "skills",
    "projects",
    "story",
    "contact",
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">{name}</h1>
          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white hover:text-cyan-400 transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
