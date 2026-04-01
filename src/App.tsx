/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Results from './components/Results';
import Reviews from './components/Reviews';
import VisitUs from './components/VisitUs';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-secondary text-dark font-body selection:bg-primary/30 selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Reviews />
        <VisitUs />
        <Booking />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
