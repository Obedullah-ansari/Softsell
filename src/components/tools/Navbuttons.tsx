import React from "react";
import { motion } from "framer-motion";

const Navbuttons:React.FC<{
    title: string;
    to?: string;
}> =(
    { title, to,   }
)=> {
  return (
    <>
      <motion.a
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.07,transition:{duration :0.2} }}
        href={to}
        className="text-indigo-800 font-medium md:text-[1rem] lg:w-[10rem] lg:h-[2.4rem] md:p-2 lg:p-0 flex justify-center items-center text-nowrap  shadow-md shadow-indigo-400  bg-blue-200 rounded-full"
      >
       {title}
      </motion.a>
    </>
  );
}

export default Navbuttons;
