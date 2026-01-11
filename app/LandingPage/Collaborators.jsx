"use client";

import { motion } from "framer-motion";

export default function Collaborators() {
  return (
    <section className="w-full bg-white py-16 md:py-0">
      <div className="mx-auto flex flex-col items-center justify-center px-6 md:h-[500px] md:max-w-[1440px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 -ml-6 text-left text-2xl font-bold md:ml-0 md:mb-16 md:text-4xl">
          OUR COLLABORATORS AND SUPPORTERS
        </motion.h2>

    
        <div className="flex w-full flex-col items-center gap-12 md:hidden">
          <img
            src="/girlswhoml.png"
            className="h-[90px] object-contain"
            alt="GirlsWhoML"
          />
          <div className="grid grid-cols-2 gap-10">
            <img
              src="/girls-leading-tech.png"
              className="h-[90px] object-contain"
              alt="Girls Leading Tech"
            />
            <img
              src="/career girl global logo.png"
              className="h-[90px] object-contain"
              alt="CCG"
            />
          </div>

          <img
            src="/ledby.png"
            className="h-[90px] object-contain"
            alt="Led By Foundation"
          />
        </div>
        <div className="hidden w-full max-w-[1320px] md:flex md:items-center md:justify-between">
          {[
            "girlswhoml",
            "girls-leading-tech",
            "career girl global logo",
            "ledby",
          ].map((logo, i) => (
            <motion.img
              key={logo}
              src={`/${logo}.png`}
              alt={logo}
              className="h-[170px] object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
