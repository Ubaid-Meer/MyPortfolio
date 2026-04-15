export default function Skill() {
  const skills = [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind","Boostrap"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "Ejs","MongoDB", "SQL","Rest API"],
    },
    {
      title: "Tools",
      items: ["Git", "Docker","Ubuntu", "Postman", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="px-5 py-16 bg-gray-800 text-white">
      
      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Skills & Technologies
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        
        {skills.map((category, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}