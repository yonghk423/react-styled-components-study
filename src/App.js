import './App.css';
import Navbar from './components/study1/Navbar';
import ScrollToTop from './components/study1/ScrollToTop';
import Main from './components/study1/Main';
import Services from './components/study1/Services';
import Recommend from './components/study1/Recommend';
import Testimonials from './components/study1/Testimonials';
import Footer from './components/study1/Footer';
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
