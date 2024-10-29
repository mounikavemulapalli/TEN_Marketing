import ContactUS from "./Components/ContactUS";
import Navbar from "./Components/Navbar";
 import Services from "./Components/Services";
import JoinUs from "./Components/JoinUs";
import Partners from "./Components/Partners";
import Client from "./Components/Client";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Client />
      <Services />
      <ContactUS />
      <Partners />
      <JoinUs />
      <Footer />
    </>
  );
}
