import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div className="bg-[#F4F5F7] font-[Inter] overflow-x-hidden">
      <Hero />
      <Features />
      <Services />
      <Testimonials />

      {/* Closing CTA band with cinematic image */}
      <section className="relative py-0 px-6 lg:px-8 border-t border-[#E2E4EA]">
        <div className="relative max-w-7xl mx-auto rounded-b-3xl overflow-hidden h-[400px] md:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Team collaborating"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14161F] via-[#14161F]/70 to-transparent" />
          
          <div className="relative h-full flex flex-col items-center justify-end pb-16 text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-[12.5px] font-semibold uppercase tracking-widest text-white/80 mb-6">
              Ready to start?
            </span>
            <h2 className="font-[Sora] text-[30px] sm:text-[42px] font-semibold tracking-tight text-white max-w-2xl leading-tight">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-[15.5px] text-white/70 max-w-md">
              Tell us what you're building. We'll reply within a day with next steps.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#14161F] transition-all duration-200 hover:bg-[#F4F5F7] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-[0.97]"
              >
                Start a project
                <ArrowUpRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="mailto:hello@riolabz.com"
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-white/80 hover:text-white transition-colors"
              >
                <Mail size={16} className="transition-transform group-hover:scale-110" />
                hello@riolabz.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;