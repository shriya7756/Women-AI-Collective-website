import Image from 'next/image'
export default function JoinUs() {
  return (
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
        A COMMUNITY
        <Image
          src="/Vector 2.png"
          width={176}       // match Figma width
          height={1}
          alt="underline"
          className=" relative  bottom-3"
        />
        {" "}
        OF WOMEN BUILDING
        THEIR CAREERS AND COMPANIES IN
        EMERGING TECHNOLOGY AND AI IS
        WAITING FOR YOU.
        ARE YOU UP FOR IT?
      </h1>

      <button className="mt-8 px-8 py-4 w-[300px] h-[50px] border rounded-[20px] bg-pink-500 text-xl font-bold hover:bg-pink-600 transition shadow-lg hover:shadow-xl flex items-center justify-center">
        <span className="text-white">JOIN THE AI PROGRAM</span>
      </button>
    </div>
  )
}