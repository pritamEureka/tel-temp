import { useState, useEffect } from "react";

import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },

    {
      name: "I am",
      href: "#",
      dropdown: [
        { name: "Event Organizer", href: "/login" },
        { name: "Venue Manager", href: "/register" },
      ],
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 border-b-2 border-transparent ${
        isScrolled
          ? "bg-transparent backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-5 "
      }`}
      style={{
        borderImage: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899) 1",
      }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="relative z-10">
            <div className="flex items-center text-5xl text-white font-bold uppercase tracking-wider">
              {/* <img 
                src="/logo/logo.svg" 
                alt="Stax Logo" 
                width={140} 
                height={40}
                className="h-auto"
              /> */}
              Event
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      className="text-white hover:text-primary transition-all duration-300 font-medium px-5 py-2 relative group flex items-center"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name
                        )
                      }
                    >
                      {link.name}
                      <FiChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:text-primary" />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-[#13042a]/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 transition-all duration-300 ${
                        activeDropdown === link.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="py-2">
                        {link.dropdown.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            className="block px-4 py-2 text-white hover:bg-white/5 hover:text-primary transition-colors duration-300"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="text-white hover:text-primary transition-all duration-300 font-medium px-5 py-2 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )}
              </div>
            ))}
          
          </nav>
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4">
                <button className="text-white font-bold uppercase hover:text-primary transition-all duration-300 px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 tracking-widest">
                  Book Artist
                </button>
                <button className="text-white font-bold uppercase hover:text-primary transition-all duration-300 px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 tracking-widest">
                  Login / Sign Up
                </button>
              </div>

              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center"
                >
                  {isOpen ? (
                    <FiX className="h-6 w-6" />
                  ) : (
                    <FiMenu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden bg-[#13042a]/95 backdrop-blur-md transition-all duration-300 ${
          isOpen ? "max-h-screen py-5" : "max-h-0 py-0"
        }`}
      >
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div>
                  <button
                    className="flex items-center justify-between w-full text-white hover:text-primary transition-colors duration-300 py-2 border-b border-white/10"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.name ? null : link.name
                      )
                    }
                  >
                    <span>{link.name}</span>
                    <FiChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                      activeDropdown === link.name
                        ? "max-h-96 py-2"
                        : "max-h-0 py-0"
                    }`}
                  >
                    {link.dropdown.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="block text-gray-300 hover:text-primary transition-colors duration-300 py-1"
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsOpen(false);
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  className="block text-white hover:text-primary transition-colors duration-300 py-2 border-b border-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
          <div className="pt-2 space-y-2">
            <button className="w-full text-white hover:text-primary transition-colors duration-300 py-2 border border-white/20 rounded-lg">
              Industry Portal
            </button>
            <button className="w-full text-white hover:text-white transition-colors duration-300 py-2 bg-primary rounded-lg hover:bg-primary/80">
              Login / Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
