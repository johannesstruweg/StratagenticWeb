import { useState } from "react";
import { Header } from "@/components/header";
import { X, ExternalLink } from "lucide-react";
import promptimproverImage from "@assets/images/Demo_Promptodactyl.jpg";

// Sample automation card data - replace with your actual automations
const automations = [
  {
    id: "prompt-improver",
    category: "AI Interaction",
    title: "Smarter prompts for smarter replies",
    description: "Prompts tailored to customer output requirements",
    demoUrl: "https://www.promptodactyl.com/",
    image: promptimproverImage,
    hidden: false
  },
  {
    id: "prospect-research",
    category: "Sales Intelligence",
    title: "AI Prospect Research",
    description: "Automated company research and lead qualification using AI",
    demoUrl: "/demos/prospect-research",
    image: "https://via.placeholder.com/400x400?text=Prospect+Research",
    hidden: true
  },
  {
    id: "data-extraction",
    category: "Data Processing",
    title: "Document Data Extraction",
    description: "Extract structured data from PDFs, invoices, and forms automatically",
    demoUrl: "/demos/data-extraction",
    image: "https://via.placeholder.com/400x400?text=Data+Extraction",
    hidden: true
  },
  {
    id: "meeting-scheduler",
    category: "Productivity",
    title: "AI Meeting Scheduler",
    description: "Coordinate meetings across time zones with natural language",
    demoUrl: "/demos/meeting-scheduler",
    image: "https://via.placeholder.com/400x400?text=Meeting+Scheduler",
    hidden: true
  },
  {
    id: "content-generator",
    category: "Marketing",
    title: "Content Generator",
    description: "Generate blog posts, social media, and marketing copy on-brand",
    demoUrl: "/demos/content-generator",
    image: "https://via.placeholder.com/400x400?text=Content+Generator",
    hidden: true
  },
  {
    id: "invoice-processing",
    category: "Finance",
    title: "Invoice Processing",
    description: "Automated invoice data extraction and approval workflows",
    demoUrl: "/demos/invoice-processing",
    image: "https://via.placeholder.com/400x400?text=Invoice+Processing",
    hidden: true
  },
  {
    id: "chatbot",
    category: "Customer Support",
    title: "AI Support Chatbot",
    description: "Handle customer inquiries 24/7 with context-aware responses",
    demoUrl: "/demos/chatbot",
    image: "https://via.placeholder.com/400x400?text=Support+Chatbot",
    hidden: true
  },
  {
    id: "pipeline-tracker",
    category: "Sales Operations",
    title: "Pipeline Tracker",
    description: "Real-time sales pipeline updates and automated follow-ups",
    demoUrl: "/demos/pipeline-tracker",
    image: "https://via.placeholder.com/400x400?text=Pipeline+Tracker",
    hidden: true
  },
  {
    id: "report-builder",
    category: "Analytics",
    title: "Automated Reports",
    description: "Generate business reports from multiple data sources automatically",
    demoUrl: "/demos/report-builder",
    image: "https://via.placeholder.com/400x400?text=Report+Builder",
    hidden: true
  }
];


export default function Resources() {
  const [selectedDemo, setSelectedDemo] = useState<typeof automations[0] | null>(null);

  const openDemo = (automation: typeof automations[0]) => {
    setSelectedDemo(automation);
  };

  const closeDemo = () => {
    setSelectedDemo(null);
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* Hero Section */}
      <section style={{ padding: "var(--space-7) var(--space-3)" }}>
        <div className="max-w-[1400px] mx-auto">
          <h1 
            className="font-bold mb-6"
            style={{ 
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em"
            }}
          >
            We believe great systems start with great thinking.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
            Every solution we build begins with clarity, about purpose, process, and people. 
            Strategy sets the direction, automation scales it, and design keeps it human. 
            That's how we help ambitious teams work smarter, move faster, and grow with intent.
          </p>
        </div>
      </section>

      {/* Interactive Demos Section */}
      <section style={{ padding: "var(--space-7) var(--space-3)" }}>
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
            Try Our Automations
          </h2>
          
          {/* 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{automations
  .filter(a => !a.hidden)
  .map((automation) => (
              <div
                key={automation.id}
                onClick={() => openDemo(automation)}
                className="relative border border-black overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow"
                data-testid={`card-automation-${automation.id}`}
              >
                <div className="relative aspect-square">
                  <img 
                    src={automation.image} 
                    alt={automation.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all" />
                  
                  <div className="absolute top-6 left-6 right-6 text-black z-10">
                    <p className="text-xs uppercase tracking-wider opacity-80">
                      {automation.category}
                    </p>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-black z-10">
                    <p className="text-xl md:text-2xl font-bold tracking-tight mb-2">
                      {automation.title}
                    </p>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {automation.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal/Floating Window */}
      {selectedDemo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeDemo}
        >
          <div 
            className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                  {selectedDemo.category}
                </p>
                <h3 className="text-2xl font-bold">{selectedDemo.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openInNewTab(selectedDemo.demoUrl)}
                  className="p-2 hover:bg-gray-100 rounded transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
                <button
                  onClick={closeDemo}
                  className="p-2 hover:bg-gray-100 rounded transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content - iframe for demo */}
           <div className="aspect-[16/9] w-full">
  <iframe
    src={selectedDemo.demoUrl}
    className="w-full h-full rounded-b-lg border-0"
    title={selectedDemo.title}
    sandbox="allow-scripts allow-same-origin allow-forms"
  />
</div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  {selectedDemo.description}
                </p>
                <button
                  onClick={() => openInNewTab(selectedDemo.demoUrl)}
                  className="inline-flex items-center justify-center bg-black text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors whitespace-nowrap ml-4"
                >
                  <span className="mr-2">→</span>
                  Open full demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        className="bg-white text-black"
        style={{ padding: "var(--space-5) var(--space-3)" }}
      >
        <div className="max-w-[1400px] mx-auto text-sm">
          <p>
            © 2025 Stratagentic – All rights reserved. AI-assisted, human-approved
          </p>
        </div>
      </footer>
    </div>
  );
}
