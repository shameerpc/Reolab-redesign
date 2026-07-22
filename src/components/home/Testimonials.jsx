
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'They rebuilt our patient booking flow in under a quarter and it hasn\u2019t needed a hotfix since launch.',
    name: 'Operations Lead',
    org: 'Healthcare client, Kerala',
    rating: 5,
  },
  {
    quote:
      'Our checkout conversion moved within the first month. The team stayed involved well past handover.',
    name: 'Founder',
    org: 'Ecommerce client, UK',
    rating: 5,
  },
  {
    quote:
      'Clear timelines, clear pricing, and a codebase our own engineers could pick up without a wince.',
    name: 'CTO',
    org: 'Fintech client, USA',
    rating: 5,
  },
];

const getInitials = (name) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [canClick, setCanClick] = useState(true);

  // Unified navigation function with a 750ms lock to prevent breaking the CSS transition
  const changeSlide = useCallback((newIndex) => {
    if (!canClick || newIndex === activeIndex) return;
    
    setCanClick(false);
    setActiveIndex(newIndex);
    setProgress(0); // Reset progress bar on manual interaction
    
    // Unlock buttons after the CSS transition finishes (700ms) + 50ms buffer
    setTimeout(() => setCanClick(true), 750);
  }, [canClick, activeIndex]);

  const next = useCallback(() => {
    changeSlide((activeIndex + 1) % testimonials.length);
  }, [changeSlide, activeIndex]);

  const prev = useCallback(() => {
    changeSlide((activeIndex - 1 + testimonials.length) % testimonials.length);
  }, [changeSlide, activeIndex]);

  const goTo = useCallback((idx) => {
    changeSlide(idx);
  }, [changeSlide]);

  // Auto-advance timer using functional state updates so it never gets stale
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1.67; // ~6000ms total
        if (nextProgress >= 100) {
          // Advance slide without needing to read stale `activeIndex` state
          setActiveIndex((currentIdx) => (currentIdx + 1) % testimonials.length);
          return 0;
        }
        return nextProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [paused]); // Intentionally omitting activeIndex to prevent timer resets on slide change

  const active = testimonials[activeIndex];

  return (
    <section className="relative bg-white py-28 sm:py-36 px-6 lg:px-8 border-t border-[#E2E4EA] overflow-hidden">
      {/* Atmospheric background glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#4B3DF2]/[0.03] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="flex justify-center">
          <span className="font-[IBM_Plex_Mono] text-[12px] tracking-[0.14em] uppercase text-[#4B3DF2]">
            Client stories
          </span>
        </div>

        {/* Giant decorative quotation mark */}
        <div className="relative flex justify-center mt-8 mb-2" aria-hidden="true">
          <svg 
            width="80" 
            height="64" 
            viewBox="0 0 80 64" 
            fill="none" 
            className="w-16 sm:w-20 text-[#4B3DF2]/10"
          >
            <path 
              d="M0 64H20C20 64 20 44 20 34C20 14 30 4 50 4V24C40 24 40 34 40 34V44H20V64H0ZM40 64H60C60 64 60 44 60 34C60 14 70 4 80 4V24C70 24 70 34 70 34V44H60V64H40Z" 
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Main Quote Area with Crossfade */}
        <div 
          className="relative min-h-[180px] sm:min-h-[150px] lg:min-h-[130px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-live="polite"
        >
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-out ${
                idx === activeIndex
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-4 opacity-0 scale-[0.98]'
              }`}
              aria-hidden={idx !== activeIndex}
            >
              <h3 className="font-[Sora] text-[24px] sm:text-[32px] lg:text-[40px] font-medium tracking-tight leading-[1.2] text-center text-[#14161F]">
                &ldquo;{t.quote}&rdquo;
              </h3>
            </div>
          ))}
        </div>

        {/* Author & Rating Crossfade */}
        <div className="relative h-24 sm:h-20 flex flex-col items-center justify-start mt-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`absolute inset-x-0 flex flex-col items-center transition-all duration-700 delay-100 ease-out ${
                idx === activeIndex
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-2 opacity-0'
              }`}
              aria-hidden={idx !== activeIndex}
            >
              {/* Star Rating */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-[#F2A93B] fill-[#F2A93B]"
                  />
                ))}
              </div>

              {/* Author Chip */}
              <div className="inline-flex items-center gap-3 bg-[#F4F5F7] border border-[#E2E4EA] rounded-full pl-1.5 pr-5 py-1.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4B3DF2] to-[#FF5A3C] flex items-center justify-center text-white text-[11px] font-bold shadow-sm">
                  {getInitials(t.name)}
                </div>
                <div className="flex flex-col">
                  <span className="text-[13.5px] font-semibold text-[#14161F] leading-tight">
                    {t.name}
                  </span>
                  <span className="text-[12px] text-[#565B6B] leading-tight">
                    {t.org}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Progress Bar */}
        <div className="mt-10 flex justify-center">
          <div className={`w-48 h-[3px] rounded-full bg-[#E2E4EA] overflow-hidden transition-opacity ${paused ? 'opacity-30' : 'opacity-100'}`}>
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#4B3DF2] to-[#FF5A3C]"
              style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
            />
          </div>
        </div>

        {/* Controls Container - z-20 ensures click zones don't block buttons */}
        <div className="relative z-20 mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={!canClick}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full border border-[#E2E4EA] bg-white flex items-center justify-center text-[#565B6B] hover:text-[#14161F] hover:border-[#14161F] hover:bg-[#F4F5F7] hover:shadow-sm transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B3DF2]"
          >
            <ChevronLeft size={18} />
          </button>
          
          <div className="flex items-center gap-2" role="tablist">
            {testimonials.map((t, idx) => (
              <button
                key={t.name}
                onClick={() => goTo(idx)}
                role="tab"
                aria-selected={idx === activeIndex}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'w-8 bg-[#4B3DF2]'
                    : 'w-2 bg-[#E2E4EA] hover:bg-[#B0B5C3]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={!canClick}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full border border-[#E2E4EA] bg-white flex items-center justify-center text-[#565B6B] hover:text-[#14161F] hover:border-[#14161F] hover:bg-[#F4F5F7] hover:shadow-sm transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B3DF2]"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Hidden Click Zones for Desktop Navigation - z-10 keeps them behind the buttons */}
      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="hidden lg:block absolute top-0 left-0 w-1/3 h-full cursor-w-resize z-10"
      />
      <button
        onClick={next}
        aria-label="Next testimonial"
        className="hidden lg:block absolute top-0 right-0 w-1/3 h-full cursor-e-resize z-10"
      />
    </section>
  );
};

export default Testimonials;