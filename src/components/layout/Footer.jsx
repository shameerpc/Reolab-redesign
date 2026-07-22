import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold text-white mb-4">Riolabz<span className="text-indigo-400">.tech</span></h3>
          <p className="text-slate-400 text-sm leading-relaxed">Pioneering the future of software development with cutting-edge IT solutions.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Web Development</li>
            <li>App Development</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>contact@riolabz.com</li>
            <li>+91 9746754664</li>
            <li>Kerala, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Riolabz Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;