import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className=" flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      
      {/* LOGO */}
      <h2 className="text-xl font-bold">Ubaid-Meer</h2>

      {/* LINKS */}
      <div className="flex gap-6 text-gray-300">
        
        <Link to="/" className="hover:text-white">
          Home
        </Link>
        
        <Link to="/projects" className="hover:text-white">
          Projects
        </Link>

        <a
          href="https://github.com/Ubaid-Meer"
          target="_blank"
          className="hover:text-white"
        >
          <FaGithub className="text-2xl" />
        </a>

      </div>
    </nav>
  );
}