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
        A COMMUNITY OF WOMEN BUILDING
        THEIR CAREERS AND COMPANIES IN 
        EMERGING TECHNOLOGY AND AI IS
        WAITING FOR YOU.
        ARE YOU UP FOR IT?
      </h1>

      <button className="mt-8 px-8 py-4 border rounded-lg bg-pink-500 font-bold hover:bg-pink-600 transition">
        <span className="text-white">JOIN THE AI PROGRAM</span>
      </button>
    </div>
  )
}