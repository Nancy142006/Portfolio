import React, { useState } from "react";
import { Terminal, Play } from "lucide-react";

const Story = ({ currentFocus }) => {
  const [currentStory, setCurrentStory] = useState(0);

  return (
    <section
      id="story"
      className="min-h-screen py-20 bg-gray-900 bg-opacity-50"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
           Developer Story
        </h2>

        <div className="bg-gray-900 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Terminal className="w-6 h-6 text-green-400 mr-3" />
            <span className="text-green-400 font-mono">
              nancy@developer:~/story$
            </span>
          </div>

          <div className="space-y-4 mb-8">
            <button
              onClick={() => setCurrentStory(0)}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded transition-colors w-full text-left"
            >
              <Play className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-cyan-400">
                runStory('currentFocus')
              </span>
            </button>

            <button
              onClick={() => setCurrentStory(1)}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded transition-colors w-full text-left"
            >
              <Play className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-cyan-400">
                runStory('careerGoals')
              </span>
            </button>

            <button
              onClick={() => setCurrentStory(2)}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded transition-colors w-full text-left"
            >
              <Play className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-cyan-400">
                runStory('currentLearning')
              </span>
            </button>
          </div>

          <div className="bg-gray-800 rounded p-4 min-h-48">
            <div className="text-green-400 font-mono text-sm">
              {currentStory === 0 && (
                <div>
                  <p className="mb-2">📚 Currently Learning:</p>
                  {currentFocus.learning.map((item, index) => (
                    <p key={index} className="ml-4 mb-1">
                      • {item}
                    </p>
                  ))}
                  <p className="mt-4">🎯 Goal: {currentFocus.goals}</p>
                </div>
              )}

              {currentStory === 1 && (
                <div>
                  <p className="mb-2">🚀 Career Aspirations:</p>
                  <p className="ml-4 mb-4">{currentFocus.interests}</p>
                  <p className="mb-2">🔍 Currently Seeking:</p>
                  <p className="ml-4">{currentFocus.seeking}</p>
                </div>
              )}

              {currentStory === 2 && (
                <div>
                  <p className="mb-2">🌱 Learning Journey:</p>
                  <p className="ml-4 mb-4">
                    Constantly expanding my MERN stack expertise
                  </p>
                  <p className="mb-2">💡 Recent Focus Areas:</p>
                  {currentFocus.learning.map((item, index) => (
                    <p key={index} className="ml-4 mb-1">
                      ✨ {item}
                    </p>
                  ))}
                </div>
              )}

              <span className="animate-pulse text-white">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
