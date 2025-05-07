import { Check } from "lucide-react";
import AgentBubble from "./AgentBubble";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-24">
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="/tunisia_map.png"
                alt="Tunisia Map"
                className="w-full h-96 md:h-[28rem] lg:h-[32rem] object-contain rounded-2xl"
              />
              <AgentBubble
                name="Nouar Mohamed Amin"
                role="UX Designer"
                image="/public/naouar.jpeg"
                style={{ top: "25%", left: "50%" }}
                color="bg-[#FBF3EF]"
              />
              <AgentBubble
                name="Mohamed aziz sridi"
                role="Web Developer"
                image="/public/sridi.jpeg"
                style={{ top: "45%", left: "25%" }}
                color="bg-[#F4F3FC]"
              />
              <AgentBubble
                name="Mohamed Chehata"
                role="Marketer"
                image="/public/ME.jpg"
                style={{ top: "62%", left: "52%" }}
                color="bg-[#EEF4FC]"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl bg-white shadow-xl p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-500">Since</div>
                  <div className="text-xl font-bold text-freeness-purple">
                    2023
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-freeness-orange-soft/30 blur-md"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#4318FF] bg-clip-text text-transparent font-funnel-display">
              Building a Thriving Digital Economy
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Freeness is transforming how Tunisian talent connects with local
              opportunities. Our mission is to create a peaceful, supportive
              ecosystem where freelancers and businesses can collaborate
              seamlessly, fostering innovation and economic growth across
              Tunisia.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-freeness-purple/10 p-1 rounded-full">
                  <Check size={16} className="text-freeness-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Local Focus</h3>
                  <p className="text-gray-600">
                    Connecting Tunisian talent with Tunisian businesses
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-freeness-purple/10 p-1 rounded-full">
                  <Check size={16} className="text-freeness-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Secure Payments
                  </h3>
                  <p className="text-gray-600">
                    Safe and timely payments for completed projects
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-freeness-purple/10 p-1 rounded-full">
                  <Check size={16} className="text-freeness-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Quality First</h3>
                  <p className="text-gray-600">
                    Curated talent pool ensuring excellence and reliability
                  </p>
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
