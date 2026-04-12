import { useEffect, useState } from "react";
import axios from "axios";

export default function Project() {
  const [projects, setProjects] = useState([]);

  // 🔥 Manual projects (fallback)
  const demoProjects = [
    {
      _id: 1,
      title: "Mini YouTube",
      desc: "Video sharing app with upload, like, and comment system.",
      live: "#",
      github: "#",
    },
    {
      _id: 2,
      title: "TikTok Clone",
      desc: "Short video platform with scrolling feed and likes.",
      live: "#",
      github: "#",
    },
    {
      _id: 3,
      title: "Portfolio Website",
      desc: "Personal portfolio built with React, Node, and MongoDB.",
      live: "#",
      github: "#",
    },
  ];

  useEffect(() => {
    // axios
    //   .get("http://localhost:5000/projects")
    //   .then((res) => {
    //     console.log(res.data);

    //     // ✅ If API has data → use it
    //     if (Array.isArray(res.data) && res.data.length > 0) {
    //       setProjects(res.data);
    //     } else {
    //       setProjects(demoProjects);
    //     }
    //   })
      // .catch((err) => {
      //   console.log(err);
        setProjects(demoProjects);
      // });
  }, []);

  return (
    <section id="projects" className="px-5 py-10 bg-black text-white">
      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-gray-900 rounded overflow-hidden hover:scale-105 transition"
          >
            {/* IMAGE */}
            <div className="h-40 bg-gray-800 flex items-center justify-center text-gray-500">
              No Image
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{p.desc}</p>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-4">
                <a
                  href={p.live}
                  target="_blank"
                  className="text-blue-400 hover:underline text-sm"
                >
                  Live
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  className="text-blue-400 hover:underline text-sm"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
