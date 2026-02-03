"use client";

import { motion } from "framer-motion";

const logos = [
  "girlswhoml",
  "girls-leading-tech",
  "career girl global logo",
  "ledby",
];

export default function Collaborators() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto flex flex-col items-center px-6 md:max-w-[1440px]">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
 className="mb-12 -ml-6 text-left text-2xl font-bold md:ml-0 md:mb-16 md:text-4xl"      >
          OUR COLLABORATORS AND SUPPORTERS
        </motion.h2>

        
        <div className="flex w-full flex-col items-center md:hidden">
          <img
            src="/girlswhoml.png"
            className="h-[200px] object-contain"
            alt="GirlsWhoML"
          />

          <div className="grid grid-cols-2 gap-10">
            <img
              src="/girls-leading-tech.png"
              className="h-[200px] object-contain"
              alt="Girls Leading Tech"
            />
            <img
              src="/career girl global logo.png"
              className="h-[200px] object-contain"
              alt="Career Girl Global"
            />
          </div>

          <img
            src="/ledby.png"
            className="h-[200px] object-contain"
            alt="Led By Foundation"
          />
        </div>

     
        <div className="relative hidden w-full overflow-hidden md:block">

         
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex w-max items-center gap-20"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={`/${logo}.png`}
                alt={logo}
                className="h-[200px] object-contain"
              />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}