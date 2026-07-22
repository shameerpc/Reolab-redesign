import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm mb-8">
          #1 IT Solutions Provider in Kerala
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight">
          We Build <br />
          <span className="text-gradient">Digital Futures</span>
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Transforming complex business logic into elegant, scalable, and robust technological solutions.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button>Explore Services</Button>
          <Button variant="outline">Contact Us</Button>
        </div>

        {/* Abstract floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-500/30 rounded-lg animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-indigo-500/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default Hero;