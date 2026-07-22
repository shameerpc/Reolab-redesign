import ContactSection from '../components/home/Contact';

const Contact = () => {
  return (
    <>
      <section className="pt-32 pb-10 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]"></div>
        <h1 className="text-5xl md:text-7xl font-bold relative z-10 text-gradient">Contact</h1>
        <p className="mt-6 text-slate-400 max-w-xl mx-auto relative z-10">Let's start a conversation.</p>
      </section>
      <ContactSection />
    </>
  );
};

export default Contact;