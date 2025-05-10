import { useState,useContext } from "react";
import { ThemeContext } from "../store/store";


const ContactForm = () => {
  const { darkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, licenseType: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className={`py-16 md:py-24 ${darkMode === "dark" ? "bg-neutral-800" : "bg-neutral-100"} flex justify-center items-center flex-col`}>
      <div className="text-center mb-12">
        <h2 className={`text-3xl md:text-4xl font-bold ${darkMode === "dark" ? "text-blue-100" : "text-gray-900"} mb-4`}>
          Contact Us
        </h2>
        <p className={`text-lg ${darkMode === "dark" ? "text-blue-100" : "text-gray-900"}`}>
          Ready to turn your unused software into cash? Get in touch with our
          team today.
        </p>
      </div>
      <div className="lg:w-[65%] md:w-[85%] sm:w-[96%] max-sm:w-[96%]  mx-auto rounded-md overflow-hidden  bg-[url(https://t4.ftcdn.net/jpg/03/01/60/43/360_F_301604316_Fgn2945Q6MNZaaIqNn4jO589FEZoofru.jpg)]   bg-cover ">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-[5rem] bg-transparent p-8 w-full h-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-800 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border border-amber-700 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@company.com"
                required
                className="w-full border border-amber-700 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                required
                className="w-full border border-amber-700 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label
                htmlFor="licenseType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                License Type
              </label>
              <select
                id="licenseType"
                name="licenseType"
                value={formData.licenseType}
                onChange={handleSelectChange}
                required
                className="w-full border border-amber-700 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select license type</option>
                <option value="enterprise">Enterprise Software</option>
                <option value="design">Design Software</option>
                <option value="productivity">Productivity Suite</option>
                <option value="security">Security Software</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the licenses you want to sell..."
              required
              className="w-full border border-amber-700 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-700 hover:bg-amber-600 text-white py-3 px-6 rounded-md text-sm font-medium transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
