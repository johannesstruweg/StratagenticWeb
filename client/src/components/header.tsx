import { useState } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import logoImage from "@assets/Stratagentic_White_1762185093889.png";
import { useLang } from "@/i18n/LanguageProvider";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { code, setLangCode } = useLang();

  const nextLanguageLabel = code === "en" ? "Norsk" : "English";
  const nextLanguageCode = code === "en" ? "no" : "en";

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
          />
        </Link>

        {/* Menu wrapper */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          
          {/* DROPDOWN */}
          <div
            className={`
              absolute right-0 top-0
              sm:static

              flex flex-col sm:flex-row
              gap-3 sm:gap-6
              text-right sm:text-left

              leading-none
              -mt-[8px]

              transition-opacity duration-150
              ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
          >

            {/* LANGUAGE SWITCH — FIRST MENU ITEM */}
            <button
              onClick={() => setLangCode(nextLanguageCode)}
              className="text-sm hover:text-[#2563EB] whitespace-nowrap"
            >
              {nextLanguageLabel}
            </button>

            <Link href="/resources" className="text-sm hover:text-[#2563EB] whitespace-nowrap">
              Resources
            </Link>
            <Link href="/faq" className="text-sm hover:text-[#2563EB] whitespace-nowrap">
              FAQs
            </Link>
            <Link href="/team" className="text-sm hover:text-[#2563EB] whitespace-nowrap">
              Team
            </Link>
            <Link href="/" className="text-sm hover:text-[#2563EB] whitespace-nowrap">
              Home
            </Link>

          </div>

          {/* Burger Icon */}
          <button
            className={`
              p-2 absolute right-0
              transition-opacity duration-150
              ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
            `}
            onClick={() => setMenuOpen(true)}
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </div>
    </header>
  );
}
