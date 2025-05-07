import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-freeness-purple/20 rounded-full mix-blend-multiply blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 -left-20 w-72 h-72 bg-freeness-blue-soft/30 rounded-full mix-blend-multiply blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-freeness-orange-soft/20 rounded-full mix-blend-multiply blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#4318FF] bg-clip-text text-transparent font-funnel-display">
            Building a peaceful platform for Tunisian Freeness
          </h1>

          <p
            className="text-lg md:text-xl text-gray-700 mb-10"
            style={{ animationDelay: "0.2s" }}
          >
            Connect talented Tunisian freelancers with ambitious local clients
            in one seamless marketplace.
          </p>

          <div
            className="flex flex-row gap-4 justify-center items-center mb-10"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="px-6 py-3 rounded-md bg-[#4318FF] text-white font-plus-jakarta text-base font-semibold transition-colors hover:bg-[#2e0eb8]">
              Post a job
            </button>
            <button className="px-6 py-3 rounded-md bg-[#9B87F5] text-white font-plus-jakarta text-base font-semibold transition-colors hover:bg-[#7E69AB]">
              Be a Freelancer
            </button>
          </div>

          <div
            className="flex items-center justify-center gap-4"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-freeness-purple-light flex items-center justify-center text-xs text-white">
                TF
              </div>
              <div className="w-8 h-8 rounded-full bg-freeness-blue-soft flex items-center justify-center text-xs text-gray-700">
                JM
              </div>
              <div className="w-8 h-8 rounded-full bg-freeness-peach-soft flex items-center justify-center text-xs text-gray-700">
                SK
              </div>
            </div>
            <span className="text-sm text-gray-600">
              Join 120+ freelancers and clients
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-freeness-purple">
          <ArrowRight className="rotate-90" size={24} />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
