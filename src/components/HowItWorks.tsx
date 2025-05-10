import { Upload, DollarSign, Check } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeContext } from "../store/store";
import { useContext } from "react";
const HowItWorks = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section id="how-it-works" className={`py-16 md:py-24 ${darkMode==="dark" ? "bg-neutral-800"  :"bg-white"} transition-colors duration-300 `}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 flex flex-col w-full justify-center items-center">
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode==="dark" ? "text-blue-100"  :"text-neutral-900"} `}>
            How It Works 
          </h2>
          <motion.span
          initial={{width: 0}}
          whileInView={{width: "80%" ,transition: {duration: 0.8}}}
          className=" block h-[0.2rem] m-1 rounded-full bg-blue-500"></motion.span>
          <p className={`text-lg  ${darkMode==="dark" ? "text-neutral-100" :"text-gray-500"} max-w-2xl mx-auto mt-3`}>
            Our simple three-step process makes selling your unused software
            licenses quick and painless.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${darkMode==="dark" ? "text-blue-100" :"text-neutral-900"} `}>
          {/* Step 1 */}
          <div className={`flex flex-col items-center text-center p-6 rounded-lg  `}>
            <div className="bg-sky-100 p-4 rounded-full mb-4 shadow-md shadow-blue-300">
              <Upload size={32} className="text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Upload License</h3>
            <p className={`${darkMode==="dark" ? "text-white" :"text-neutral-500"} `}>
              Simply upload your license information through our secure portal.
              We support all major software vendors.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="bg-sky-100 p-4 rounded-full mb-4 shadow-md shadow-blue-300">
              <Check size={32} className="text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Get Valuation</h3>
            <p className={`${darkMode==="dark" ? "text-white" :"text-neutral-500"} `}>
              Our experts will verify your license and provide you with a
              competitive market valuation within 24 hours.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="bg-sky-100 p-4 rounded-full mb-4 shadow-md shadow-blue-300">
              <DollarSign size={32} className="text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Get Paid</h3>
            <p className={`${darkMode==="dark" ? "text-white" :"text-neutral-500"} `}>
              Accept our offer and get paid quickly. We offer multiple payment
              options for your convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
