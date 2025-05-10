import { motion } from "framer-motion";
import { ThemeContext } from "../store/store";
import { useContext } from "react";

const containervariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: "100%", opacity: 0, transition: { duration: 0.5 } },
  visible: { x: "0", opacity: 1, transition: { duration: 0.5 } },
};

const WhyChooseUs = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section
      id="why-choose-us"
      className={`py-16 md:py-24 ${darkMode === "dark" ? "bg-neutral-900" : "bg-neutral-50"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={` text-3xl md:text-4xl font-bold  mb-4 ${darkMode === "dark" ? "text-blue-100" : "text-gray-900"} `}>
            Why Choose Us
          </h2>
          <p className={`text-lg ${darkMode === "dark" ? "text-sky-100" : "text-gray-600"} max-w-2xl mx-auto`}>
            SoftSell provides the most trusted and efficient platform for
            software license resale.
          </p>
        </div>

        <motion.div
          variants={containervariants}
          initial="hidden"
          whileInView={"visible"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden"
        >
          {/* Reason 1 */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-200 p-6 rounded-lg shadow-sm"
          >
            <div className="bg-sky-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-sky-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-gray-600">
              End-to-end encryption and secure transaction protocols protect
              your data and financial information.
            </p>
          </motion.div>

          {/* Reason 2 */}

          <motion.div
            variants={itemVariants}
            className="bg-blue-200 p-6 rounded-lg shadow-sm"
          >
            <div className="bg-sky-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-sky-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted</h3>
            <p className="text-gray-600">
              Over 10,000 successful transactions with verified buyers and
              sellers across the globe.
            </p>
          </motion.div>

          {/* Reason 3 */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-200 p-6 rounded-lg shadow-sm"
          >
            <div className="bg-sky-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-sky-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast</h3>
            <p className="text-gray-600">
              Get valuations within 24 hours and payment processed within 3
              business days of sale.
            </p>
          </motion.div>

          {/* Reason 4 */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-200 p-6 rounded-lg shadow-sm"
          >
            <div className="bg-sky-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-sky-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-600">
              Our dedicated support team is available 24/7 to assist you
              throughout the selling process.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
