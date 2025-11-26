import { useState } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import logoImage from "@assets/Stratagentic_White_1762185093889.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-2 px-3">  {/* Reduced vertical padding */}
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <img 
            src={logoImage}
            alt="Stratagentic" 
            className="h-10 w-auto cursor-pointer object-contain"
            style={{ filter: 'invert(1)' }}
            data-testid="img-logo"
          />
        </Link>

        {/* Menu Wrapper */}
        <div className="relative">

          {/* Dropdown Menu */}
          <div
            className={`
              absolute right-0 top-full mt-2
              flex flex-col bg-white text-black border border-black p-4
              transition-all duration-200
              ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
          >
            <Link href="/resources" className="py-1 text-sm hover:text-[#2563EB]">Resources</Link>
            <Link href="/faq" className="py-1 text-sm hover:text-[#2563EB]">FAQs</Link>
            <Link href="/team" className="py-1 text-sm hover:text-[#2563EB]">Team</Link>
            <Link href="/" className="py-1 text-sm hover:text-[#2563EB]">Home</Link>
          </div>

          {/* Burger Button */}
          <button
            className="p-2"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>
    </header>
  );
}
