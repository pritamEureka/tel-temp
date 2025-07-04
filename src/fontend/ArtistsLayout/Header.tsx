import { useState, useEffect } from "react";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: "HOME", href: "/" },
    { name: "TALENT", href: "/talent" },
    { name: "BOOKING", href: "/booking" },
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
            <div className="flex items-center space-x-2">
           
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
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
               <a
                    href={link.href}
                    className="text-white hover:text-primary transition-all duration-300 font-medium px-5 py-2 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
              </div>
            ))}
          </nav>
           
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden bg-white/95 backdrop-blur-md transition-all duration-300 border-t border-gray-200 ${
          isOpen ? "max-h-screen py-5" : "max-h-0 py-0"
        }`}
      >
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-primary transition-colors duration-300 py-2 border-b border-gray-100 text-sm tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 space-y-2">
            <button className="w-full text-gray-700 hover:text-primary transition-colors duration-300 py-2 border border-gray-200 rounded-lg text-sm">
              Contact
            </button>
            <button className="w-full text-white bg-primary hover:bg-primary/80 transition-colors duration-300 py-2 rounded-lg text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
