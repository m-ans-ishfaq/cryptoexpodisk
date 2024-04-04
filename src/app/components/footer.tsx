import Image from "next/image";
import BG10 from "../../../public/images/backgrounds/bg-10.png";
import Logo from "../../../public/images/logo.png";
import { SOCIALS } from "../data/socials";
import { GALLERY } from "../data/gallery";

export function Footer()
{
    const LINKS = [
        { label : "Terms", href: "#" },
        { label : "Privacy", href: "#" },
        { label : "Cookies", href: "#" },
    ];

    return (
        <footer className="relative flex flex-col justify-center items-center text-white">
            <div className="absolute z-[-2] h-full w-full bg-black"></div>
            <Image src={BG10} alt="" className="absolute z-[-1] w-full h-full object-cover opacity-20" />
            <div className="py-20 px-4 container grid gap-16 lg:grid-cols-3">
                {/* Social Links */}
                <div className="container flex flex-col gap-2 lg:gap-4">
                    <div className="flex items-center gap-4">
                        <Image className="flex w-12 lg:w-16" src={Logo} alt="Logo" />
                        <span className="font-press-start text-xs lg:text-sm">Crypto Expo Disk</span>
                    </div>
                    <p className="text-justify text-neutral-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus ex, facilisis eu purus et, efficitur dapibus dui.</p>
                    <div className="flex gap-4">
                        {SOCIALS.map(({Icon, href}, index) => (
                            <a key={index} href={href} target="_blank" className="text-xl w-12 h-12 rounded-full border border-white flex justify-center items-center border-opacity-50 transition-all duration-300 hover:text-black hover:bg-white ease-in-out">
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
                {/* Newsletter */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-semibold">Newsletter</h4>
                    <div className="text-justify text-neutral-300">
                        <p>Don't miss a thing</p>
                        <p>Sign up to receive daily news</p>
                    </div>
                    <form className="flex flex-col gap-4">
                        <input required type="email" className="p-3 bg-white font-medium rounded-lg text-neutral-900 focus:outline-black" placeholder="Your email adress" />
                        <button type="submit" className="p-3 bg-primary-yellow font-bold rounded-lg text-neutral-900">Sign up</button>
                    </form>
                </div>
                {/* Gallery */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-semibold">Gallery</h4>
                    <div className="grid grid-cols-3 grid-rows-2 gap-4">
                        {GALLERY.map((image, index) => (
                            <Image key={index} src={image} alt="" className="rounded-lg" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-t border-neutral-200 border-opacity-50 py-4 w-full flex justify-center">
                <div className="px-4 container flex flex-col sm:flex-row justify-between font-montserrat text-neutral-200">
                    <p>Crypto Expo Disk @2023. All right reserved.</p>
                    <div className="flex gap-4">
                        {LINKS.map(({label, href}, index) =>(
                            <a key={index} {...{href}} className="hover:text-white hover:font-semibold">{label}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}