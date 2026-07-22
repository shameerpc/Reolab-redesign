
import { Link } from 'react-router-dom';
import { ArrowUpRight, PlayCircle } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const stats = [
  { value: '12+', label: 'years building' },
  { value: '500+', label: 'projects delivered' },
  { value: '300+', label: 'happy clients' },
  { value: '99.9%', label: 'client satisfaction' },
];

const Hero = () => {
  const [textRef, textVisible] = useScrollReveal();
  const [imgRef, imgVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();

  return (
    <section className="relative bg-[#F4F5F7] pt-36 pb-20 px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#4B3DF2]/[0.06] blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FF5A3C]/[0.05] blur-[100px]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        
        {/* Left Column */}
        <div
          ref={textRef}
          className={`transition-all duration-1000 ease-out ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 font-[IBM_Plex_Mono] text-[12px] tracking-[0.14em] uppercase text-[#565B6B] border border-[#E2E4EA] bg-white rounded-full px-4 py-1.5 shadow-sm">
            Web · mobile · cloud — Kerala, UK, USA
          </span>

          <h1 className="mt-7 font-[Sora] font-semibold text-[38px] leading-[1.1] sm:text-[48px] lg:text-[54px] tracking-tight text-[#14161F]">
            Digital products that{' '}
            <span className="bg-gradient-to-r from-[#4B3DF2] to-[#FF5A3C] bg-clip-text text-transparent">
              scale
            </span>{' '}
            with the business behind them.
          </h1>

          <p className="mt-6 text-[17px] leading-relaxed text-[#565B6B] max-w-lg">
            Riolabz designs and builds websites, apps, and cloud platforms combining strategy, UX, and modern engineering.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#14161F] px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#1E2030] hover:shadow-[0_4px_24px_rgba(20,22,31,0.18)] active:scale-[0.97]"
            >
              Start a project
              <ArrowUpRight size={16} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#14161F] transition-colors hover:text-[#4B3DF2]">
              <PlayCircle size={20} strokeWidth={1.8} className="transition-transform duration-200 group-hover:scale-110" />
              See client stories
            </button>
          </div>
        </div>

        {/* Right Column: Asymmetric Image Composition */}
        <div
          ref={imgRef}
          className={`relative transition-all duration-1000 delay-300 ease-out ${
            imgVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative w-full max-w-lg ml-auto">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Data analytics dashboard"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14161F]/40 to-transparent" />
            </div>

            {/* Floating Live Build Card */}
            <div className="absolute -bottom-8 -left-8 w-72 bg-white/90 backdrop-blur-xl rounded-2xl border border-[#E2E4EA] p-5 shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-4">
                <p className="font-[IBM_Plex_Mono] text-[11px] tracking-[0.12em] uppercase text-[#565B6B]">Live build</p>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[#22C55E] animate-ping opacity-40" />
                  <span className="relative rounded-full h-2 w-2 bg-[#22C55E]" />
                </span>
              </div>
              <div className="space-y-2.5">
                {[
                  { name: 'Sabine Hospital', progress: 78 },
                  { name: 'Jerucap', progress: 45 },
                ].map((p) => (
                  <div key={p.name}>
                    <div className="flex justify-between text-[12px] mb-1">
                      <span className="font-medium text-[#14161F]">{p.name}</span>
                      <span className="text-[#4B3DF2] tabular-nums">{p.progress}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-[#E2E4EA] overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#4B3DF2] to-[#7C6AFF]" style={{ width: `${p.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Small floating avatar stack (top right) */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full px-3 py-1.5 shadow-lg border border-[#E2E4EA] flex items-center gap-2">
              <div className="flex -space-x-2">
                {['bg-[#4B3DF2]', 'bg-[#FF5A3C]', 'bg-[#F2A93B]'].map((bg, i) => (
                  <div key={i} className={`w-6 h-6 rounded-full ${bg} border-2 border-white`} />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-[#14161F] pr-1">+300</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        ref={statsRef}
        className={`relative max-w-4xl mx-auto mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white rounded-2xl border border-[#E2E4EA] p-6 shadow-sm transition-all duration-1000 delay-500 ease-out ${
          statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {stats.map((s, idx) => (
          <div key={s.label} className={idx > 0 ? 'sm:border-l sm:border-[#E2E4EA] sm:pl-6' : ''}>
            <p className="font-[Sora] text-[28px] font-bold text-[#14161F]">{s.value}</p>
            <p className="mt-1 text-[12.5px] text-[#565B6B] leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;