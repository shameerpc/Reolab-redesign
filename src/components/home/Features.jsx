// ─── Features.jsx ───────────────────────────────────────────────
import { Blocks, Gauge, Search, Headset, Boxes } from 'lucide-react';

const features = [
  {
    icon: Blocks,
    title: 'Custom-built, not templated',
    body: 'Every product is architected around the workflow it actually needs to support.',
    highlight: true,
  },
  {
    icon: Gauge,
    title: 'Performance by default',
    body: 'Sites and apps are budgeted for speed from the first sprint, not patched afterward.',
  },
  {
    icon: Search,
    title: 'SEO-ready foundations',
    body: 'Structured markup and clean information architecture, built in from day one.',
  },
  {
    icon: Headset,
    title: '24/7 support and maintenance',
    body: 'A team that stays reachable after launch, not one that disappears at handover.',
  },
  {
    icon: Boxes,
    title: 'Scalable architecture',
    body: 'Systems designed to absorb 10× traffic and feature growth without a rebuild.',
  },
];

const Features = () => {
  return (
    <section className="relative bg-white py-28 px-6 lg:px-8 border-t border-[#E2E4EA]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl">
          <span className="font-[IBM_Plex_Mono] text-[12px] tracking-[0.14em] uppercase text-[#4B3DF2]">
            Why choose Riolabz
          </span>
          <h2 className="mt-4 font-[Sora] text-[30px] sm:text-[36px] font-semibold tracking-tight text-[#14161F]">
            Strengths that hold up past launch day.
          </h2>
          <p className="mt-3 text-[15.5px] leading-relaxed text-[#565B6B]">
            Principles embedded into every sprint — not bolted on as an
            afterthought.
          </p>
        </div>

        {/* Bento grid: first card spans 2 cols on large screens */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group rounded-2xl border border-[#E2E4EA] bg-[#F4F5F7] p-7 transition-all duration-300 hover:border-[#4B3DF2]/30 hover:bg-white hover:shadow-[0_4px_20px_rgba(75,61,242,0.06)] ${
                f.highlight ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E4EA] flex items-center justify-center transition-colors group-hover:bg-[#4B3DF2]/[0.08] group-hover:border-[#4B3DF2]/20">
                <f.icon
                  size={18}
                  className="text-[#4B3DF2]"
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="mt-5 font-[Sora] text-[15.5px] font-medium text-[#14161F]">
                {f.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#565B6B]">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;