import Navbar1 from "../../components/ui/navbar1";
import Image from "next/image";

export default function Herosection(){
  return(
    <>
<section className="relative min-h-screen bg-gray-400 flex items-end justify-center pb-4">
        {/* Background Image - z-0 */}
        <Image
          src="/Hero_without bg.png"
          alt="herosection"
          fill
          className="object-cover z-0"
        />
        
        {/* Main Heading - z-10 */}
        <h1 
          className="relative z-10 text-center font-bold text-[#FAFCFE] mb-20"
          style={{
            fontFamily: 'Work Sans',
            fontSize: 'clamp(32px, 5vw, 64px)',
            lineHeight: '1.1',
            letterSpacing: '-0.04em',
            maxWidth: '100%'
          }}
        >
          Democratizing{" "}
          <span className="relative inline-block text-center font-medium italic"
            style={{
              fontFamily: 'Fraunces',
              fontSize: 'clamp(32px, 5vw, 64px)',
              lineHeight: '1.1',
              letterSpacing: '-0.01em'
            }}>
            AI skills
            <Image 
              src="/Vector 3.png" 
              width={176}
              height={1}  
              alt="underline" 
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full max-w-[176px]"
            />
          </span>
          {" "}for
          <span className="relative inline-block text-center font-normal italic"
            style={{
              fontFamily: 'Fraunces',
              fontSize: 'clamp(32px, 5vw, 64px)',
              lineHeight: '1.1',
              letterSpacing: '-0.01em'
            }}>
            Indian 
            <Image 
              src="/Vector 3.png" 
              width={176}
              height={1}  
              alt="underline" 
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full max-w-[176px]"
            />
          </span>
<br></br>
          {" "} 
          <span className=" font-normal italic"> women <Image 
              src="/Vector 3.png" 
              width={176}
              height={1}  
              alt="underline" 
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full max-w-[176px]"
            /></span>  to build an inclusive Digital 
          <br></br>
          space  and unlock financial freedom.
        </h1>
      </section>
         <div className="relative w-full ">
        <Image
          src="/Black circular edge.png"
          fill
          alt="black semicircle"
          className="object-cover"
        />
      </div>
      </>
  )
}