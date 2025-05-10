import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import SideNavBar from "./components/SideNavBar";
import Testimonials from "./components/Testimonials";
import ChatBot from "./components/tools/ChatBot";
import WhyChooseUs from "./components/WhyChooseUs";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <section className="relative h-[100vh] w-full">
        <Hero />
        <SideNavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {
          <motion.button
            initial={{ y: 0 }}
            animate={
              isChatOpen
                ? {
                    y: 0,
                    transition: { duration: 0.3 },
                  }
                : {
                    y: [0, 20],
                    transition: {
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }
            }
            onClick={() => setIsChatOpen((pre) => !pre)}
            className="messagebtn fixed bottom-[3rem] z-[100000000000000] max-sm:bottom-1 max-sm:right-1 right-[5rem] bg-blue-300 rounded-full p-2  cursor-pointer   "
          >
            <MessageCircle className="w-12 h-12 text-white" />
          </motion.button>
        }
      </section>
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
      {isChatOpen && <ChatBot />}
    </>
  );
}

export default App;
