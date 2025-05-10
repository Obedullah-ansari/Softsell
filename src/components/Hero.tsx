import { motion } from "framer-motion";
import { ThemeContext } from "../store/store";
import { useContext } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: "-100%", opacity: 0, transition: { duration: 0.5 } },
  visible: { x: "0", opacity: 1, transition: { duration: 0.5 } },
};

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section className={`${darkMode==="dark" ?"bg-neutral-900 " :"bg-gradient-to-br from-sky-50 to-blue-100"} h-[100%] w-full transition-colors duration-300 overflow-hidden`}>
      <div className="container mx-auto flex justify-center items-center h-full w-full">
        <div className="flex flex-col md:flex-row  items-center max-sm:p-5 md:p-0">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className={`text-4xl sm:text-2xl md:text-5xl lg:text-6xl font-bold ${darkMode==="dark" ?"text-blue-200" :"text-gray-900"} mb-4`}
              variants={itemVariants}
            >
              Turn Unused Software Into Profit
            </motion.h1>
            <motion.p
              className={`text-lg md:text-xl  mb-8 ${darkMode==="dark" ?"text-neutral-200" :"text-gray-500"}`}
              variants={itemVariants}
            >
              Sell your unused software licenses quickly and securely. Get the
              best value for your idle digital assets.
            </motion.p>
            <motion.button
              variants={itemVariants}
              className="text-lg px-3 py-3 rounded-md hover:bg-green-500 bg-blue-500 cursor-pointer text-neutral-100 font-medium "
            >
              Sell My Licenses
            </motion.button>
          </motion.div>

          <div className="md:w-1/2 w-full">
            <div className={`${darkMode==="dark" ? "bg-blue-200" :"bg-neutral-100"} rounded-xl shadow-xl p-4`}>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Software professional using laptop"
                className="w-full sm:h-[22rem] md:h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
