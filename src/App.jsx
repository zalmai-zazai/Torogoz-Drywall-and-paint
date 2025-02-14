import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import Testmonial from "./components/Testmonial";
import TrustedBy from "./components/TrustedBy";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Section />
      <Section2 />
      <TrustedBy />
      <Pricing />

      <Testmonial />
      <Footer />
    </>
  );
}

export default App;
