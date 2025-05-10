import{motion} from "framer-motion";
import { ThemeContext } from "../store/store";
import { useContext } from "react";
const Testimonials = () => {
  const { darkMode } = useContext(ThemeContext);
    return (
      <section id="testimonials" className={`py-16 md:py-24 ${darkMode === "dark" ? "bg-neutral-900" : "bg-neutral-50"}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold ${darkMode === "dark" ? "text-blue-100" : "text-gray-900"} mb-4`}>What Our Clients Say</h2>
            <p className={`text-lg ${darkMode === "dark" ? "text-blue-100" : "text-gray-900"} max-w-2xl mx-auto`}>
              Don't just take our word for it. Here's what our clients have to say about their experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
            {/* Testimonial 1 */}
            <motion.div
            initial={{ opacity: 0,  x:"-50%" }}
            whileInView={{ opacity: 1, x:0 , transition: { duration: 0.7 } }}
            className="bg-blue-100 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img src="https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740" alt="" className="h-full w-full  " />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Alex Rodriguez</h4>
                  <p className="text-gray-600">IT Manager, TechFusion Inc.</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "SoftSell made it incredibly easy to recover value from our unused licenses after a recent downsize. The valuation was fair and the payment was quick. I highly recommend their service to any IT manager looking to optimize software expenses."
              </p>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div
                initial={{ opacity: 0,  x:"50%" }}
                whileInView={{ opacity: 1, x:0 , transition: { duration: 0.7 } }}
             className="bg-blue-100 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW4lMjBzdWl0fGVufDB8fDB8fHww" className="w-full h-full" alt="" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                  <p className="text-gray-600">CFO, Innovative Solutions</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As a CFO, I'm always looking for ways to improve our bottom line. SoftSell has helped us recover thousands of dollars from unused software assets. Their process is straightforward and their team is professional and responsive."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  