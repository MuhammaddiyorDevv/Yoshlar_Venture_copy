// src/components/Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/Group.svg";
import ToggleTheme from "./ToggleTheme";
import FlagUzb from "../assets/images/FlagUzb.svg";
import FlagRussia from "../assets/images/Flag_of_Russia.svg.webp";
import FlagEng from "../assets/images/engFlag.webp";

export default function Navbar({ lang, strings }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const handleLanguageChange = (newLang) => {
    // Save current scroll position
    const currentScrollY = window.scrollY;
    
    // Store scroll position in sessionStorage
    sessionStorage.setItem('scrollPosition', currentScrollY.toString());
    
    // Navigate to new language
    const path = '/' + window.location.pathname.split('/').slice(2).filter(Boolean).join('/');
    const normalizedPath = path === '/' || path === '' ? '/' : path;
    window.location.href = `/${newLang}${normalizedPath}`;
  };

  const menuLinks = [
    { label: strings.home, href: `/${lang}` },
    { label: strings.about, href: `/${lang}/about` },
    { label: strings.events, href: `/${lang}/events` },
    { label: strings.portfolio, href: `/${lang}/portfolio` },
    { label: strings.partners, href: `/${lang}/partners` },
    { label: strings.blog, href: strings.blogUrl, external: true },
    { label: strings.contact, href: `/${lang}/contact` },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit:   { opacity: 0, y: -20 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit:   { opacity: 0, y: -10, scale: 0.95 },
  };

  // Compute current path segments after language code
  const path = typeof window !== 'undefined'
    ? '/' + window.location.pathname.split('/').slice(2).filter(Boolean).join('/')
    : '';
  // Ensure root path is '/'
  const normalizedPath = path === '/' || path === '' ? '/' : path;

  // Supported languages with flags
  const langs = [
    { code: 'uz', label: 'UZ', flag: FlagUzb },
    { code: 'ru', label: 'RU', flag: FlagRussia },
    { code: 'en', label: 'EN', flag: FlagEng },
  ];

  const currentLang = langs.find(l => l.code === lang);

  return (
    <section className="sticky top-2 container z-50 px-[40px]">
      <nav className="bg-white dark:bg-[#111111] shadow-sm py-[15px] px-[38px] rounded-tl-3xl rounded-br-3xl dark:border border-[#535862]">
        <div className="mx-auto flex justify-between items-center h-16">
          <a href={`/${lang}`} className="flex items-center space-x-2">
            <img src={Logo.src} alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-xs sm:text-sm text-black dark:text-white font-inter-tight">
              {strings.brandLine1}<br />{strings.brandLine2}
            </span>
          </a>

          <div className="hidden lg:flex space-x-6 text-sm font-medium">
            {menuLinks.map(item => (
              <a key={item.label} href={item.href} {...(item.external && { target: "_blank", rel: "noopener noreferrer" })} className="text-[#535862] dark:text-white px-[14px] py-[6px] rounded-lg font-semibold text-[16px] transition relative group font-inter-tight">
                <span className="relative z-10 group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F9B513] group-hover:to-[#EA601E]">
                  {item.label}
                </span>
                <span className="absolute inset-0 group-hover:bg-[#FFF1E6] rounded-lg z-0 transition duration-300"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <img 
                  src={currentLang.flag.src} 
                  alt={currentLang.label} 
                  className="w-6 h-4 object-cover rounded-sm"
                />
                <span className="text-sm font-medium text-[#535862] dark:text-white">
                  {currentLang.label}
                </span>
                <svg 
                  className={`w-4 h-4 text-[#535862] dark:text-white transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-32 bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#535862] rounded-lg shadow-lg py-1 z-50"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                  >
                    {langs.map(l => (
                      <button
                        key={l.code}
                        onClick={() => {
                          handleLanguageChange(l.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                          l.code === lang ? 'bg-[#FFF1E6] dark:bg-gray-700' : ''
                        }`}
                      >
                        <img 
                          src={l.flag.src} 
                          alt={l.label} 
                          className="w-6 h-4 object-cover rounded-sm"
                        />
                        <span className={`text-sm font-medium ${
                          l.code === lang 
                            ? 'text-[#F9B513]' 
                            : 'text-[#535862] dark:text-white'
                        }`}>
                          {l.label}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <ToggleTheme />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div className="lg:hidden mt-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-2 space-y-2" initial="hidden" animate="visible" exit="exit" variants={menuVariants} transition={{ duration: 0.3 }}>
              {menuLinks.map(item => (
                <a key={item.label} href={item.href} {...(item.external && { target: "_blank", rel: "noopener noreferrer" })} className="block text-[#535862] dark:text-white px-4 py-2 rounded-lg transition hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F9B513] hover:to-[#EA601E] font-inter-tight">{item.label}</a>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <div className="flex space-x-2">
                  {langs.map(l => (
                    <button
                      key={l.code}
                      onClick={() => handleLanguageChange(l.code)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                        l.code === lang 
                          ? 'bg-[#FFF1E6] dark:bg-gray-700' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <img 
                        src={l.flag.src} 
                        alt={l.label} 
                        className="w-5 h-3 object-cover rounded-sm"
                      />
                      <span className={`text-sm font-medium ${
                        l.code === lang 
                          ? 'text-[#F9B513]' 
                          : 'text-[#535862] dark:text-white'
                      }`}>
                        {l.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </section>
  );
}