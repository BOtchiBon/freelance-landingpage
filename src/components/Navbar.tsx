
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-freeness-purple to-freeness-blue bg-clip-text text-transparent">
            freeness
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-sm font-medium text-gray-700 hover:text-freeness-purple transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-gray-700 hover:text-freeness-purple transition-colors"
          >
            Services
          </a>
          <a
            href="#jobs"
            className="text-sm font-medium text-gray-700 hover:text-freeness-purple transition-colors"
          >
            Jobs
          </a>
          <Button
            variant="ghost"
            className="text-sm font-medium text-gray-700 hover:text-freeness-purple"
          >
            Login
          </Button>
          <Button className="bg-freeness-purple hover:bg-freeness-purple-dark text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-freeness-purple transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-gray-700 hover:text-freeness-purple transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#jobs"
              className="text-sm font-medium text-gray-700 hover:text-freeness-purple transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Jobs
            </a>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost">Login</Button>
              <Button className="bg-freeness-purple hover:bg-freeness-purple-dark text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
