import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import logoImage from "@assets/Stratagentic_White_1762185093889.png";
import { Header } from "@/components/header";
import faqImage from "@assets/images/MeAndAI_Hammock1.png";

export default function FAQ() {
  const [time, setTime] = useState(new Date());
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (faqId: string) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-white text-black border-t border-black" style={{ padding: "var(--space-8) var(--space-3)" }}>
        <div className="max-w-[1400px] mx-auto">
          <h1 
            className="font-bold mb-6"
            style={{ 
              fontSize: "clamp(2rem, 6vw + 0.5rem, 6rem)",
              lineHeight: "0.92",
              letterSpacing: "-0.04em"
            }}
            data-testid="text-hero-heading"
          >
            Frequently Asked Questions
          </h1>
          <p className="text-lg max-w-5xl leading-relaxed" data-testid="text-hero-description">
            Your operations run smoother, your team achieves more, and progress feels effortless.
          </p>
        </div>
      </section>



      {/* Strategy Section */}
      <section 
        className="bg-white text-black border-t border-gray-300"
        style={{ padding: "var(--space-7) var(--space-3)" }}
        data-testid="section-strategy"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,600px] gap-12">

            {/* Left */}
            <div className="max-w-[700px]">
              <h2 className="text-sm font-bold uppercase tracking-wider mb-8 text-[#2563EB]" data-testid="text-strategy-heading">
                Strategy
              </h2>

              <div className="space-y-4">
                
                {/* FAQ 1 */}
                <div data-testid="faq-strategy-1" className="border-b border-gray-200">
                  <h3 
                    className="text-xl font-bold py-4 cursor-pointer hover:text-[#2563EB] transition-colors"
                    onClick={() => toggleFaq('strategy-1')}
                  >
                    What if I don't have a clear strategy yet?
                  </h3>
                  {openFaq === 'strategy-1' && (
                    <p className="text-base leading-relaxed pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      No problem. Our free Strategy Agent helps you clarify goals, uncover growth opportunities, and define an actionable direction. It guides you through key questions so your AI Opportunity Report is grounded in real business objectives, even if you are starting from scratch.
                    </p>
                  )}
                </div>

                {/* FAQ 2 */}
                <div data-testid="faq-strategy-2" className="border-b border-gray-200">
                  <h3 
                    className="text-xl font-bold py-4 cursor-pointer hover:text-[#2563EB] transition-colors"
                    onClick={() => toggleFaq('strategy-2')}
                  >
                    What if we already have a strategy?
                  </h3>
                  {openFaq === 'strategy-2' && (
                    <p className="text-base leading-relaxed pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      Perfect. We align your AI roadmap to existing goals and help refine your priorities beyond AI, including growth, process design, and execution.
                    </p>
                  )}
                </div>

                {/* FAQ 3 */}
                <div data-testid="faq-strategy-3" className="border-b border-gray-200">
                  <h3 
                    className="text-xl font-bold py-4 cursor-pointer hover:text-[#2563EB] transition-colors"
                    onClick={() => toggleFaq('strategy-3')}
                  >
                    How do you identify which parts of our business can benefit most from AI?
                  </h3>
                  {openFaq === 'strategy-3' && (
                    <p className="text-base leading-relaxed pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      We start with an AI Audit to map your workflows, data, and goals. From there, we identify quick wins, bottlenecks, and long-term efficiency gains, ensuring every recommendation has a measurable outcome.
                    </p>
                  )}
                </div>

                {/* FAQ 4 */}
                <div data-testid="faq-strategy-4" className="border-b border-gray-200">
                  <h3 
                    className="text-xl font-bold py-4 cursor-pointer hover:text-[#2563EB] transition-colors"
                    onClick={() => toggleFaq('strategy-4')}
                  >
                    Do we need to change how we work before implementing AI?
                  </h3>
                  {openFaq === 'strategy-4' && (
                    <p className="text-base leading-relaxed pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      Not necessarily. Most improvements build around your existing systems. When process changes are recommended, they are designed to make operations simpler, not more complex.
                    </p>
                  )}
                </div>

                {/* FAQ 5 */}
                <div data-testid="faq-strategy-5" className="border-b border-gray-200">
                  <h3 
                    className="text-xl font-bold py-4 cursor-pointer hover:text-[#2563EB] transition-colors"
                    onClick={() => toggleFaq('strategy-5')}
                  >
                    Can you still build useful systems if our data isn't perfect?
                  </h3>
                  {openFaq === 'strategy-5' && (
                    <p className="text-base leading-relaxed pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      Yes. Many clients begin with fragmented or incomplete data. We design systems that improve data quality over time through structured collection and integration.
                    </p>
                  )}
                </div>

              </div>
            </div>

            {/* Right – image */}
            <div className="hidden md:block">
              <img
                src={faqImage}
                alt="Person reading with technology elements"
                className="w-full h-auto object-cover scale-x-[-1]"
                data-testid="img-faq-strategy"
              />
            </div>

          </div>
        </div>
      </section>


      {/* -------------------------------------------------- */}
      {/* AI Solutions Section */}
      {/* -------------------------------------------------- */}

      <section 
        className="bg-white text-black border-t border-gray-300"
        style={{ padding: "var(--space-7) var(--space-3)" }}
        data-testid="section-solutions"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,600px] gap-12">

            {/* Left */}
            <div className="max-w-[700px]">
              <h2 className="text-sm font-bold uppercase tracking-wider mb-8 text-[#2563EB]" data-testid="text-solutions-heading">
                AI Solutions
              </h2>

              <div className="space-y-4">

                {/* FAQ items unchanged */}
                {/* ...all your solution FAQs... */}

              </div>
            </div>

            {/* Right – empty placeholder */}
            <div className="hidden md:block"></div>

          </div>
        </div>
      </section>


      {/* -------------------------------------------------- */}
      {/* Process and Support Section */}
      {/* -------------------------------------------------- */}

      <section 
        className="bg-white text-black border-t border-gray-300"
        style={{ padding: "var(--space-7) var(--space-3)" }}
        data-testid="section-process"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,600px] gap-12">

            {/* Left */}
            <div className="max-w-[700px]">
              <h2 className="text-sm font-bold uppercase tracking-wider mb-8 text-[#2563EB]" data-testid="text-process-heading">
                Process and Support
              </h2>

              <div className="space-y-4">

                {/* FAQ items unchanged */}
                {/* ...all process FAQs... */}

              </div>
            </div>

            {/* Right – empty placeholder */}
            <div className="hidden md:block"></div>

          </div>
        </div>
      </section>


      {/* -------------------------------------------------- */}
      {/* Results and Confidence Section */}
      {/* -------------------------------------------------- */}

      <section 
        className="bg-white text-black border-t border-gray-300"
        style={{ padding: "var(--space-7) var(--space-3)" }}
        data-testid="section-results"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,600px] gap-12">

            {/* Left */}
            <div className="max-w-[700px]">
              <h2 className="text-sm font-bold uppercase tracking-wider mb-8 text-[#2563EB]" data-testid="text-results-heading">
                Results and Confidence
              </h2>

              <div className="space-y-4">

                {/* FAQ items unchanged */}
                {/* ...all results FAQs... */}

              </div>
            </div>

            {/* Right – empty placeholder */}
            <div className="hidden md:block"></div>

          </div>
        </div>
      </section>


      {/* -------------------------------------------------- */}
      {/* Closing Section (stay exactly as you want) */}
      {/* -------------------------------------------------- */}

      <section 
        className="bg-white text-black border-t border-gray-300"
        style={{ padding: "var(--space-7) var(--space-3)" }}
        data-testid="section-closing"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr,600px] max-w-[1400px] mx-auto gap-12">
          
          <div className="max-w-[700px]">
            <p className="text-lg leading-relaxed mb-4">
              If your question isn't covered here, we will address it during your free AI Automation Audit...
            </p>
            <p className="text-lg font-bold">
              Our goal is simple: your operations run smoother, your team achieves more, and progress feels effortless.
            </p>
          </div>

          {/* Right – empty placeholder */}
          <div className="hidden md:block"></div>
        </div>
      </section>


      {/* CTA – unchanged */}
      <section 
        className="bg-white text-black border-t border-black"
        style={{ padding: "var(--space-8) var(--space-3)" }}
        data-testid="section-cta"
      >
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
            Ready to transform how you operate?
          </h2>
          <Link href="/#contact-section">
            <button 
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 text-sm hover-elevate active-elevate-2 transition-all"
              data-testid="button-cta"
            >
              <span className="mr-2">→</span>
              Get in touch
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
