import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;