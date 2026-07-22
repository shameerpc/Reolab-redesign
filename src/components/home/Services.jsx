import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import { FiCode, FiSmartphone, FiCloud, FiDatabase } from 'react-icons/fi';

const services = [
  { icon: <FiCode size={32} />, title: "Web Development", desc: "React, Node.js, and modern frameworks to build blazing fast web apps." },
  { icon: <FiSmartphone size={32} />, title: "Mobile Apps", desc: "Native and cross-platform mobile applications for iOS and Android." },
  { icon: <FiCloud size={32} />, title: "Cloud Architecture", desc: "Scalable AWS and Azure cloud infrastructures tailored for you." },
  { icon: <FiDatabase size={32} />, title: "AI & Data", desc: "Machine learning models and data pipelines to drive insights." },
];

const Services = () => {
  return (
    <section className="py-24 px-6" id="services">
      <SectionTitle subtitle="What We Do" title="Core Services" description="End-to-end technology solutions designed to elevate your business." />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <Card key={i} className="group text-center hover:-translate-y-2">
            <div className="inline-flex p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;