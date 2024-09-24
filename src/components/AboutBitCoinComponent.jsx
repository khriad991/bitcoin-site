import React from 'react';
import Image from "next/image";
import bitcoin1 from "../assets/imge/Bitcoincard1.png"
import bitcoin2 from "../assets/imge/Bitcoincard2.png"
import {MdArrowRightAlt} from "react-icons/md";

const AboutBitCoinComponent = () => {
    return (
        <div className="bg-white p-2 md:p-4">
            <h1>About Bitcoin</h1>
            <div className="grid grid-cols-1 mt-2">
               <div className="flex flex-col gap-4 border-b-[1px] border-b-gray-white pb-6">
                   <h3 className="text-lg font-bold capitalize text-black-md">What is Bitcoin?</h3>
                   <p className="text-sm text-norma -mt-1">Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>

                   <h3 className="text-lg font-bold capitalize text-black-md">Lorem ipsum dolor sit amet</h3>
                        <div className="-mt-1.5 space-y-4">
                            <p className="text-sm text-normal">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  </p>
                            <p className="text-sm text-normal">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus endisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. .  </p>
                            <p className="text-sm text-normal">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  </p>
                        </div>
               </div>

                <div className="grid grid-cols-6 gap-4 md:gap-6  py-4 shadow-inner ">
                    <h1 className="col-span-full">Already Holding Bitcoin?</h1>


                    <div className="col-span-full lg:col-span-3 p-3 rounded-lg bg-gradient-to-tr from-[#79F1A4] to-[#0E5CAD]  grid  grid-cols-3 md:grid-cols-5 gap-4">
                        <Image src={bitcoin1} className={"col-span-1 lg:col-span-2"} alt={"calculate_Profits"} width={128} height={128} />

                        <div className="flex flex-col gap-y-2.5 col-span-2 md:col-span-4 lg:col-span-3 px-2 ">
                            <h2 className="font-bold text-xl leading-7 text-white capitalize mt-1 ">Calculate your <br/> Profits</h2>
                            <button className="bg-white flex justify-center items-center py-1.5 sm:py-2 px-4 sm:px-5 rounded-xl mr-1 font-bold text-[#0F1629] w-fit">check now <MdArrowRightAlt/>   </button>
                        </div>

                    </div>

                    <div className="col-span-full lg:col-span-3 p-3 rounded-lg bg-gradient-to-tr from-[#FF9865] to-[#EF3031]  grid  grid-cols-3 md:grid-cols-5 gap-4  ">
                        <Image src={bitcoin2} className={"col-span-1 lg:col-span-2"} alt={"calculate_Profits"} width={128} height={128} />

                        <div className="flex flex-col gap-y-2.5 col-span-2 md:col-span-4 lg:col-span-3 px-2 ">
                            <h2 className="font-bold text-xl leading-7 text-white capitalize mt-1">Calculate your tax liability</h2>
                            <button className="bg-white flex justify-center items-center py-1.5 sm:py-2 px-4 sm:px-5 rounded-xl mr-1 font-bold text-[#0F1629] w-fit">check now <MdArrowRightAlt/>   </button>
                        </div>

                    </div>

                    <p className="text-normal col-span-full border-t-[1px] border-t-gray-white pt-4 -mt-2">
                        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                    </p>

                </div>

            </div>
        </div>
    );
};

export default AboutBitCoinComponent;