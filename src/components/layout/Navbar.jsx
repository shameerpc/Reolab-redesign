import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/services', name: 'Services' },
  { path: '/contact', name: 'Contact' },
];

/* Bespoke logomark: a single confluence line reads as a flowing "R" —
   crisp at 20px, no dependency on a generic icon set. */
const Logomark = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path
      d="M5 17V5.6C5 5.27 5.27 5 5.6 5H11.4C13.4 5 15 6.6 15 8.6C15 10.4 13.7 11.9 12 12.15L16 17"
      stroke="white"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 12H10.8"
      stroke="white"
      strokeWidth="1.9"
      strokeLinecap="round"
    />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hovered, setHovered] = useState(null);
  const location = useLocation();
  const navRefs = useRef({});
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const key = hovered ?? location.pathname;
    const el = navRefs.current[key];
    if (el) {
      setPillStyle({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    } else {
      setPillStyle((p) => ({ ...p, opacity: 0 }));
    }
  }, [hovered, location.pathname]);

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 inset-x-0 z-[60] h-[3px] bg-black/[0.04]">
        <div
          className="h-full bg-gradient-to-r from-[#4B3DF2] via-[#9B6BFF] to-[#FF5A3C] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-white/75 backdrop-blur-2xl border-b border-black/[0.06] shadow-[0_8px_30px_rgba(75,61,242,0.06)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 shrink-0 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B3DF2]"
          >
            <span className="relative flex items-center justify-center w-10 h-10 rounded-[11px] bg-gradient-to-br from-[#4B3DF2] via-[#6D4EF5] to-[#FF5A3C] shadow-[0_1px_1px_rgba(255,255,255,0.4)_inset,0_4px_14px_rgba(75,61,242,0.35)] ring-1 ring-black/[0.04] transition-transform duration-300 ease-out group-hover:scale-105">
              {/* gloss highlight for depth/quality */}
              <span className="pointer-events-none absolute inset-0 rounded-[11px] bg-gradient-to-b from-white/25 via-white/0 to-black/10" />
              <span className="relative">
                <Logomark />
              </span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-[Sora] text-[19px] font-semibold tracking-tight text-[#14161F]">
                riolabz
              </span>
              <span className="mt-0.5 font-[IBM_Plex_Mono] text-[9.5px] tracking-[0.14em] uppercase text-[#8792A3]">
                Technologies
              </span>
            </span>
          </Link>

          {/* Desktop nav pill */}
          <div className="hidden md:flex items-center gap-3">
            <div
              className="flex items-center relative rounded-full border border-black/[0.06] bg-black/[0.02] px-1.5 py-1.5"
              onMouseLeave={() => setHovered(null)}
            >
              <span
                className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-[#4B3DF2] to-[#7C6AFF] shadow-[0_2px_8px_rgba(75,61,242,0.35)] transition-all duration-300 ease-out"
                style={{ left: pillStyle.left, width: pillStyle.width, opacity: pillStyle.opacity }}
              />
              {links.map((link) => {
                const active = location.pathname === link.path;
                const highlighted = (hovered ?? location.pathname) === link.path;
                return (
                  <Link
                    key={link.path}
                    ref={(el) => (navRefs.current[link.path] = el)}
                    onMouseEnter={() => setHovered(link.path)}
                    to={link.path}
                    className={`relative z-10 px-4 py-2 text-[14px] font-medium rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B3DF2] ${
                      highlighted ? 'text-white' : 'text-[#565B6B]'
                    }`}
                  >
                    {link.name}
                    {active && !highlighted && (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-0 w-1 h-1 rounded-full bg-[#4B3DF2]" />
                    )}
                  </Link>
                );
              })}
            </div>

            <span className="w-px h-6 bg-black/[0.08]" aria-hidden="true" />

            <Link
              to="/contact"
              className="group/btn relative inline-flex items-center gap-1.5 rounded-full bg-[#14161F] px-5 py-2.5 text-[14px] font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(255,90,60,0.3)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B3DF2]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#4B3DF2] to-[#FF5A3C] opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
              <span className="relative">Start a project</span>
              <ArrowUpRight
                size={15}
                strokeWidth={2.5}
                className="relative transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="md:hidden relative flex items-center justify-center w-11 h-11 rounded-full text-white bg-gradient-to-br from-[#4B3DF2] to-[#FF5A3C] shadow-[0_4px_14px_rgba(75,61,242,0.3)] transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B3DF2]"
          >
            <span className={`absolute transition-all duration-300 ease-out ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}>
              <Menu size={19} />
            </span>
            <span className={`absolute transition-all duration-300 ease-out ${isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}>
              <X size={19} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-[#FAFAFA]/[0.98] backdrop-blur-3xl transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#4B3DF2]/[0.12] blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#FF5A3C]/[0.12] blur-3xl" aria-hidden="true" />

        <div className="relative flex flex-col justify-center h-full px-8">
          <div
            className={`flex items-center gap-3 mb-10 transition-all duration-300 ease-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`}
          >
            <span className="relative flex items-center justify-center w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#4B3DF2] via-[#6D4EF5] to-[#FF5A3C] shadow-[0_4px_14px_rgba(75,61,242,0.3)]">
              <Logomark />
            </span>
            <span className="font-[Sora] text-[17px] font-semibold tracking-tight text-[#14161F]">riolabz</span>
          </div>

          <nav className="space-y-2" aria-label="Mobile navigation">
            {links.map((link, i) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-4 rounded-2xl px-5 py-4 text-[26px] font-medium tracking-tight transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B3DF2] ${
                    active ? 'text-[#14161F] bg-white shadow-sm' : 'text-[#8792A3] hover:text-[#14161F] hover:bg-white/60'
                  } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                  style={{ transitionDelay: isOpen ? `${150 + i * 75}ms` : '0ms' }}
                >
                  {link.name}
                  {active && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-gradient-to-br from-[#4B3DF2] to-[#FF5A3C]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div
            className={`mt-12 transition-all duration-300 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
            style={{ transitionDelay: isOpen ? `${150 + links.length * 75}ms` : '0ms' }}
          >
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#4B3DF2] to-[#FF5A3C] px-6 py-4 text-[17px] font-semibold text-white transition-transform duration-200 active:scale-[0.98] shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B3DF2]"
            >
              Start a project
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </Link>
            <p className="mt-6 text-center text-[14px] text-[#8792A3] leading-relaxed">
              Let's build something remarkable together.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;