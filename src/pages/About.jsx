export default function About() {
  return (
    <section id="about" className="px-5 py-16 bg-gray-700 text-white">
      
      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center mb-10">
        About Me
      </h2>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto text-center text-gray-300 space-y-4">
        <p>
          I'm a passionate developer with a love for creating innovative solutions
          and bringing ideas to life through code. I specialize in building
          responsive and user-friendly web applications.
        </p>

        <p>
          When I'm not coding, I explore new technologies, contribute to projects,
          and improve my skills as a developer.
        </p>
      </div>

      {/* STATS */}
      <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">
        
        <div>
          <h3 className="text-2xl font-bold text-blue-500">15+</h3>
          <p className="text-gray-400">Projects</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-500">2+</h3>
          <p className="text-gray-400">Years Experience</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-500">2</h3>
          <p className="text-gray-400">Internships</p>
        </div>

      </div>
    </section>
  );
}