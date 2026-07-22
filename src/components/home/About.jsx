
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, PenTool, Code2, Rocket } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const process = [
  { n: '01', icon: Compass, title: 'Discover and plan', body: 'We map requirements, users, and constraints into a strategy.' },
  { n: '02', icon: PenTool, title: 'Design and prototype', body: 'Flows and interfaces are tested in low fidelity, then refined.' },
  { n: '03', icon: Code2, title: 'Develop and test', body: 'Features ship in reviewed increments with rigorous QA.' },
  { n: '04', icon: Rocket, title: 'Launch and support', body: 'We deploy, watch metrics, and stay on for maintenance.' },
];

const About = () => {
  const [imgRef, imgVisible] = useScrollReveal();
  const [procRef, procVisible] = useScrollReveal();

  return (
    <div className="bg-[#F4F5F7]">
      {/* Cinematic Image Banner */}
      <section className="px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div ref={imgRef} className={`relative rounded-3xl overflow-hidden aspect-[21/9] shadow-2xl transition-all duration-1000 ${imgVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              alt="Team planning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#14161F]/80 via-[#14161F]/40 to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-lg">
              <span className="font-[IBM_Plex_Mono] text-[12px] tracking-[0.14em] uppercase text-[#F2A93B]">About Riolabz</span>
              <h1 className="mt-3 font-[Sora] font-semibold text-[28px] md:text-[44px] leading-tight tracking-tight text-white">
                A technology partner, not a one-off vendor.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-6 lg:px-8 bg-white border-y border-[#E2E4EA]">
        <div className="max-w-5xl mx-auto">
          <div ref={procRef} className={`transition-all duration-700 ${procVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="font-[IBM_Plex_Mono] text-[12px] tracking-[0.14em] uppercase text-[#4B3DF2]">How we work</span>
            <h2 className="mt-4 font-[Sora] text-[26px] sm:text-[30px] font-semibold tracking-tight text-[#14161F]">A process built for momentum.</h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div
                key={step.n}
                className={`relative p-6 rounded-2xl border border-[#E2E4EA] bg-[#F4F5F7] transition-all duration-700 hover:shadow-lg hover:border-[#4B3DF2]/30 ${
                  procVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <span className="font-[IBM_Plex_Mono] text-[32px] font-bold text-[#E2E4EA] absolute top-4 right-4">{step.n}</span>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E4EA] flex items-center justify-center mb-4">
                  <step.icon size={18} className="text-[#4B3DF2]" strokeWidth={1.8} />
                </div>
                <h3 className="font-[Sora] text-[16px] font-medium text-[#14161F] relative z-10">{step.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#565B6B] relative z-10">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;