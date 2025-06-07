import React, { useState } from "react";
import {
  Mail,
  Send,
  Github,
  ExternalLink,
  MessageCircle,
  User,
  FileText,
  Rocket,
  Code,
  Database,
  Globe,
} from "lucide-react";

const Contact = ({ contact }) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("https://formspree.io/f/xyzwrvlp", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(contactForm),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setContactForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-cyan-400">
          Let's Connect & Create Something Amazing!
        </h2>
        <p className="text-center text-gray-300 mb-16 text-lg">
           Drop me a message or connect on GitHub!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400 border-opacity-30">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">
                Send Me a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-cyan-400" />
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-cyan-400" />
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="relative">
                <FileText className="absolute left-3 top-3 w-5 h-5 text-cyan-400" />
                <input
                  type="text"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="relative">
                <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-cyan-400" />
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  required
                  rows="6"
                  className="w-full pl-12 pr-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="text-green-400 mt-4">
                   Message sent! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-400 mt-4">
                   Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>

          {/* Right: Contact Info & Collaboration */}
          <div className="space-y-8">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-purple-400 border-opacity-30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 text-purple-400 mr-3" />
                Direct Contact
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="bg-cyan-500 bg-opacity-20 p-3 rounded-lg group-hover:bg-opacity-30 transition-all">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Me</div>
                    <div className="text-sm text-gray-400">{contact.email}</div>
                  </div>
                </a>

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="bg-purple-500 bg-opacity-20 p-3 rounded-lg group-hover:bg-opacity-30 transition-all">
                    <Github className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold flex items-center">
                      GitHub Profile <ExternalLink className="w-4 h-4 ml-1" />
                    </div>
                    <div className="text-sm text-gray-400">
                      Check out my repositories
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Collaboration */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-green-400 border-opacity-30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Rocket className="w-6 h-6 text-green-400 mr-3" />
                Let's Collaborate On
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Code,
                    text: "Full-Stack Projects",
                    color: "text-blue-400",
                  },
                  {
                    icon: Database,
                    text: "MERN Stack Apps",
                    color: "text-green-400",
                  },
                  {
                    icon: Globe,
                    text: "Web Development",
                    color: "text-purple-400",
                  },
                  {
                    icon: Rocket,
                    text: "Startup Ideas",
                    color: "text-yellow-400",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-700 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all cursor-pointer group"
                  >
                    <item.icon
                      className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
