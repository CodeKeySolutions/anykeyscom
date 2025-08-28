import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" className="text-2xl font-bold text-blue-700 tracking-tight">
          Anykeys
        </a>
        <button
          className="md:hidden p-2 rounded hover:bg-blue-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
        <ul className={`flex-col md:flex-row md:flex gap-6 font-medium text-gray-700 absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${open ? "flex top-16" : "hidden md:flex top-[-400px]"}`}>
          <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;