import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Main from './components/Main';
import Services from './components/Services';
import Recommend from './components/Recommend';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import scrollreveal from 'scrollreveal';
import React,{ useEffect } from 'react';

function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
      nav,
      #Main,
      #services,
      #recommend,
      #testimonials,
      footer
      `,
      {
        opacity: 0,
        interval: 300,
      }
    )
  }, [])
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Main />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
