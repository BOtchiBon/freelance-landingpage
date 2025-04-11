
import { Check } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-24">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-64 md:h-80 lg:h-96 rounded-2xl bg-gradient-to-br from-freeness-lavender-soft to-freeness-gray-light overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xl md:text-2xl font-semibold text-freeness-neutral">Freeness Vision</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl bg-white shadow-xl p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-medium text-freeness-gray">Since</div>
                  <div className="text-xl font-bold text-freeness-blue">2023</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-freeness-lavender/20 blur-md"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-freeness-neutral">
              Building a Thriving Digital Economy
            </h2>
            
            <p className="text-lg text-freeness-gray mb-8">
              Freeness is transforming how Tunisian talent connects with local opportunities. Our mission is to create a peaceful, supportive ecosystem where freelancers and businesses can collaborate seamlessly, fostering innovation and economic growth across Tunisia.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-freeness-lavender-soft p-1 rounded-full">
                  <Check size={16} className="text-freeness-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-freeness-neutral">Local Focus</h3>
                  <p className="text-freeness-gray">Connecting Tunisian talent with Tunisian businesses</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-freeness-blue-soft p-1 rounded-full">
                  <Check size={16} className="text-freeness-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-freeness-neutral">Secure Payments</h3>
                  <p className="text-freeness-gray">Safe and timely payments for completed projects</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-freeness-cyan-soft p-1 rounded-full">
                  <Check size={16} className="text-freeness-cyan" />
                </div>
                <div>
                  <h3 className="font-semibold text-freeness-neutral">Quality First</h3>
                  <p className="text-freeness-gray">Curated talent pool ensuring excellence and reliability</p>
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
