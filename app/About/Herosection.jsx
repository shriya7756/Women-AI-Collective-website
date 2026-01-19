import Image from "next/image";

export default function Herosection(){
  return(
<section className="relative min-h-screen bg-[#06061A4D] flex items-end justify-center pb-4">
  <Image
    src="/Hero_without bg.png"
    alt="herosection"
    fill
    className="object-cover"
  />
  <h1 
  className="relative z-10 text-center font-bold text-[#FAFCFE]"
    style={{
      fontFamily: 'Work Sans',
      fontSize: '64px',
      lineHeight: '70px',
      letterSpacing: '-0.04em',
      width: '1073px',
      maxWidth: '90%'
    }}
  >
    Democratizing {" "}
    <span className="text-center font-medium italic"
style={{
  fontFamily: 'Fraunces',
  fontSize: '64px',
  lineHeight: '70px',
  letterSpacing: '-0.01em'
}}>AI skills </span> 
 <Image 
      src="/Vector 3.png" 
     width={176}       // match Figma width
    height={1}  
      alt="underline" 
      className="absolute right-6 "
    />

     for  {" "}
     <span className="text-center font-medium  italic"
style={{
  fontFamily: 'Fraunces',
  fontSize: '64px',
  lineHeight: '70px',
  letterSpacing: '-0.01em'
}}> Indian women {" "}</span>
 <Image 
      src="/Vector 3.png" 
     width={176}       // match Figma width
    height={1}  
      alt="underline" 
      className="absolute  left-3"
    />

     to build an inclusive Digital space and unlock financial freedom.
  </h1>
</section>
  )
}