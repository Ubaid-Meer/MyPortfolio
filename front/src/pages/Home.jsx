import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="bg-gray-800 text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-5">
         {/* IMAGE */}
        <img
          src="/myPic2.jpeg"
          alt="profile"
          className="w-40 h-40 object-cover rounded-full mt-6 border-4 border-gray-700"
        />
        <p className="text-gray-400">Hi, I'm</p>

        <h1 className="text-4xl md:text-4xl font-bold mt-2">
          Ubaid Ullah
        </h1>

        <p className="mt-3 text-lg text-gray-300">
          Full Stack Developer & Creative Problem Solver
        </p>

        <p className="mt-2 text-gray-400 max-w-xl">
          I build beautiful, functional web applications that deliver exceptional user experiences.
        </p>

       

        {/* BUTTONS */}
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="bg-gray-700 px-5 py-2 rounded-3xl border border-white hover:bg-gray-800"
          >
            🖊 View My Work
          </a>

          <a
            href="#contact"
            className="bg-gray-700 border border-white px-5 py-2 rounded-3xl hover:bg-gray-800"
          >
           📞 Get In Touch
          </a>
        </div>

        {/* SCROLL */}
        <p className="mt-10 text-xl text-cyan-400 font-bold animate-bounce">
          ↓ Scroll Down
        </p>
      </section>

      {/* OTHER SECTIONS */}
      
      <About />

      <Skill />

      {/* PROJECT SECTION */}
      <section id="projects" className="px-5 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Main Projects
        </h2>

        <Project />
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 py-10">
        <Contact />
      </section>

      {/* FOOTER */}
      <footer className="text-center py-5 bg-black border-t  border-gray-800 text-gray-400">
        <p>© 2024 Ubaid Ullah. All rights reserved.</p>
        <p className="mt-1">Built with ❤️ using React, Tailwind & Node.js</p>
      </footer>
    </div>
  );
}