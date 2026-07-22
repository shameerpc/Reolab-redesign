// ─── Hero.jsx ───────────────────────────────────────────────────
import { Link } from 'react-router-dom';
import { ArrowUpRight, PlayCircle } from 'lucide-react';

const stats = [
  { value: '12+', label: 'years building' },
  { value: '500+', label: 'projects delivered' },
  { value: '300+', label: 'happy clients' },
  { value: '99.9%', label: 'client satisfaction' },
];

const Hero = () => {
  return (
    <section className="relative bg-[#F4F5F7] pt-40 pb-28 px-6 lg:px-8 overflow-hidden">
      {/* Atmospheric gradient orbs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#4B3DF2]/[0.06] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#FF5A3C]/[0.05] blur-[100px]"
        aria-hidden="true"
      />

      {/* Signature wave line */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1400 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M-50 480C160 480 160 260 380 260C600 260 600 560 820 560C1040 560 1040 200 1260 200C1350 200 1360 220 1450 220"
          stroke="url(#heroGrad)"
          strokeWidth="1.5"
          fill="none"
        />
        <defs>
          <linearGradient
            id="heroGrad"
            x1="0"
            y1="0"
            x2="1400"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4B3DF2" stopOpacity="0" />
            <stop offset="0.25" stopColor="#4B3DF2" />
            <stop offset="0.75" stopColor="#FF5A3C" />
            <stop offset="1" stopColor="#FF5A3C" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-start">
        {/* Left column */}
        <div>
          <span className="inline-flex items-center gap-2 font-[IBM_Plex_Mono] text-[12px] tracking-[0.14em] uppercase text-[#565B6B] border border-[#E2E4EA] bg-white rounded-full px-4 py-1.5">
            Web · mobile · cloud — Kerala, UK, USA
          </span>

          <h1 className="mt-7 font-[Sora] font-semibold text-[38px] leading-[1.12] sm:text-[48px] lg:text-[56px] tracking-tight text-[#14161F]">
            Digital products that{' '}
            <span className="bg-gradient-to-r from-[#4B3DF2] to-[#FF5A3C] bg-clip-text text-transparent">
              scale
            </span>{' '}
            with the business behind them.
          </h1>

          <p className="mt-6 text-[17px] leading-relaxed text-[#565B6B] max-w-xl">
            Riolabz designs and builds websites, apps, and cloud platforms for
            startups and enterprises across Kerala, the UK, and the USA —
            combining strategy, UX, and modern engineering in one team.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#14161F] px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#1E2030] hover:shadow-[0_4px_24px_rgba(20,22,31,0.18)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B3DF2]"
            >
              Start a project
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <button className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#14161F] transition-colors hover:text-[#4B3DF2] rounded-lg px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B3DF2]">
              <PlayCircle
                size={20}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:scale-110"
              />
              See client stories
            </button>
          </div>

          {/* Stats with vertical dividers */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-y-6 max-w-lg">
            {stats.map((s, idx) => (
              <div
                key={s.label}
                className={
                  idx > 0 ? 'sm:border-l sm:border-[#E2E4EA] sm:pl-6' : ''
                }
              >
                <p className="font-[Sora] text-[26px] font-semibold text-[#14161F]">
                  {s.value}
                </p>
                <p className="mt-1 text-[12.5px] text-[#565B6B] leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: live build panel */}
        <div className="relative lg:sticky lg:top-28">
          <div className="rounded-3xl border border-[#E2E4EA] bg-white overflow-hidden shadow-[0_1px_2px_rgba(20,22,31,0.04),0_8px_40px_rgba(20,22,31,0.06)] transition-shadow duration-300 hover:shadow-[0_1px_2px_rgba(20,22,31,0.04),0_12px_48px_rgba(20,22,31,0.1)]">
            {/* Accent top line */}
            <div className="h-[2px] bg-gradient-to-r from-[#4B3DF2] to-[#FF5A3C]" />

            <div className="p-7">
              <div className="flex items-center gap-2">
                <p className="font-[IBM_Plex_Mono] text-[11px] tracking-[0.12em] uppercase text-[#565B6B]">
                  Currently in build
                </p>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[#4B3DF2] animate-ping opacity-40" />
                  <span className="relative rounded-full h-2 w-2 bg-[#4B3DF2]" />
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { name: 'Sabine Hospital', tag: 'Patient portal', progress: 78 },
                  { name: 'Jerucap', tag: 'Financial platform', progress: 45 },
                  { name: '24liveyard', tag: 'Rental marketplace', progress: 92 },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="rounded-xl border border-[#E2E4EA] px-4 py-3.5 transition-colors hover:border-[#4B3DF2]/30 hover:bg-[#4B3DF2]/[0.02]"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-[Sora] text-[14.5px] font-medium text-[#14161F]">
                          {p.name}
                        </p>
                        <p className="text-[12.5px] text-[#565B6B]">{p.tag}</p>
                      </div>
                      <span className="text-[12px] font-medium text-[#4B3DF2] tabular-nums">
                        {p.progress}%
                      </span>
                    </div>
                    <div className="mt-2.5 h-1 rounded-full bg-[#E2E4EA] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#4B3DF2] to-[#7C6AFF] transition-[width] duration-700 ease-out"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-[#E2E4EA] flex items-center justify-between">
                <p className="text-[13px] text-[#565B6B]">Avg. delivery cycle</p>
                <p className="font-[Sora] text-[14.5px] font-semibold text-[#14161F]">
                  10–14 weeks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;