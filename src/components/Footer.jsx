const Footer = ({ name, title }) => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400 mb-4">
          Built with React, Three.js, D3.js, and passion for creating amazing
          web experiences
        </p>
        <p className="text-cyan-400">
          {name} • {title} • Ready to build amazing things together!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
