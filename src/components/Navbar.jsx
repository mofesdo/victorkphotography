import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { mainLinks, projectLinks } from "../data/navLinks";

const navLinkClass = ({ isActive }) =>
  `transition-colors hover:opacity-70 ${
    isActive ? "font-medium" : "font-normal"
  }`;

export default function Navbar() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <header className="fixed bottom-0 left-0 w-full border-t border-neutral-200 bg-white/90 backdrop-blur z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <Link to="/" className="text-lg font-medium tracking-wide">
          Victor Koroma
        </Link>

        <nav className="flex items-center gap-6 text-sm relative">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 transition-colors hover:opacity-70"
              onClick={() => setIsProjectsOpen((prev) => !prev)}
            >
              <span>Projects</span>
              <span className="text-xs">▾</span>
            </button>

            {isProjectsOpen && (
              <div className="absolute left-0 top-full z-20 mt-2 w-72 border border-neutral-200 bg-white py-2 shadow-sm">
                {projectLinks.map((project) => (
                  <Link
                    key={project.slug}
                    to={`/projects/${project.slug}`}
                    className="block px-4 py-2 text-sm hover:bg-neutral-100"
                  >
                    {project.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
