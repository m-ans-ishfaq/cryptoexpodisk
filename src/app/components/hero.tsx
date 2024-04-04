import Image from "next/image";
import BG2 from "../../../public/images/backgrounds/bg-2.png";

export function Hero()
{
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center px-4">
            <div className="absolute z-[-3] h-full w-full bg-primary-yellow"></div>
            <div className="absolute z-[-2] h-screen w-full bg-black"></div>
            <Image src={BG2} alt="" className="absolute z-[-1] h-screen object-cover opacity-20" />
            <div className="container flex flex-col gap-3 md:gap-6 items-center mt-60 text-white text-center">
                <h3 className="md:text-[25px] uppercase">January 15, 2024, Dubai, ATLANTIS, THE PALM</h3>
                <h1 className="text-4xl md:text-[65px] font-bold">Crypto Expo Disk</h1>
                <p className="md:text-[30px] uppercase font-medium">Shapping the future of finance in the city of innovation.</p>
                <div className="flex flex-col gap-4 sm:flex-row md:gap-8">
                    <button className="py-3 px-8 bg-primary-yellow font-bold rounded-full text-neutral-900">Register Now</button>
                    <button className="py-3 px-8 border-2 border-white font-bold rounded-full text-white">Become Sponsor</button>
                </div>
            </div>
            <div className="bg-[#0F0F0F] container rounded-lg flex flex-col gap-8 my-20 p-8 2xl:py-16 text-white">
                <h2 className="font-semibold text-2xl md:text-4xl">About Event</h2>
                <p className="md:text-xl text-justify leading-8 text-[#EDEDED]">Crypto Expo Disk  is the blockchain conference network bringing together the key players of crypto industry and experts to redefine the future of finance. The edition of the Crypto Expo Disk will take place during on January 15, 2024 in Dubai, with the world's top crypto companies and blockchain entrepreneurs. Today, UAE, specifically Dubai is gearing up to become a global crypto hub. Thus, Crypto Expo Disk will be the gathering in the region on behalf of the world of blockchain and cryptocurrency, with a wide range of topics focused on the financial technologies of the future, extensive networking opportunities and participation from more than 40 countries.</p>
                <div className="bg-[#272727] rounded-lg p-8 grid gap-4 md:grid-cols-3 text-xl">
                    <div className="flex flex-col gap-2">
                        <h4 className="text-primary-yellow font-semibold">When</h4>
                        <p className="text-neutral-300">January 15, 2024 at 6:30 pm.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="text-primary-yellow font-semibold">Where</h4>
                        <p className="text-neutral-300">Dubai, ATLANTIS, THE PALM</p>
                    </div>
                    <div className="flex items-end">
                        <a href="#speakers" className="text-base py-3 px-8 bg-primary-yellow font-bold rounded-full text-neutral-900">View Speakers</a>
                    </div>
                </div>
            </div>
        </section>
    )
}