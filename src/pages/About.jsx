import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const About = () => {
  const values = [
    { title: "Innovation", desc: "Staying ahead of the tech curve." },
    { title: "Quality", desc: "Code that is clean, tested, and robust." },
    { title: "Transparency", desc: "Open communication at every stage." },
  ];

  return (
    <>
      {/* Inner Page Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
        <h1 className="text-5xl md:text-7xl font-bold relative z-10 text-gradient">About Us</h1>
        <p className="mt-6 text-slate-400 max-w-xl mx-auto relative z-10">The story behind the code.</p>
      </section>

      {/* Content */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Founded with a passion for technology, Riolabz Technologies set out to bridge the gap between complex business requirements and elegant software solutions.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We believe that great software isn't just about writing code; it's about understanding human needs and crafting digital tools that empower businesses to achieve their maximum potential.
            </p>
            <div className="mt-8">
              <Link to="/contact"><Button>Work With Us</Button></Link>
            </div>
          </div>
          <div className="bg-slate-800/30 rounded-3xl h-[400px] border border-slate-700/50 flex items-center justify-center text-6xl font-bold text-gradient">
            Since 2014
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <Card key={i} className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
              <p className="text-slate-400 text-sm">{val.desc}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;