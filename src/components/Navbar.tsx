"use client";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Scroll Target */}
      <div id="top"></div>

      <nav className="an-navbar">
        <div className="container-width an-navbar-container">
          {/* Logo */}
          <a href="#top" className="an-navbar-logo">
            Anees<span className="ext">.dev</span>
          </a>

          {/* Desktop Menu */}
          <ul className="an-navbar-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="an-nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Hire Button */}
          <a
            href="mailto:anees2217117@gmail.com"
            className="an-hire-btn hidden md:flex"
          >
            Hire Me
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="an-mobile-btn md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="an-mobile-menu md:hidden">
            <div className="an-mobile-links">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="an-mobile-link"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <a
                href="mailto:anees2217117@gmail.com"
                className="an-hire-btn an-mobile-hire"
              >
                Hire Me
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
