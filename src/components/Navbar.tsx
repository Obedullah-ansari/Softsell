import { useContext } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Navbuttons from "./tools/Navbuttons";
import { ThemeContext } from "../store/store";
import Logo2 from "../assets/s.png";

const Navbar: React.FC<{
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
}> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { darkMode, handelseThemeChange } = useContext(ThemeContext);

  return (
    <nav
      className={`h-[10%]   w-full overflow-hidden ${
        darkMode === "dark" ? "bg-neutral-800" : "bg-white "
      } transition-colors duration-300 sticky top-0 z-[100000] `}
    >
      <div className="container  h-full w-full  flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo2} className="w-20 h-20" alt="" />
          <span className="text-[2.4rem] font-medium tracking-widest bg-gradient-to-t from-indigo-500 to-blue-300 bg-clip-text text-transparent ">SELL</span>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {<Menu 
            className="text-blue-500 "
             size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <motion.div className="hidden md:flex space-x-8 ">
          <div className="flex justify-center items-center cursor-pointer">
            {darkMode === "dark" ? (
              <Moon
                color="oklch(88.2% 0.059 254.128)"
                size={24}
                onClick={handelseThemeChange}
              />
            ) : (
              <Sun size={24} onClick={handelseThemeChange} />
            )}
          </div>
          <Navbuttons title="How It Works" to="#how-it-works" />
          <Navbuttons title="Why Choose Us" to="#why-choose-us" />
          <Navbuttons title="Testimonials" to="#testimonials" />
          <Navbuttons title="Contact" to="#contact" />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
