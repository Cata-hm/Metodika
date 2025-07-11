import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Socials from '../components/Socials';
import KeywordCarousel from '../components/KeyWordCarousel';

function MetodikaRouter() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <KeywordCarousel />
        <Testimonials />
        <Contact />
        <Socials />
      </main>
      <Footer />
    </>
  );
}

export default MetodikaRouter;