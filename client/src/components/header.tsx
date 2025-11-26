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
        <Link href="/">
          <img
            src={logoImage}
            alt="Stratagentic"
            className="h-10 w-auto cursor-pointer object-contain"
            style={{ filter: "invert(1)" }}
            data-testid="img-logo"
          />
        </Link>

        {/* Menu wrapper */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >

          {/* Dropdown – positioned exactly at burger, not below */}
          <div
            className={`
              absolute right-0 top-0
              translate-y-8           /* dropdown starts at the burger position */
              sm:static sm:translate-y-0
              flex flex-col sm:flex-row
              gap-4 sm:gap-6
              text-right sm:text-left
              transition-all duration-300 ease-out
              ${
                menuOpen
                  ? "opacity-100 translate-y-8 pointer-events-auto"
                  : "opacity-0 translate-y-6 pointer-events-none"
              }
            `}
          >
            <Link
              href="/resources"
              className="text-sm hover:text-[#2563EB] whitespace-nowrap"
            >
              Resources
            </Link>

            <Link
              href="/faq"
              className="text-sm hover:text-[#2563EB] whitespace-nowrap"
            >
              FAQs
            </Link>

            <Link
              href="/team"
              className="text-sm hover:text-[#2563EB] whitespace-nowrap"
            >
              Team
            </Link>

            <Link
              href="/"
              className="text-sm hover:text-[#2563EB] whitespace-nowrap"
            >
              Home
            </Link>
          </div>

          {/* Burger – disappears when expanded */}
          <button
            className={`
              p-2 absolute right-0 transition-all duration-200
              ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
            `}
            onClick={() => setMenuOpen(true)}
            aria-label="Menu"
            data-testid="button-menu"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </div>
    </header>
  );
}
