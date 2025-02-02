// 'use client'
import Image from 'next/image'
import map from './images/mapbase.png';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
// import { useRouter } from 'next/navigation'

// import { signIn } from "next-auth/react";
export default function Home() {
  // const router = useRouter()
  // const res = await signIn("credentials", {
  //   redirect: false,
  //   email,
  //   password,
  // });
  return (
    <div className="h-screen bg-black overflow-hidden text-white flex flex-col items-center justify-between">
      {/* Sidebar */}
      <div className="absolute left-4 pt-2 pb-2 rounded-full bg-[#161616] top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4">
        {['HOME', 'Search', 'Profile', 'About'].map((item) => (
          <button
            key={item}
            className="w-20 h-20 flex items-center justify-center bg-[#333333] rounded-full text-sm font-normal text-white hover:bg-purple-700 transition-colors"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center mt-32">
        {/* Heading */}
        <h1 className="text-5xl font-medium">
          <span className="text-purple-800">Search </span>Across <span className="text-purple-800">Billons </span> of{' '}
          Professionals{' '}
          <span className="text-purple-800">Portfolios</span> Profiles
        </h1>

        {/* Search Bar */}
        <div className="relative mt-12">
          <input
            type="text"
            placeholder="Search"
            className="w-4/5 px-14 py-4 rounded-full text-lg text-white outline-none bg-transparent border-[3px] border-purple-800 placeholder:text-white placeholder:font-semibold"
          />
          <AiOutlineSearch className="absolute top-1/2 left-32 transform -translate-y-1/2 text-purple-700 text-4xl" />
        </div>

        {/* Or Create Section */}
        <p className="mt-10 text-4xl">
          OR Create Your Own Using <span className="text-purple-500">AI</span>
        </p>

        {/* Buttons */}
        <div className="mt-10 space-x-10">
          <Link href={"/signIn"}>
          <button  className="px-10 py-5 rounded-3xl bg-gray-300 text-2xl text-purple-700 hover:bg-purple-700 hover:text-white transition-colors">
            Login
          </button>
          </Link>
          <Link href={"/signUp"}>
          <button  className="px-10 py-5 rounded-3xl bg-gray-300 text-2xl text-purple-700 hover:bg-purple-700 hover:text-white transition-colors">
            SignUp
          </button>
          </Link>
        </div>
      </div>

      {/* Map */}
      <div className="w-full mt-16 flex justify-center">
        <div className="w-3/4">
          <Image
            src={map}
            alt="World Map"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
