// src/components/Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/Group.svg";
import FlagUzb from "../assets/images/FlagUzb.svg";
import FlagRus from "../assets/images/Flag_of_Russia.svg.webp";
import FlagEng from "../assets/images/engFlag.webp";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    flag: FlagUzb,
    label: "O'zb",
  });
  const [isLangOpen, setIsLangOpen] = useState(false);

  const menuLinks = [
    { label: "Asosiy", href: "/" },
    { label: "Biz haqimizda", href: "#" },
    { label: "Tadbirlar", href: "#" },
    { label: "Startuplar", href: "#" },
    { label: "Hamkorlar", href: "#" },
    { label: "Youtube blog", href: "#" },
    { label: "Kontaktlar", href: "/Contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const handleLanguageSelect = (flag, label) => {
    setSelectedLang({ flag, label });
    setIsLangOpen(false);
  };

  return (
    <section className="sticky top-2  container z-50 px-[40px]">
      <nav className="   bg-white dark:bg-[#111111] shadow-sm py-[15px] px-[38px] rounded-tl-3xl rounded-br-3xl dark:border border-[#535862]">
        <div className="mx-auto flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src={Logo.src} alt="Yoshlar Ventures" className="h-8 w-auto" />

            <span className="font-bold text-xs sm:text-sm text-black dark:text-white font-inter-tight">
              YOSHLAR
              <br />
              VENTURES
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 text-sm font-medium">
            {menuLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#535862] dark:text-white px-[14px] py-[6px] rounded-lg font-semibold text-[16px] transition relative group font-inter-tight"
              >
                <span className="relative z-10 group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F9B513] group-hover:to-[#EA601E]">
                  {item.label}
                </span>
                <span className="absolute inset-0 group-hover:bg-[#FFF1E6] rounded-lg z-0 transition duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right Side: Language Selector, Toggle, Mobile Button */}
          <div className="flex items-center space-x-2 relative">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="rounded px-2 py-1 text-sm font-inter-tight flex items-center space-x-2 min-w-[80px] justify-between hover:border-gray-400 transition"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={selectedLang.flag.src}
                    alt="Flag"
                    className="w-4 h-3"
                  />
                  <span>{selectedLang.label}</span>
                </div>
                <svg
                  className="w-3 h-3 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute top-full left-0 mt-1 w-full border border-gray-300 rounded shadow-lg z-10 bg-white dark:bg-gray-800">
                  <button
                    className="w-full px-2 py-1 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 text-sm font-inter-tight"
                    onClick={() => handleLanguageSelect(FlagUzb, "O'zb")}
                  >
                    <img src={FlagUzb.src} className="w-4 h-3" />
                    <span>O'zb</span>
                  </button>
                  <button
                    className="w-full px-2 py-1 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 text-sm font-inter-tight"
                    onClick={() => handleLanguageSelect(FlagRus, "Рус")}
                  >
                    <img src={FlagRus.src} className="w-4 h-3" />
                    <span>Рус</span>
                  </button>
                  <button
                    className="w-full px-2 py-1 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 text-sm font-inter-tight"
                    onClick={() => handleLanguageSelect(FlagEng, "Eng")}
                  >
                    <img src={FlagEng.src} className="w-4 h-3" />
                    <span>Eng</span>
                  </button>
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <ToggleTheme />

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden mt-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-2 space-y-2"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
            >
              {menuLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-[#535862] dark:text-white px-4 py-2 rounded-lg transition hover:bg-[#FFF1E6] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F9B513] hover:to-[#EA601E] font-inter-tight"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </section>
  );
};

export default Navbar;
