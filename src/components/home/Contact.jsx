import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const Contact = () => {
  return (
    <section className="py-24 px-6" id="contact">
      <SectionTitle subtitle="Get In Touch" title="Let's Talk" description="Have a project in mind? Let's make it happen." />
      
      <form className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-6">
          <input type="text" placeholder="Full Name" className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-white placeholder-slate-500" />
          <input type="email" placeholder="Email Address" className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-white placeholder-slate-500" />
        </div>
        <input type="text" placeholder="Subject" className="w-full mt-6 bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-white placeholder-slate-500" />
        <textarea rows="5" placeholder="Your Message" className="w-full mt-6 bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors text-white placeholder-slate-500 resize-none"></textarea>
        
        <div className="mt-8 text-center">
          <Button type="submit" className="w-full md:w-auto">Send Message</Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;