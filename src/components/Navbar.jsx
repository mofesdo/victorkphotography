import { Link, NavLink } from "react-router-dom";

const navLinkClasses = ({ isActive }) =>
  `transition hover:opacity-70 ${isActive ? "font-semibold" : "font-normal"}`;

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="text-xl font-semibold tracking-wide">
          Vision Studio
        </Link>

        <nav className="flex items-center gap-6 text-sm md:text-base">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/gallery" className={navLinkClasses}>
            Gallery
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}