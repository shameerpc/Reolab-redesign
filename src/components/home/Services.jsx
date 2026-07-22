// ─── Services.jsx ───────────────────────────────────────────────
import { Link } from 'react-router-dom';
import {
  Globe,
  ShoppingCart,
  Server,
  TrendingUp,
  Smartphone,
  Video,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web design and development',
    body: 'Marketing sites, portals, and web apps built on modern, maintainable stacks.',
    href: '/services/web-design-and-development',
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce development',
    body: 'Storefronts that convert, with catalog, payment, and fulfillment wired in cleanly.',
    href: '/services/ecommerce-website-development',
  },
  {
    icon: Smartphone,
    title: 'Mobile app development',
    body: 'iOS and Android apps aligned to the same business goals as the rest of the product.',
    href: '/services/mobile-application-development',
  },
  {
    icon: TrendingUp,
    title: 'SEO and digital marketing',
    body: 'Technical SEO, content, and campaigns that compound instead of resetting monthly.',
    href: '/services/seo-digital-marketing',
  },
  {
    icon: Server,
    title: 'Hosting and server management',
    body: 'Managed infrastructure so uptime and patching are never someone\u2019s side project.',
    href: '/services/hosting-and-server-management',
  },
  {
    icon: Video,
    title: 'Video creation services',
    body: 'Product, brand, and social video produced to match the rest of your presence.',
    href: '/services/video-creation-services',
  },
];

const Services = () => {
  return (
    <section className="relative bg-[#F4F5F7] py-28 px-6 lg:px-8 border-t border-[#E2E4EA]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-[IBM_Plex_Mono] text-[12px] tracking-[0.14em] uppercase text-[#4B3DF2]">
              What we do
            </span>
            <h2 className="mt-4 font-[Sora] text-[30px] sm:text-[36px] font-semibold tracking-tight text-[#14161F]">
              Six services, one accountable team.
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-1.5 text-[14.5px] font-medium text-[#14161F] hover:text-[#4B3DF2] transition-colors shrink-0 rounded-lg px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B3DF2]"
          >
            View all services
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className="group rounded-2xl border border-[#E2E4EA] bg-white p-7 transition-all duration-300 hover:border-[#4B3DF2]/40 hover:shadow-[0_4px_24px_rgba(75,61,242,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B3DF2]"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#4B3DF2]/[0.08] flex items-center justify-center transition-colors group-hover:bg-[#4B3DF2]/[0.14]">
                  <s.icon
                    size={20}
                    className="text-[#4B3DF2]"
                    strokeWidth={1.8}
                  />
                </div>
                <ArrowRight
                  size={16}
                  className="text-[#4B3DF2] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                />
              </div>
              <h3 className="mt-6 font-[Sora] text-[17px] font-medium text-[#14161F]">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[#565B6B]">
                {s.body}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;