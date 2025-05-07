import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Freeness Logo" className="h-9 w-auto" />
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
          <button className="text-sm font-medium text-gray-700 hover:text-freeness-purple px-4 py-2 rounded-md hover:bg-gray-100">
            Login
          </button>
          <Button className="bg-[#4318FF] hover:bg-[#2e0eb8] text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            className="hover:bg-gray-100"
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
              <button className="text-sm font-medium text-gray-700 hover:text-freeness-purple px-4 py-2 rounded-md hover:bg-gray-100">
                Login
              </button>
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
