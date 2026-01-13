"use client"
import { useState } from "react"
import { Button } from "../../components/ui/button"
import Image from "next/image"
import { Instagram, Linkedin, Phone, Mail } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submitted email:", email)
  }

  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[600px] md:min-h-[700px] bg-[#31091E] px-4 sm:px-10 md:px-16 lg:px-24 py-6 sm:py-8 md:py-10 overflow-hidden">
       <img
    src="/footer-graphic.png"
    alt="footer graphic"
    className="absolute bottom-10 left-0 w-600 h-auto object-cover opacity-12 pointer-events-none"
    style={{ zIndex: 0 }}
  />
      {/* Top Section - Stay Updated & Social Icons */}
<div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start gap-10 mb-6">

  {/* LEFT — Stay Updated */}
  <div className="flex flex-col w-full max-w-md">
    <h2 className="font-bold text-[36px] sm:text-[40px] md:text-[48px] leading-tight text-[#F1247B] mb-2">
      Stay Updated
    </h2>

    <input
      type="email"
      id="email"
      value={email}
      onChange={handleChange}
      placeholder="email address"
      className="text-white bg-transparent border-b-2 border-[#F1247B] outline-none  focus:border-[#FF5FB2] transition text-base sm:text-lg"
    />

   <Button
  onClick={handleSubmit}
  className="group mt-4 h-10 bg-white hover:bg-gray-100 text-[#F1247B] font-semibold py-3 px-8 rounded-[10] w-[120px] transition-all flex items-center justify-center gap-2"
>
  Submit
  <img
    src="/Pixel Arrow.png"
    alt="arrow"
    className="w-5 h-5 transition-transform duration-300 group-hover:rotate-20"
  />
</Button>
  </div>

  {/* RIGHT — Social Icons + Links */}
  <div className="flex flex-col items-start md:items-end gap-4 w-full md:w-auto">

    {/* Social Icons */}
    <div className="flex gap-4 md:gap-5">
      <img src="/Instagram.png" alt="instagram"/>
      <img src="/LinkedIn.png" alt="LinkedIn"/>
      <img src="/WhatsApp.png" alt="WhatsApp"/>
      <img src="/Gmail Logo.png" alt="gmail"/>
    </div>

    {/* Program Links */}
    <div className="flex flex-wrap justify-start md:justify-end text-[#ECF1F4] gap-3">
      <button className="font-normal text-sm sm:text-base ">
        Artificial Intelligence 101
      </button>
      <span className="text-white/50 hidden md:inline">|</span>
      <button className="font-normal text-sm sm:text-base">
        AI Accelerator for professionals
      </button>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-wrap gap-5 justify-start md:justify-end">
      <button className="text-[#ECF1F4] text-sm sm:text-base">About Us</button>
      <button className="text-[#ECF1F4]   text-sm sm:text-base">Contact Us</button>
      <button className="text-[#ECF1F4]  text-sm sm:text-base">FAQ</button>
      <button className="text-[#ECF1F4] text-sm sm:text-base">Get Involved</button>
    </div>

  </div>
</div>
   <div className=" w-full">
  {/* Background graphic */}
  <img
    src="/footer-graphic.png"
    alt="footer graphic"
    className="absolute inset-0 w-full h-auto opacity-100 -z-10 pointer-events-none"
  />
  </div>
      {/* Big Text - Positioned absolutely to overlap */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end pb-8 sm:pb-10 md:pb-12 lg:pb-16 ">
        <h1 className="font-bold  text-[#ECF1F4] text-[60px] xs:text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px] opacity-75 leading-[0.85] text-center tracking-tight px-2">
          WOMEN AI
        </h1>
        <h1 className="font-bold text-[50px] xs:text-[70px] sm:text-[90px] md:text-[120px] lg:text-[160px] xl:text-[200px] text-[#ECF1F4] leading-[0.85] opacity-75 text-center tracking-tight px-2">
          COLLECTIVE
        </h1>
      </div>
    </section>
  )
}