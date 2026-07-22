import SectionTitle from '../common/SectionTitle';

const About = () => {
  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Abstract Visual Representation */}
        <div className="relative h-[400px] bg-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden flex items-center justify-center">
          <div className="w-40 h-40 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-3xl rotate-12 opacity-50 blur-sm absolute top-10 left-10"></div>
          <div className="w-32 h-32 bg-slate-900 rounded-2xl -rotate-12 border border-slate-600 z-10 flex items-center justify-center text-5xl font-bold text-gradient">R</div>
        </div>

        {/* Content */}
        <div>
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            Engineering <span className="text-gradient">Excellence</span>
          </h2>
          <p className="mt-6 text-slate-400 leading-relaxed">
            At Riolabz, we don't just write code; we architect digital experiences. Our team of elite developers and designers work meticulously to transform your vision into a digital reality that dominates the market.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-10">
            {stats.map((stat, i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;