import { useEffect, useState } from "react";
import axios from "axios";

export default function Project() {
  const [projects, setProjects] = useState([]);

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
    axios
      .get("http://localhost:5000/projects")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setProjects(res.data);
        } else {
          setProjects(demoProjects);
        }
      })
      .catch(() => {
        setProjects(demoProjects);
      });
  }, []);

  return (
    <section className="px-5 py-10 bg-black text-white">
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div key={p._id} className="bg-gray-900 p-4 rounded">
            <h3 className="font-bold">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}