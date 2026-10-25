import { Poppins } from "next/font/google"
import { EighthNotes } from 'lucide-react';
import { AudioLines } from 'lucide-react';

const poppins = Poppins({
      variable: "--font-cal-sans", // Defines the CSS variable name
      subsets: ["latin"],
      weight: "400"
    });

const LandingPage01 = () => {
    
    
  return (
    <div className="p-26 flex flex-col gap-20">
        <div className="flex justify-between  ">
        <div className="flex flex-col gap-8  min-w-1/2 " >
        <p className={` text-[5rem] leading-[5.5rem] `}>Find and listen <br /> your favorite artist <br /> podcast here!</p>
            <p className={`${poppins.className}`}>The best podcast website communicate a feel and <br /> make it easy to visitors to discover your podcast.</p>
            <div className=" flex gap-8 ">
                <button className="px-12 py-4 bg-black text-white">Get Started</button>
                <button className="px-12 py-4 bg-[#d2d2d2]">Explore channels</button>
            </div>
        </div>
        <div className="flex gap-8 relative ">
            <div className="w-[18vw] flex flex-col gap-4 ">
                <img className="object-cover w-full h-[25vh]" src="https://plus.unsplash.com/premium_photo-1688700438143-e329b5a129e1?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
            
            <div className=" border-x-1 border-y-2 p-4 flex gap-4 items-center">
                <EighthNotes size={40} />
                <div className="flex">
                    <AudioLines size={40}  />
                    <AudioLines size={40}  />
                    <AudioLines size={40}  />
                    <AudioLines size={40}  />
                    <AudioLines size={40}  />
                </div>

            </div>
            <div className="p-6 text-white bg-orange-400">
                <p className="text-xl">With Top <span className="text-4xl mx-4">1%</span></p>
                <p className={`${poppins.className}`}>Learn how we did it</p>
            </div>
            </div>
            
            <div className="w-[18vw] pt-[160px]">
            <div className=" absolute top-[-50px] left-[270px] bg-[#1F1F1F] text-white p-8 flex flex-col gap-4">
                <p>Total Listeners</p>
                <p className="text-2xl">3,580 <span className={` ${poppins.className} text-[0.7rem] `}>View more</span> </p>
                <p><span className={`${[poppins.className]} text-[0.8rem]`}>Source</span> Spotify</p>
            </div >
            <img className="w-full object-cover w-full h-[40vh]" src="https://plus.unsplash.com/premium_photo-1750235095423-8d7646040b54?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
            <div className=" absolute bottom-[50px] border-[8px] right-[-50px] bg-blue-300 w-[120px] h-[120px] flex justify-center items-center text-center  text-white rounded-full">
                <p className="leading-none ">500+ <br />
                Podcast
                </p>
            </div>
            </div>
        </div>
    </div>
    <div className="flex gap-12 items-center justify-center w-full">
        <p className="text-[3rem] text-[#d3d3d3]">Youtube</p>
        <p className="text-[3rem] text-[#d3d3d3]">Facebook</p>
        <p className="text-[3rem] text-[#d3d3d3]">Google</p>
        <p className="text-[3rem] text-[#d3d3d3]">Webflow</p>
        <p className="text-[3rem] text-[#d3d3d3]">Discord</p>
        <p className="text-[3rem] text-[#d3d3d3]">Spotify</p>
    </div>
    </div>
  )
}

export default LandingPage01