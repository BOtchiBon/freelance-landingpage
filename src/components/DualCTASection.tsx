
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, UserIcon } from "lucide-react";

export function DualCTASection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Find Talent */}
          <div className="relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-freeness-cyan-soft/20 border border-gray-100">
            <div className="absolute top-0 right-0 w-20 h-20 bg-freeness-cyan-soft/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="bg-freeness-cyan-soft w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <BriefcaseIcon className="h-8 w-8 text-freeness-cyan" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-freeness-neutral">Be a Client</h3>
              <p className="text-freeness-gray mb-6">
                Find the perfect Tunisian talent for your projects. Post a job and get matched with pre-vetted professionals ready to bring your vision to life.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-freeness-cyan"></div>
                  <span className="text-freeness-gray">Post projects in minutes</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-freeness-cyan"></div>
                  <span className="text-freeness-gray">Get matched with verified talent</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-freeness-cyan"></div>
                  <span className="text-freeness-gray">Pay only when satisfied</span>
                </li>
              </ul>
              
              <Button className="bg-freeness-cyan hover:bg-freeness-blue text-white">
                Find Talent
              </Button>
            </div>
          </div>
          
          {/* Find Work */}
          <div className="relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-freeness-lavender-soft/40 border border-gray-100">
            <div className="absolute top-0 right-0 w-20 h-20 bg-freeness-lavender/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="bg-freeness-lavender-soft w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <UserIcon className="h-8 w-8 text-freeness-blue" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-freeness-neutral">Be a Freelancer</h3>
              <p className="text-freeness-gray mb-6">
                Join our community of skilled Tunisian freelancers. Create a standout profile, showcase your portfolio, and connect with quality local clients.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-freeness-blue"></div>
                  <span className="text-freeness-gray">Create your professional profile</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-freeness-blue"></div>
                  <span className="text-freeness-gray">Apply to relevant projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-freeness-blue"></div>
                  <span className="text-freeness-gray">Get paid securely and on time</span>
                </li>
              </ul>
              
              <Button className="bg-freeness-blue hover:bg-freeness-blue-dark text-white">
                Find Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DualCTASection;
