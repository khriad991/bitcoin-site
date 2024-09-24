import Frame from "../assets/imge/frame.jpg";
import ethereum from "../assets/icon/ethereum.png";
import bitcoin from "../assets/icon/bitcoin.png";
import Image from "next/image";
import {FaSortUp} from "react-icons/fa";
import React from "react";

const PriceCardComponent = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-blue to-blue p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto mb-4">

                <h1 className="text-2xl font-bold text-white text-center leading-8 mb-4">
                    Get Started with KoinX for Free
                </h1>
                <p className="text-white text-sm leading-relaxed mb-6 text-center">
                    Enjoy a range of features at no cost. KoinX helps you stay informed
                    and prepared for your tax reports with ease.
                </p>

                <div className="flex justify-center mb-4">
                    <Image
                        src={Frame}
                        alt="Pricing features"
                        width={178}
                        height={166}
                        className=" object-contain"
                    />
                </div>
                <div className="flex justify-center group">
                    <button className="group bg-white text-black group-hover:text-blue font-bold py-3 px-6 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300">
                        Get Started For Free<span className="group-hover:ml-2">→</span>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-y-5 bg-white p-4 rounded-lg">
                <h1>Trending Coins (24h)</h1>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                        <Image src={ethereum} alt={"ETH"} width={24} height={24}
                               className={"object-contain w-6 h-6 bg-[#5A7BC6] rounded-full"}/>
                        <h4 className="text-base">Ethereum(ETH)</h4>

                    </div>
                    <div className="bg-[#EBF9F4] rounded  px-2 flex space-x-1 items-center ">
                        <FaSortUp size={14} className={"mt-2 w-[11px] h-2 "} color={"#14B079"}/>
                        <h4 className="text-[#14B079] font-medium text-base">2.51%</h4>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                        <Image src={bitcoin} alt={"ETH"} width={24} height={24}
                               className={"object-contain w-[24px] h-[24px] bg-[#5A7BC6] rounded-full"}/>
                        <h4 className="text-base">Ethereum(ETH)</h4>

                    </div>
                    <div className="bg-[#EBF9F4] rounded  px-2 flex space-x-1 items-center ">
                        <FaSortUp size={14} className={"mt-2 w-[11px] h-2 "} color={"#14B079"}/>
                        <h4 className="text-[#14B079] font-medium text-base">2.51%</h4>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                        <Image src={ethereum} alt={"ETH"} width={24} height={24}
                               className={"object-contain w-6 h-6 bg-[#5A7BC6] rounded-full"}/>
                        <h4 className="text-base">Ethereum(ETH)</h4>

                    </div>
                    <div className="bg-[#EBF9F4] rounded  px-2 flex space-x-1 items-center ">
                        <FaSortUp size={14} className={"mt-2 w-[11px] h-2 "} color={"#14B079"}/>
                        <h4 className="text-[#14B079] font-medium text-base">2.51%</h4>
                    </div>
                </div>

            </div>
        </>
    );
};

export default PriceCardComponent;
