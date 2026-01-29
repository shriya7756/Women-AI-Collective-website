import Image from 'next/image'

export default function JoinUs(){
  return(
    <div className="w-full min-h-[500px] bg-black flex flex-col items-center justify-center px-6 text-center py-16">
  
      <h1
        className="
          text-[32px]
          md:text-[35px]
          lg:text-[40px]
          font-bold
          leading-[1.3]
          bg-gradient-to-r
          from-[#FFD1EA]
          via-[#FF5FB2]
          to-[#8B5CF6]
          bg-clip-text
          text-transparent
          max-w-[900px]
          mx-auto
        "
      >
        <span>
        A 
        </span>
        {" "}
        <span className='relative inline-block text-pink-100'>
        COMMUNITY 
         <Image 
      src="/Vector 2.png" 
      width={176}
      height={1}  
      alt="underline" 
      className="absolute left-0 -bottom-2 w-full"
    />
    </span>
            {" "}
        OF WOMEN BUILDING
        THEIR CAREERS AND COMPANIES IN 
        EMERGING TECHNOLOGY AND AI IS
        WAITING FOR YOU.
        ARE YOU UP FOR IT?
      </h1>

      <button className="h-10 mt-6 px-6 md:px-8 bg-[#F1247B] font-bold text-[18px] text-[#FFFFFF] font-semibold text-sm md:text-base lg:text-lg rounded-[10px] hover:bg-[#F1247B] hover:shadow-4xl active:scale-100 active:shadow-inner transition-all duration-150"
   >
        JOIN THE AI 101 PROGRAM
      </button>
    </div>
  )
}