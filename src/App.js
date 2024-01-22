import logo from './logo.svg';
import React from 'react';
import AboutSection from './AboutSection';
import NavigationBar from './NavigationBar';
import HeroSection from './HeroSection';
import PortfolioSection from './PortfolioSection';
import TestimonialsSection from './TestimonialsSection';
import ContactForm from './ContactForm';
import Footer from './Footer';

// import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';
// import Alert from 'react-bootstrap/Alert';

import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap';


function App() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
