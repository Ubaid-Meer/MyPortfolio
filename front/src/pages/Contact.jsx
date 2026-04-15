import { FaLinkedin,FaGithub  } from 'react-icons/fa'
import { MdMarkEmailRead } from "react-icons/md";


export default function Contact() {
  return (
    <section id="contact" className="px-5 py-16 bg-gray-8 text-white">
      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>

      <p className="text-center text-gray-400 max-w-xl mx-auto mb-10">
        I'm always open to discussing new projects, creative ideas, or
        opportunities.
      </p>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE - INFO */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-2xl"><MdMarkEmailRead className='text-3xl'/></span>
            <div>
              <h3 className="font-bold">Email</h3>
              <p className="text-gray-400">ubaid13733@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl"><FaLinkedin className='text-3xl'/></span>
            <div>
              <a href="https://www.linkedin.com/in/ubaid-khan-42154a31b/">
                {" "}
                
                <h3 className="font-bold"> LinkedIn</h3>
              </a>

              <p className="text-gray-400">
                <a href="https://www.linkedin.com/in/ubaid-khan-42154a31b/">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl"><FaGithub className='text-3xl'/></span>
            <div>
              <a href="https://github.com/Ubaid-Meer"><h3 className="font-bold">GitHub</h3></a>
              <p className="text-gray-400">github.com/Ubaid-Meer</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 px-5 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
