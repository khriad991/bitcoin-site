import React from 'react';
import Polygon from "../assets/icon/Polygon.png"
import Image from "next/image";

const TrendingCoinsComponent = () => {
    return (
        <div className="bg-white px-4 py-12">
            <div className="grid grid-cols-1 gap-y-5">
                <h1 className={"-mb-2"}>You May Also Like</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                    {
                        Array.from({length:5}).map((item,id)=>(
                            <div key={id} className="grid grid-cols-1 gap-y-2 py-2 px-4 border-[1px] border-[#E3E3E3]">
                                <div className="flex items-center space-x-1.5 justify-start col-span-1">
                                    <Image src={"https://assets.coingecko.com/coins/images/21061/large/biconomy_logo.jpg?1696520444"} alt={"icon"} width={25} height={25}
                                           className="rounded-full object-contain" />
                                    <p className={"text-[#202020] text-base uppercase ]"}>bng</p>
                                    <span className={"bg-[#EE68551A] py-1 px-2 rounded text-[12px]"}>-2.89%</span>
                                </div>
                                <strong className={"text-[#171717] text-xl font-medium col-span-1"}>$319.34</strong>
                                <Image src={"https://www.coingecko.com/coins/21061/sparkline.svg"} alt={"icon"} width={140} height={60} className="object-contain col-span-1 pr-2 self-auto " />

                            </div>
                        ))
                    }
                    <h1 className={"mt-1 -mb-1 col-span-full "}>Trending Coins</h1>
                    {
                        Array.from({length:5}).map((item,id)=>(
                            <div key={id} className="grid grid-cols-1 gap-y-2 py-2 px-4 border-[1px] border-[#E3E3E3]">
                                <div className="flex items-center space-x-1.5 justify-start col-span-1">
                                    <Image src={"https://assets.coingecko.com/coins/images/21061/large/biconomy_logo.jpg?1696520444"} alt={"icon"} width={25} height={25}
                                           className="rounded-full object-contain" />
                                    <p className={"text-[#202020] text-base uppercase ]"}>bng</p>
                                    <span className={"bg-[#0AB27D0F] py-1 px-2 rounded text-[12px]"}>-2.89%</span>
                                </div>
                                <strong className={"text-[#171717] text-xl font-medium col-span-1"}>$319.34</strong>
                                <Image src={"https://www.coingecko.com/coins/21061/sparkline.svg"} alt={"icon"} width={140} height={60} className="object-contain col-span-1 pr-2 self-auto " />

                            </div>
                        ))
                    }

                </div>



            </div>


        </div>
    );
};

export default TrendingCoinsComponent;