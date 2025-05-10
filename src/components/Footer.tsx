import { ThemeContext } from "../store/store";
import { useContext } from "react";
const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className={`${darkMode==="dark" ? "bg-neutral-900 text-blue-100" :"bg-blue-200 text-gray-800"} py-8`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 ">
              <span className="text-4xl bg-gradient-to-t from-blue-400 to-indigo-800 bg-clip-text text-transparent ">SOFTSELL</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 mb-4 md:mb-0 text-center md:text-left">
              <a href="#/" className="hover:text-indigo-500">Support</a>
              <a href="#/" className="hover:text-indigo-500">Linkedin</a>
              <a href="#/" className="hover:text-indigo-500">Instagram</a>
              <a href="#/" className="hover:text-indigo-500">Contact</a>
            </div>
            
            <div>
              <p>&copy; {currentYear} SoftSell. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;