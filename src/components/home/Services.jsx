
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const services = [
  { title: 'Web design and development', body: 'Marketing sites, portals, and web apps built on modern, maintainable stacks.', href: '/services/web-design-and-development', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop' },
  { title: 'Ecommerce development', body: 'Storefronts that convert, with catalog, payment, and fulfillment wired in cleanly.', href: '/services/ecommerce-website-development', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Mobile app development', body: 'iOS and Android apps aligned to the same business goals.', href: '/services/mobile-application-development', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop' },
  { title: 'SEO and digital marketing', body: 'Technical SEO, content, and campaigns that compound.', href: '/services/seo-digital-marketing', img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop' },
  { title: 'Hosting and server management', body: 'Managed infrastructure so uptime is never a side project.', href: '/services/hosting-and-server-management', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Video creation services', body: 'Product, brand, and social video produced to match your presence.', href: '/services/video-creation-services', img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop' },
];

const Services = () => {
  const [headRef, headVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <section className="relative bg-[#F4F5F7] py-28 px-6 lg:px-8 border-t border-[#E2E4EA]">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="max-w-xl">
            <span className="font-[IBM_Plex_Mono] text-[12px] tracking-[0.14em] uppercase text-[#4B3DF2]">What we do</span>
            <h2 className="mt-4 font-[Sora] text-[30px] sm:text-[36px] font-semibold tracking-tight text-[#14161F]">Six services, one accountable team.</h2>
          </div>
          <Link to="/services" className="group inline-flex items-center gap-1.5 text-[14.5px] font-medium text-[#14161F] hover:text-[#4B3DF2] transition-colors shrink-0">
            View all services <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div ref={gridRef} className={`mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {services.map((s, i) => (
            <Link
              key={s.title}
              to={s.href}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E2E4EA] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-transparent hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image Header */}
              <div className="h-44 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 h-44 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="font-[Sora] text-[17px] font-medium text-[#14161F] group-hover:text-[#4B3DF2] transition-colors">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#565B6B]">{s.body}</p>
                
                <div className="mt-5 flex items-center gap-1.5 text-[13px] font-medium text-[#4B3DF2] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;