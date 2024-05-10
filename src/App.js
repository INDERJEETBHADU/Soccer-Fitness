import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./components/Header"
import Download from "./components/Download"
import Send from "./components/Send"
import Myths from "./components/Myths"
import Author from "./components/Author"
import Content from './components/Content';
import Footer from "./components/Footer"
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, });
  }, []);
  return (
    <>
      <Header />
      <Download />
      <Send />
      <Myths />
      <Author />
      <Content />
      <Footer/>
    </>
  );
}

export default App;
