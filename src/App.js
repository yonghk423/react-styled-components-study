import './App.css';
import styled, { keyframes } from 'styled-components';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Main from './components/Main';
import Services from './components/Services';
import Recommend from './components/Recommend';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
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
