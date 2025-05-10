import React from "react";
import { XCircle, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeContext } from "../store/store";
import { useContext } from "react";
const SideNavBar: React.FC<{
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
}> = ({ setIsMenuOpen, isMenuOpen }) => {
  const { darkMode, handelseThemeChange } = useContext(ThemeContext);
  return (
    <>
      <motion.div
        initial={{ right: "-100%" }}
        animate={{
          right: isMenuOpen ? 0 : "-100%",
          transition: { duration: 0.4 },
        }}
        className={`fixed z-[1000000] top-0 right-0 ${
          darkMode === "dark" ? "bg-neutral-800" : "bg-blue-200"
        } h-[100vh] w-[20rem] transition-colors duration-300`}
      >
        <div
          className={`relative flex flex-col justify-center items-center h-full w-full gap-10 `}
        >
          <XCircle
            className={`absolute top-2 left-2 ${
              darkMode === "dark" ? "text-blue-200" : "text-neutral-800"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          <div 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-10 left-2 flex justify-center items-center cursor-pointer">
            {darkMode === "dark" ? (
              <Moon color="oklch(88.2% 0.059 254.128)" size={24} onClick={handelseThemeChange} />
            ) : (
              <Sun size={24} onClick={handelseThemeChange} />
            )}
          </div>

          <a
            href="#how-it-works"
            className={`py-2 ${
              darkMode === "dark" ? "text-blue-200" : "text-neutral-800"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#why-choose-us"
            className={`py-2 ${
              darkMode === "dark" ? "text-blue-200" : "text-neutral-800"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Why Choose Us
          </a>
          <a
            href="#testimonials"
            className={`py-2 ${
              darkMode === "dark" ? "text-blue-200" : "text-neutral-800"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className={`py-2 ${
              darkMode === "dark" ? "text-blue-200" : "text-neutral-800"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SideNavBar;
