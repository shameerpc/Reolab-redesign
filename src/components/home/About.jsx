import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, PenTool, Code2, Rocket } from 'lucide-react';

const process = [
  { n: '01', icon: Compass, title: 'Discover and plan', body: 'We map requirements, users, and constraints into a strategy before any design work starts.' },
  { n: '02', icon: PenTool, title: 'Design and prototype', body: 'Flows and interfaces are tested in low fidelity, then refined into a working prototype.' },
  { n: '03', icon: Code2, title: 'Develop and test', body: 'Features ship in reviewed increments with rigorous QA at every stage, not just at the end.' },
  { n: '04', icon: Rocket, title: 'Launch and support', body: 'We deploy, watch the metrics that matter, and stay on for maintenance after go-live.' },
];

const values = [
  { title: 'Proven across global markets', body: 'A decade-plus delivering for clients across Kerala, the UK, and the USA.' },
  { title: 'Built for scale and performance', body: 'Architecture decisions are made for the traffic you\u2019ll have in year three, not just launch week.' },
  { title: 'Transparent by default', body: 'Fixed check-ins, visible timelines, and pricing that doesn\u2019t move once a scope is agreed.' },
  { title: 'A long-term partner mindset', body: 'Most engagements continue past launch into ongoing support and iteration.' },
];

const About = () => {
  return (
    <div className="bg-[#F4F5F7]">
      {/* Intro */}
      <section className="pt-40 pb-20 px-6 lg:px-8 border-b border-[#E2E4EA]">
        <div className="max-w-4xl mx-auto">
          <span className="font-[IBM_Plex_Mono] text-[12px] tracking-[0.14em] uppercase text-[#4B3DF2]">
            About Riolabz
          </span>
          <h1 className="mt-4 font-[Sora] font-semibold text-[34px] sm:text-[44px] leading-[1.15] tracking-tight text-[#14161F]">
            A technology partner, not a one-off vendor.
          </h1>
          <p className="mt-6 text-[16.5px] leading-relaxed text-[#565B6B] max-w-2xl">
            Riolabz is a global web design and development company delivering
            custom websites, scalable software, and digital platforms for
            businesses across Kerala, the UK, and the USA. Our offshore
            delivery model helps startups and enterprises build reliable
            products with speed and cost efficiency.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
            {[
              ['12+', 'years of excellence'],
              ['500+', 'projects delivered'],
              ['300+', 'happy clients'],
              ['100%', 'in-house delivery'],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-[Sora] text-[26px] font-semibold text-[#14161F]">{v}</p>
                <p className="mt-1 text-[12.5px] text-[#565B6B] leading-snug">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-8 bg-white border-b border-[#E2E4EA]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[Sora] text-[26px] sm:text-[30px] font-semibold tracking-tight text-[#14161F] max-w-lg">
            Why businesses choose to stay with us
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {values.map((v, idx) => (
              <div key={v.title} className="flex gap-4">
                <span className="font-[IBM_Plex_Mono] text-[13px] text-[#4B3DF2] pt-1">{String(idx + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-[Sora] text-[16px] font-medium text-[#14161F]">{v.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[#565B6B]">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 lg:px-8 border-b border-[#E2E4EA]">
        <div className="max-w-4xl mx-auto">
          <span className="font-[IBM_Plex_Mono] text-[12px] tracking-[0.14em] uppercase text-[#4B3DF2]">
            How we work
          </span>
          <h2 className="mt-4 font-[Sora] text-[26px] sm:text-[30px] font-semibold tracking-tight text-[#14161F]">
            A process built for momentum.
          </h2>

          <div className="mt-12 relative">
            <div className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-[#4B3DF2] via-[#FF5A3C] to-transparent" aria-hidden="true" />
            <div className="space-y-9">
              {process.map((step) => (
                <div key={step.n} className="relative pl-16">
                  <span className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white border border-[#E2E4EA] flex items-center justify-center">
                    <step.icon size={18} className="text-[#4B3DF2]" strokeWidth={1.8} />
                  </span>
                  <p className="font-[IBM_Plex_Mono] text-[11px] text-[#565B6B]">{step.n}</p>
                  <h3 className="font-[Sora] text-[17px] font-medium text-[#14161F]">{step.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[#565B6B] max-w-md">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 text-center">
        <h2 className="font-[Sora] text-[26px] sm:text-[30px] font-semibold tracking-tight text-[#14161F]">
          Want to see how we'd approach your project?
        </h2>
        <Link
          to="/contact"
          className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-[#14161F] px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Talk to the team
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </Link>
      </section>
    </div>
  );
};

export default About;