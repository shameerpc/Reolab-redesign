import { useState } from 'react';
import { Phone, MapPin, ArrowUpRight } from 'lucide-react';

const offices = [
  { region: 'Kerala', address: 'Second Floor, Malikayal Towers, N.H. Bypass, AKG Vayanashala Rd, Chakkaraparambu, Vennala, Ernakulam', phones: ['+91 70344 48855', '+91 97467 54664'] },
  { region: 'USA', address: '340 S Lemon Ave #7160, Walnut, CA 91789, United States', phones: ['+1 925 239 1299'] },
  { region: 'UK', address: 'P.O. Box 316, Ashton-Under-Lyne, Manchester, UK OL6 0GR', phones: ['+44 7475 939216'] },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F4F5F7]">
      <section className="pt-40 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-14">
          {/* Left: intro + offices */}
          <div>
            <span className="font-[IBM_Plex_Mono] text-[12px] tracking-[0.14em] uppercase text-[#4B3DF2]">
              Get in touch
            </span>
            <h1 className="mt-4 font-[Sora] font-semibold text-[32px] sm:text-[40px] leading-[1.15] tracking-tight text-[#14161F]">
              Let's build something that lasts.
            </h1>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[#565B6B] max-w-md">
              Tell us about your project and we'll reply within a day with
              next steps, no obligation.
            </p>

            <div className="mt-12 space-y-6">
              {offices.map((o) => (
                <div key={o.region} className="rounded-2xl border border-[#E2E4EA] bg-white p-6">
                  <h3 className="font-[Sora] text-[15px] font-medium text-[#14161F]">{o.region}</h3>
                  <p className="mt-2 flex gap-2 text-[13.5px] leading-relaxed text-[#565B6B]">
                    <MapPin size={15} className="shrink-0 mt-0.5 text-[#565B6B]" />
                    {o.address}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {o.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s/g, '')}`}
                        className="flex items-center gap-1.5 text-[13.5px] font-medium text-[#14161F] hover:text-[#4B3DF2] transition-colors"
                      >
                        <Phone size={14} />
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-[#E2E4EA] bg-white p-8 sm:p-10 h-fit">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-[#4B3DF2]/[0.08] flex items-center justify-center mx-auto">
                  <ArrowUpRight size={20} className="text-[#4B3DF2]" />
                </div>
                <h3 className="mt-5 font-[Sora] text-[19px] font-medium text-[#14161F]">Message sent</h3>
                <p className="mt-2 text-[14px] text-[#565B6B]">We'll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="text-[13px] font-medium text-[#14161F]">First name</span>
                    <input
                      required
                      type="text"
                      className="mt-1.5 w-full rounded-xl border border-[#E2E4EA] px-4 py-2.5 text-[14.5px] text-[#14161F] outline-none focus:border-[#4B3DF2] transition-colors"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[13px] font-medium text-[#14161F]">Last name</span>
                    <input
                      required
                      type="text"
                      className="mt-1.5 w-full rounded-xl border border-[#E2E4EA] px-4 py-2.5 text-[14.5px] text-[#14161F] outline-none focus:border-[#4B3DF2] transition-colors"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-[13px] font-medium text-[#14161F]">Email address</span>
                  <input
                    required
                    type="email"
                    className="mt-1.5 w-full rounded-xl border border-[#E2E4EA] px-4 py-2.5 text-[14.5px] text-[#14161F] outline-none focus:border-[#4B3DF2] transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="text-[13px] font-medium text-[#14161F]">Phone number</span>
                  <input
                    type="tel"
                    className="mt-1.5 w-full rounded-xl border border-[#E2E4EA] px-4 py-2.5 text-[14.5px] text-[#14161F] outline-none focus:border-[#4B3DF2] transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="text-[13px] font-medium text-[#14161F]">Message</span>
                  <textarea
                    required
                    rows={4}
                    className="mt-1.5 w-full rounded-xl border border-[#E2E4EA] px-4 py-2.5 text-[14.5px] text-[#14161F] outline-none focus:border-[#4B3DF2] transition-colors resize-none"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-[#14161F] px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.98]"
                >
                  Send message
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;