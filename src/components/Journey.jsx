const Journey = ({ journeyData }) => {
  return (
    <section id="journey" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
          My Coding Journey
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400"></div>

          {journeyData.map((milestone, index) => (
            <div
              key={index}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer group">
                  <div className="text-cyan-400 font-semibold">
                    {milestone.month} {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-300 mb-3">{milestone.description}</p>
                  <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {milestone.tech}
                  </span>
                </div>
              </div>

              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 z-10"></div>
              </div>

              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
