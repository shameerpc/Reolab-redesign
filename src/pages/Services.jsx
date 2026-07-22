import Card from '../components/common/Card';

const Services = () => {
  const detailedServices = [
    { 
      title: "Custom Web Development", 
      desc: "From single-page applications (SPA) to complex enterprise portals, we use React, Next.js, and Node.js to build highly performant web ecosystems.",
      tech: ["React", "Node.js", "PostgreSQL"]
    },
    { 
      title: "Mobile Application Development", 
      desc: "Seamless native experiences for iOS and Android using React Native and Flutter, reducing development time without compromising quality.",
      tech: ["React Native", "Flutter", "Swift"]
    },
    { 
      title: "Cloud & DevOps", 
      desc: "We architect, migrate, and manage your cloud infrastructure on AWS, Azure, or GCP with automated CI/CD pipelines.",
      tech: ["AWS", "Docker", "Kubernetes"]
    },
    { 
      title: "UI/UX Design", 
      desc: "User-centric design thinking that translates complex workflows into intuitive, beautiful interfaces.",
      tech: ["Figma", "Framer", "Prototyping"]
    }
  ];

  return (
    <>
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        <h1 className="text-5xl md:text-7xl font-bold relative z-10 text-gradient">Our Services</h1>
        <p className="mt-6 text-slate-400 max-w-xl mx-auto relative z-10">Comprehensive tech solutions under one roof.</p>
      </section>

      <section className="pb-24 px-6 max-w-6xl mx-auto space-y-8">
        {detailedServices.map((service, i) => (
          <Card key={i} className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              {service.tech.map((t, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                  {t}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </section>
    </>
  );
};

export default Services;