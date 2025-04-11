
import { Check } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-24">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-64 md:h-80 lg:h-96 rounded-2xl bg-gradient-to-br from-freeness-blue-soft to-freeness-cyan-soft overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xl md:text-2xl font-semibold text-freeness-blue-dark">Freeness Vision</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl bg-white shadow-xl p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-500">Since</div>
                  <div className="text-xl font-bold text-freeness-blue">2023</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-freeness-sky-soft/30 blur-md"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-freeness-blue to-freeness-cyan bg-clip-text text-transparent">
              Building a Thriving Digital Economy
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Freeness is transforming how Tunisian talent connects with local opportunities. Our mission is to create a peaceful, supportive ecosystem where freelancers and businesses can collaborate seamlessly, fostering innovation and economic growth across Tunisia.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-freeness-blue/10 p-1 rounded-full">
                  <Check size={16} className="text-freeness-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Local Focus</h3>
                  <p className="text-gray-600">Connecting Tunisian talent with Tunisian businesses</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-freeness-blue/10 p-1 rounded-full">
                  <Check size={16} className="text-freeness-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Secure Payments</h3>
                  <p className="text-gray-600">Safe and timely payments for completed projects</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-freeness-blue/10 p-1 rounded-full">
                  <Check size={16} className="text-freeness-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Quality First</h3>
                  <p className="text-gray-600">Curated talent pool ensuring excellence and reliability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
