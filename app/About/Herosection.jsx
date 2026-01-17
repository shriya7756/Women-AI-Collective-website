import Image from "next/image";

export default function Herosection(){
  return(
    <section className="relative min-h-screen bg-[#06061A4D]">
      <Image
        src="/Ellipse 4.png"
        alt="ellipse"
        width={550}
        height={550}
        className="absolute opacity-100"
        style={{
      
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1
        }}
      />
      <Image
        src="/about hero no bg img.png"
        alt="hero image"
        width={100}
        height={1024}
        className="relative opacity-100"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5
        }}
      />
    </section>
  )
}