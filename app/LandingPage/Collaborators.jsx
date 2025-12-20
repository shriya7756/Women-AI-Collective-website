"use client";

import { motion } from "framer-motion";

export default function Collaborators() {
  const logos = ["girlswhoml", "girls-leading", "career girl global logo", "ledby"];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-[100px]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold justify-center mb-[90px]"
      >
        OUR COLLABORATORS AND SUPPORTERS
      </motion.h2>

      <div className="flex flex-wrap gap-15 items-center justify-center">
        {logos.map((logo, i) => (
          <div key={logo} className="flex flex-col items-center">
            <motion.img
              src={`/${logo}.png`}
              style={{ height: `${64 + i * 8}px` }} 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1.3, opacity: 1 }}
              transition={{ delay: i * 0.3 }}
            />

             {logo === "girls-leading" && (
    <motion.p
      className="mt-2 text-sm font-bold text-center text-[#F1247B]"
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: i * 0.2 + 0.2 }} // text thoda baad me animate ho
    >
      &lt; girls leading tech &gt;
    </motion.p>
  )}
          </div>
        ))}
      </div>
    </div>
  );
}
