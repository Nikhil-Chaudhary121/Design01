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
    <div className="xl:p-26 lg:p-20 md:p-16 p-8 flex flex-col gap-20">
        <div className="flex flex-col xl:flex-row justify-between  ">
        <div className="flex flex-col gap-8  min-w-1/2 " >
        <p className={` lg:text-[3rem] md:text-[4rem] text-[2.5rem] xl:text-[5rem] leading-none xl:leading-[5.5rem] `}>Find and listen <br /> your favorite artist <br /> podcast here!</p>
            <p className={`${poppins.className}`}>The best podcast website communicate a feel and <br /> make it easy to visitors to discover your podcast.</p>
            <div className=" flex md:gap-8 gap-4 ">
                <button className="md:px-12 sm:px-6 px-3  sm:py-4 py-2 bg-black text-white">Get Started</button>
                <button className="md:px-12 sm:px-6 px-3 sm:py-4  py-2 bg-[#d2d2d2]">Explore channels</button>
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 m-auto xl:mt-20 mt-40 relative ">
            
            <div className="relative flex flex-col gap-4 ">
                <div className=" md:absolute top-[-100px] right-[-50%] bg-[#1F1F1F] text-white p-8 flex flex-col gap-4">
                <p>Total Listeners</p>
                <p className="text-2xl">3,580 <span className={` ${poppins.className} text-[0.7rem] `}>View more</span> </p>
                <p><span className={`${[poppins.className]} text-[0.8rem]`}>Source</span> Spotify</p>
            </div >
                <img className="object-cover w-full h-[300px] w-[300px]" src="https://plus.unsplash.com/premium_photo-1688700438143-e329b5a129e1?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
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
            
            <div className="relative h-fit">
            
            <img className="h-[400px] min-w-[250px] md:mt-[100px] object-cover" src="https://plus.unsplash.com/premium_photo-1750235095423-8d7646040b54?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
            <div className=" absolute bottom-[40px] right-[-40px] border-[8px] bg-blue-300 w-[100px] h-[100px] flex justify-center items-center text-center  text-white rounded-full">
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