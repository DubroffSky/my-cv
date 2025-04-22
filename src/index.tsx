import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/hello';
import Navbar from './components/navbar';
import Intro from './components/about'
import Stack from './components/Stack'
import Projects from './components/projects';
import ContactForm from './components/ContactForm';
import Footer from './components/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <ContactForm />
    <Intro />
    <Stack />
    <Projects />
    <Footer />
  </React.StrictMode>
);

