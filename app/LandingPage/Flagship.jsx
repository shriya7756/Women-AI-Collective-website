"use client"
import { Button } from "../../components/ui/button"
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function FlagShip() {
  const sectionRef = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !card1Ref.current) return

      const section = sectionRef.current
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Calculate scroll progress through the section
      const scrollStart = sectionTop - windowHeight * 0.5
      const scrollEnd = sectionTop + sectionHeight * 0.5
      const scrollDistance = scrollEnd - scrollStart
      const progress = Math.max(0, Math.min(1, (scrollY - scrollStart) / scrollDistance))

      setScrollProgress(progress)
    }

    // Use requestAnimationFrame for smoother updates
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Easing function for smoother animation
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const easedProgress = easeInOutCubic(scrollProgress)

  return (
    <section 
      ref={sectionRef}
      className="relative bg-black min-h-[250vh] py-16 px-4"
    >
      <div className="sticky top-0 flex flex-col items-center justify-center min-h-screen gap-0 overflow-hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAFCFE] text-center mb-8 z-10">
          OUR FLAGSHIP PROGRAM
        </h1>
        
        <div className="relative w-full max-w-[1200px] h-[500px]">
          {/* Card 1 */}
          <div 
            ref={card1Ref}
            className="absolute inset-0 w-full h-full rounded-[40px] bg-[#F1247B] will-change-transform"
            style={{
              transform: `scale(${1 - easedProgress * 0.08}) translateY(${-easedProgress * 80}px)`,
              opacity: 1 - easedProgress ,
              transition: 'transform 0.05s ease-out, opacity 0.05s ease-out'
            }}
          >
            {/* Image Container - Left Side */}
            <div className="absolute left-0 top-0 bottom-0 w-1/2 hidden md:flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <Image
                  src="/card 1 img.png"
                  fill
                  alt="AI Program"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content Container - Right Side */}
            <div className="relative md:ml-[50%] w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-6 h-full">
              <h2 className="text-[#530727] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">
                Artificial Intelligence 101
              </h2>

              <p className="text-[#530727] text-base sm:text-lg md:text-[20px] leading-relaxed">
                A 2-months live program for young women from both non-tech and tech backgrounds become AI-Literate and AI-Fluent. It covers practical usecases and frameworks along with fundamentals of AI and ML setting them up for career advancement and higher paying opportunities in an AI-driven economy.
              </p>
              
            <Button className="group bg-[#ECF1F4] hover:bg-[#dce1e4] rounded-[10px] w-[250px] px-8 py-6 flex items-center gap-2">
  <span className="flex items-center gap-2 font-medium text-base sm:text-lg text-[#4A4A68]">
    Join the Program
    <img
      src="/Pixel Arrow straight.png"
      alt="Arrow"
      className="w-7 h-7 transition-transform duration-300 group-hover:rotate-15"
    />
  </span>
</Button>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            ref={card2Ref}
            className="absolute inset-0 w-full h-full rounded-[40px] bg-[#F5C939] shadow-[inset_1px_1px_2px_0px_#FFFFFF4D,inset_-1px_-1px_2px_0px_#FFFFFF1A,inset_0px_1px_10px_0px_#FFFFFF4D] overflow-hidden will-change-transform"
            style={{
              transform: `translateY(${(1 - easedProgress) * 100}%) scale(${0.95 + easedProgress * 0.05})`,
              opacity: easedProgress,
              transition: 'transform 0.05s ease-out,  ease-out'
            }}
          >
            {/* Image Container - Left Side */}
            <div className="absolute left-0 top-0 bottom-0 w-1/2 hidden md:flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <Image
                  src="/card 2 img.png"
                  fill
                  alt="Coming Soon"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content Container - Right Side */}
            <div className="relative md:ml-[50%] w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-6 h-full">
              <h2 className="text-[#5B4808] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">
                Artificial Intelligence 101
              </h2>

              <p className="text-[#5B4808] text-base sm:text-lg md:text-[20px] leading-relaxed">
                A 2-months live program for young women from both non-tech and tech backgrounds become AI-Literate and AI-Fluent. It covers practical usecases and frameworks along with fundamentals of AI and ML setting them up for career advancement and higher paying opportunities in an AI-driven economy.
              </p>
              
              <Button className="group bg-[#ECF1F4] hover:bg-[#dce1e4] rounded-[10px] w-[200px] px-8 py-6 flex items-center gap-2">
  <span className="flex items-center gap-2 font-medium text-base sm:text-lg text-[#4A4A68]">
   Coming Soon
    <img
      src="/Pixel Arrow straight.png"
      alt="Arrow"
      className="w-7 h-7 transition-transform duration-300"
    />
  </span>
</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}