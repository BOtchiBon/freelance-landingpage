
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const recentJobs = [
  {
    title: "UI/UX Designer for FinTech App",
    category: "Design",
    budget: "3000 TND",
    location: "Tunis",
    bgClass: "bg-freeness-lavender-soft",
    textClass: "text-freeness-blue",
  },
  {
    title: "WordPress Developer for E-commerce",
    category: "Web Development",
    budget: "2500 TND",
    location: "Sfax",
    bgClass: "bg-freeness-blue-soft",
    textClass: "text-freeness-blue-dark",
  },
  {
    title: "Social Media Marketing Specialist",
    category: "Marketing",
    budget: "1800 TND",
    location: "Sousse",
    bgClass: "bg-freeness-cyan-soft",
    textClass: "text-freeness-cyan",
  },
  {
    title: "Mobile App Developer (React Native)",
    category: "Mobile Development",
    budget: "4000 TND",
    location: "Remote",
    bgClass: "bg-freeness-lavender-soft",
    textClass: "text-freeness-blue",
  },
  {
    title: "Content Writer for Tech Blog",
    category: "Writing",
    budget: "1500 TND",
    location: "Monastir",
    bgClass: "bg-freeness-blue-soft",
    textClass: "text-freeness-blue-dark",
  },
  {
    title: "Video Editor for YouTube Channel",
    category: "Video Production",
    budget: "2000 TND",
    location: "Bizerte",
    bgClass: "bg-freeness-cyan-soft",
    textClass: "text-freeness-cyan",
  }
];

export function JobsSection() {
  return (
    <section id="jobs" className="section-padding bg-freeness-gray-light/30">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-freeness-neutral">
            Recent Opportunities
          </h2>
          <p className="text-lg text-freeness-gray">
            Browse the latest projects from Tunisian businesses looking for talented freelancers like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentJobs.map((job, index) => (
            <Card key={index} className="hover-lift border border-gray-100 bg-white">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className={`${job.bgClass} border-none ${job.textClass}`}>
                    {job.category}
                  </Badge>
                  <div className="text-sm font-semibold text-freeness-neutral">{job.budget}</div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4 text-freeness-neutral">{job.title}</h3>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-freeness-gray">{job.location}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-freeness-gray hover:text-freeness-blue hover:bg-freeness-lavender-soft/30">
                    <span className="mr-1">View</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-freeness-blue hover:bg-freeness-blue-dark text-white px-8">
            Browse All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
}

export default JobsSection;
