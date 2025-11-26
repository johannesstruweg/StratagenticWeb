import { useState } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import logoImage from "@assets/Stratagentic_White_1762185093889.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-2 px-3">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">

        {/* Logo */}
        <div>
          <Link href="/">
            <img 
              src={logoImage}
              alt="Stratagentic" 
              className="h-10 w-auto cursor-pointer object-contain"
              style={{ filter: "invert(1)" }}
              data-testid="img-logo"
            />
          </Link>
        </div>

        {/* Menu wrapper */}
        <div 
          className="relative flex items-center"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >

          {/* Dropdown list – positioned under burger, vertical on mobile */}
          <div
            className={`
              absolute right-0 top-full mt-2
              sm:static sm:mt-0
              flex flex-col sm:flex-row
              gap-4 sm:gap-6
              text-right sm:text-left
              transition-all duration-300 ease-out
              ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
            `}
          >
            <Link 
              href="/resources"
              className="text-sm hover:text-[#2563EB] whitespace-nowrap"
              data-testid="link-menu-resources"
            >
              Resources
            </Link>

            <Link 
              href="/faq"
              className="text-sm hover:text-[#2563EB] whitespace-nowrap"
              data-testid="link-menu-faqs"
            >
              FAQs
            </Link>

            <Link 
              href="/team"
              className="text-sm hover:text-[#2563EB] whitespace-nowrap"
              data-testid="link-menu-team"
            >
              Team
            </Link>

            <Link 
              href="/"
              className="text-sm hover:text-[#2563EB] whitespace-nowrap"
              data-testid="link-menu-home"
            >
              Home
            </Link>
          </div>

          {/* Burger – disappears when menu is open */}
          <button
            className={`
              p-2 absolute right-0 transition-all duration-300 
              ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
            `}
            onClick={() => setMenuOpen(true)}
            data-testid="button-menu"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>

      </div>
    </header>
  );
}
