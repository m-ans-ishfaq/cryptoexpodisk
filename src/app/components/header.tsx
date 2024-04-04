"use client";
import { useState } from "react";
import Logo from "../../../public/images/logo.png";
import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

export function Header()
{
    const [toggle, setToggle] = useState(false);

    const links = [
        { label: "Home",     name: "home" },
        { label: "About Us", name: "about-us" },
        { label: "Speakers", name: "speakers" },
        { label: "Sponsers", name: "sponsers" },
        { label: "Partners", name: "partners" },
    ];

    return (
        <header className="absolute z-10 w-full px-4 bg-[rgba(0,0,0,0.75)] text-white h-20 flex justify-center">
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <Image className="flex w-12 md:w-16" src={Logo} alt="Logo" />
                    <span className="font-press-start text-xs md:text-sm">Crypto Expo Disk</span>
                </div>
                {/* Desktop: Links */}
                <ul className="hidden md:flex gap-4 lg:gap-12">
                    {links.map(({label, name}, index) => (
                        <li key={index}><a href={`#${name}`} className="font-medium">{label}</a></li>
                    ))}
                </ul>
                {/* Mobile: Toggler */}
                <button className="md:hidden text-4xl" onClick={() => setToggle(!toggle)}>
                    {toggle ? <AiOutlineClose /> : <HiBars3 />}
                </button>
                {/* Mobile: Links */}
                {toggle && <ul className="p-4 bg-[rgba(0,0,0,0.75)] flex flex-col md:hidden gap-4 absolute z-10 right-0 top-20">
                    {links.map(({label, name}, index) => (
                        <li key={index}><a href={`#${name}`} className="font-medium">{label}</a></li>
                    ))}
                </ul>}
            </div>
        </header>
    )
}