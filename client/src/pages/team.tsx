import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import logoImage from "@assets/Stratagentic_White_1762185093889.png";
import { Header } from "@/components/header";

import franciscoDefault from "@assets/1523195690482_1762463807189.jpg";
import JanesShuffle1 from "@assets/images/JanesShuffle1.jpg";
import JanesShuffle4 from "@assets/images/JanesShuffle1.4pg";
import JanesShuffle5 from "@assets/images/JanesShuffle5.jpg";
import JanesShuffle6 from "@assets/images/JanesShuffle6.jpg";
import JanesShuffle7 from "@assets/images/JanesShuffle7.jpg";
import JanesShuffle8 from "@assets/images/JanesShuffle8.jpg";

export default function Team() {
  const [, setLocation] = useLocation();

  const [franciscoPhotoIndex, setFranciscoPhotoIndex] = useState(0);
  const [johannesPhotoIndex, setJohannesPhotoIndex] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateToResources = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.assign("/#resources");
  };

  const playErrorSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = "sine";

      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      console.log("Audio playback not supported");
    }
  };

  const franciscoPhotos = [
    franciscoDefault,
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  ];

  const johannesPhotos = [
    JanesShuffle1,
    JanesShuffle4,
    JanesShuffle5,
    JanesShuffle6,
    JanesShuffle7,
    JanesShuffle8,
    JanesShuffle1,
    JanesShuffle4,
    JanesShuffle5,
    JanesShuffle6,
    JanesShuffle7,
    JanesShuffle8
  ];

  // mouse-scrub photo switching
  const handleScrub = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    photos: string[],
    setIndex: (i: number) => void
  ) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = x / rect.width;
    const newIndex = Math.floor(ratio * photos.length);
    setIndex(Math.min(newIndex, photos.length - 1));
  };

  const resetPhoto = (setIndex: (i: number) => void) => {
    setIndex(0);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* Ethos Section */}
      <section
        className="bg-white text-black"
        data-testid="section-ethos"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="py-12 text-left" style={{ paddingLeft: "var(--space-3)", paddingRight: "var(--space-3)" }}>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight space-y-8" data-testid="text-ethos-content">
              <p>We believe great systems start with great thinking.</p>
              <p>Every solution we build begins with clarity, about purpose, process, and people. Strategy sets the direction, automation scales it, and design keeps it human. That's how we help ambitious teams work smarter, move faster, and grow with intent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Founders Section */}
      <section
        className="bg-white text-black"
        style={{ padding: "var(--space-8) var(--space-3)" }}
        data-testid="section-founders"
      >
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-sm font-bold mb-12 tracking-tight" data-testid="text-founders-heading">
            The Founders
          </h2>

          <div className="space-y-16">

            {/* Francisco */}
            <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-12">
              <div className="flex flex-col items-start">
                <div
                  className="w-full aspect-square border border-black overflow-hidden cursor-pointer hover:border-[#2563EB] transition-all duration-300 p-0 bg-transparent"
                  onMouseMove={(e) => handleScrub(e, franciscoPhotos, setFranciscoPhotoIndex)}
                  onMouseLeave={() => resetPhoto(setFranciscoPhotoIndex)}
                >
                  <img 
                    src={franciscoPhotos[franciscoPhotoIndex]}
                    alt="Francisco Acasuso"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-1">Francisco Acasuso</h3>
                  <p className="text-sm text-gray-600">Co-founder and CEO</p>
                </div>
              </div>

              <div className="flex flex-col justify-start">
                <p className="text-base leading-relaxed mb-6">
                  Francisco has spent over 15 years helping companies grow by pairing strong strategy with real operational results...
                </p>

                <div>
                  <h4 className="text-sm font-bold mb-3">Areas of Focus:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><span className="mr-2 text-[#2563EB]">→</span>Scaling businesses through automation</li>
                    <li className="flex items-start"><span className="mr-2 text-[#2563EB]">→</span>Designing AI systems that drive sustainable performance</li>
                    <li className="flex items-start"><span className="mr-2 text-[#2563EB]">→</span>Leading high-impact innovation projects</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Johannes */}
            <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-12">
              <div className="flex flex-col items-start">
                <div
                  className="w-full aspect-square border border-black overflow-hidden cursor-pointer hover:border-[#2563EB] transition-all duration-300 p-0 bg-transparent"
                  onMouseMove={(e) => handleScrub(e, johannesPhotos, setJohannesPhotoIndex)}
                  onMouseLeave={() => resetPhoto(setJohannesPhotoIndex)}
                >
                  <img 
                    src={johannesPhotos[johannesPhotoIndex]}
                    alt="Johannes Struweg"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-1">Johannes Struweg</h3>
                  <p className="text-sm text-gray-600">Co-founder and COO</p>
                </div>
              </div>

              <div className="flex flex-col justify-start">
                <p className="text-base leading-relaxed mb-6">
                  Johannes is a serial entrepreneur who's built and led four successful companies...
                </p>

                <div>
                  <h4 className="text-sm font-bold mb-3">Areas of Focus:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><span className="mr-2 text-[#2563EB]">→</span>Growth strategy and operational optimisation</li>
                    <li className="flex items-start"><span className="mr-2 text-[#2563EB]">→</span>AI agents and generative AI for business growth</li>
                    <li className="flex items-start"><span className="mr-2 text-[#2563EB]">→</span>Advisory to leadership teams</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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
