import React from 'react';
import {PiWarningCircleThin} from "react-icons/pi";

import {MdOutlineLibraryBooks} from "react-icons/md";

const SentimentComponent = () => {
    return (
        <div className="bg-white px-4 py-8">
            <div className="">
                <h1>Sentiment</h1>
                <h4 className="mb-3 mt-4 flex items-center gap-x-2">key events
                    <PiWarningCircleThin  className="text-white text-xl bg-[#ABB9BF] rounded-full border-none rotate-[180deg] " />
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between">
                    <div className="flex justify-between gap-x-3 md:gap-x-4 bg-[#E8F4FD] p-4 rounded-lg">
                        <div className="w-11 h-11 bg-[#0082FF] rounded-full flex justify-center items-center p-2">
                            <MdOutlineLibraryBooks color={"#fff"} size={24}/>
                        </div>
                        <div className="flex flex-col text-sm gap-y-2 ">
                            <h6 className="font-medium text-black-md leading-5">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h6>
                            <span className="text-normal ">
                                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.
                                Amet sapien quam viverra adipiscing condimentum. Ac consectetur
                                et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between gap-x-3 md:gap-x-4 bg-[#E8F4FD] p-4 rounded-lg">
                        <div className="w-11 h-11 bg-[#0082FF] rounded-full flex justify-center items-center p-2">
                            <MdOutlineLibraryBooks color={"#fff"} size={24}/>
                        </div>
                        <div className="flex flex-col text-sm gap-y-2 ">
                            <h6 className="font-medium text-black-md leading-5">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h6>
                            <span className="text-normal ">
                                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.
                                Amet sapien quam viverra adipiscing condimentum. Ac consectetur
                                et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
                            </span>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 border-2 border-red col-span-full ">
                        <h4 className="mb-3 mt-4 flex items-center gap-x-2">Analyst Estimates
                            <PiWarningCircleThin  className="text-white text-xl bg-[#ABB9BF] rounded-full border-none rotate-[180deg] " />
                        </h4>
                        
                        <div className="grid grid-cols-5 justify-self-start space-x-8 ">
                            <div className="col-end-1 w-[120px] h-[120px] rounded-full bg-[#EBF9F4] p-2 flex justify-center items-center">
                                <span className="text-[36px] font-medium leading-10 text-[#0FBA83]">76%</span>
                            </div>
                            <div className="col-end-5 col-start-1 flex flex-col gap-y-4 ">
                                <div className="flex items-center gap-x-2">
                                    <p className="text-normal text-[15px] capitalize">buy</p>
                                    <span className="bg-[#0FBA83] w-[400px]  h-2 ml-1"></span>
                                    <p className="text-normal text-[15px] capitalize">78%</p>
                                </div>

                                <div className="flex items-center gap-x-2">
                                    <p className="text-normal text-[15px] capitalize">buy</p>
                                    <span className="bg-[#C7C8CE] w-8 h-2 ml-1"></span>
                                    <p className="text-normal text-[15px] capitalize">8%</p>
                                </div>

                                <div className="flex items-center gap-x-2">
                                    <p className="text-normal text-[15px] capitalize">sell</p>
                                    <span className="bg-[#F7324C] w-10 h-2 ml-1"></span>
                                    <p className="text-normal text-[15px] capitalize">18%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SentimentComponent;