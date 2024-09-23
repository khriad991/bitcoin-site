'use client'
import React, {useState} from 'react';
import Image from "next/image";
import koinLogo from "../assets/icon/koinTM.png";
import Link from "next/link";
import {IoMdClose, IoMdMenu} from "react-icons/io";

const NavBarComponent = () => {
    const [menu, setMenu] = useState(false)
    return (
        <section className="bg-gray-white">
            <div className="container">
                <div className="flex justify-center items-center py-3">
                    <div className="img-logo basis-[30%] ">
                        <Image src={koinLogo} alt="koin_logo" width={100} height={40} className="object-cover" />
                    </div>
                    <nav className="basis-[65%] shrink relative lg:static">
                       <div className={`${menu ?"flex" :"hidden lg:flex"} items-center justify-end absolute lg:static -top-1 right-1 bg-gray-white py-4 px-10 lg:py-0 lg:px-0 min-w-fit`}>
                           <ul className={`flex item-center justify-between flex-col lg:flex-row capitalize lg:gap-4 gap-y-4 lg:gap-y-0 `}>
                               <li className="lg:mt-2.5 mx-1 md:mx-1.5 lg:mx-2">
                                   <Link className="text-base font-semibold text-heading hover:text-gray-black transition-all duration-300 ease-out" href={"/crypto_taxes"}>
                                       Crypto Taxes
                                   </Link>
                               </li>
                               <li className="lg:mt-2.5 mx-1 md:mx-1.5 lg:mx-2">
                                   <Link className="text-base font-semibold text-heading hover:text-gray-black transition-all duration-300 ease-out" href={"/free_tools"}>
                                       Free Tools
                                   </Link>
                               </li>
                               <li className="lg:mt-2.5 mx-1 md:mx-1.5 lg:mx-2">
                                   <Link className="text-base font-semibold text-heading hover:text-gray-black transition-all duration-300 ease-out" href={"/resource_center"}>
                                       Resource Center
                                   </Link>
                               </li>
                               <li className="-ml-[17px]">
                                   <button className="text-base font-semibold text-heading btn">Get Started</button>
                               </li>
                           </ul>

                       </div>

                    </nav>
                    <div className="lg:hidden" onClick={() => setMenu(!menu)}>
                        {menu ?(
                                <IoMdClose className="w-[28px] h-[28px] text-lg  text-[#0B182F]"/>
                        ):(
                            <IoMdMenu className="w-[28px] h-[28px] text-lg  text-[#0B182F]"/>

                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavBarComponent;
