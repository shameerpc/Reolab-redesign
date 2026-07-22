import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div className="bg-[#F4F5F7] font-[Inter]">
      <Hero />
      <Features />
      <Services />
      <Testimonials />

      {/* Closing CTA band */}
      <section className="relative overflow-hidden py-28 px-6 lg:px-8 border-t border-[#E2E4EA] bg-white">
        {/* Subtle decorative gradient orb */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#F2A93B]/[0.07] blur-3xl"
          aria-hidden="true"
        />

        <div className="relative max-w-2xl mx-auto text-center">
          <span className="inline-block rounded-full border border-[#E2E4EA] bg-[#F4F5F7] px-3.5 py-1 text-[12.5px] font-semibold uppercase tracking-widest text-[#565B6B]">
            Let's talk
          </span>

          <h2 className="mt-6 font-[Sora] text-[30px] sm:text-[38px] font-semibold tracking-tight text-[#14161F] leading-[1.15]">
            Have a project in mind?
          </h2>

          <p className="mt-4 text-[15.5px] leading-relaxed text-[#565B6B] max-w-md mx-auto">
            Tell us what you're building. We'll reply within a day with next
            steps.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#14161F] px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#1E2030] hover:shadow-[0_4px_24px_rgba(20,22,31,0.18)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2A93B]"
            >
              Start a project
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <a
              href="mailto:hello@riolabz.com"
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#565B6B] transition-colors hover:text-[#14161F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2A93B] rounded-lg px-3 py-2"
            >
              <Mail
                size={16}
                className="transition-transform duration-200 group-hover:scale-110"
              />
              hello@riolabz.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;