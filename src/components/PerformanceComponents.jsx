import React from 'react';
import {PiWarningCircleThin} from "react-icons/pi";

const PerformanceComponents = () => {
    return (
        <>
          <div className="flex flex-col gap-6 w-full bg-white px-4 pt-6 pb-10 mt-2 ">
              <div className="">
                  <h1 className="mb-6">Performance</h1>
                  <div className="flex flex-col gap-y-8">
                      <div className="grid grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center ">
                          <div className="col-start-0 col-end-1 flex flex-col gap-y-2">
                              <span className="text-sm font-medium">Today’s Low</span>
                              <span className="text-base font-medium">46,930.22</span>
                          </div>
                          <div className="col-start-1 col-end-7">
                              <div className="w-full rounded-lg h-[5px] bg-gradient-to-r from-red to-[#11EB68] "></div>
                          </div>
                          <div className="col-start-7 col-end-[-1] flex flex-col gap-y-2">
                              <span className="text-sm font-medium">Today’s High</span>
                              <span className="text-base font-medium">86,930.22</span>
                          </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center ">
                          <div className="col-start-0 col-end-1 flex flex-col gap-y-2">
                              <span className="text-sm font-medium">Today’s Low</span>
                              <span className="text-base font-medium">46,930.22</span>
                          </div>
                          <div className="col-start-1 col-end-7">
                              <div className="w-full rounded-lg h-[5px] bg-gradient-to-r from-red to-[#11EB68] "></div>
                          </div>
                          <div className="col-start-7 col-end-[-1] flex flex-col gap-y-2">
                              <span className="text-sm font-medium">Today’s High</span>
                              <span className="text-base font-medium">86,930.22</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="">
                  <h4 className="mb-6 flex items-center gap-x-2">Fundamentals
                      <PiWarningCircleThin  className="text-white text-xl bg-[#ABB9BF] rounded-full border-none rotate-[180deg] " />
                  </h4>
                  <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-8">
                      <div className="grid grid-cols-1 justify-between">
                          <div className="grid grid-cols-2 py-4 border-b-[1px] border-b-gray-white">
                              <span className="text-normal text-[12px] capitalize">Bitcoin Price</span>
                              <span className="text-black text-[12px]">$16,815.46</span>
                          </div>

                          <div className="grid grid-cols-2 py-4 border-b-[1px] border-b-gray-white">
                              <span className="text-normal text-[12px] capitalize">24h Low / 24h High</span>
                              <span className="text-black text-[12px]">$16,382.07 / $16,874.12</span>
                          </div>

                          <div className="grid grid-cols-2 py-4 border-b-[1px] border-b-gray-white">
                              <span className="text-normal text-[12px] capitalize">7d Low / 7d High</span>
                              <span className="text-black text-[12px]">$16,382.07 / $16,874.12</span>
                          </div>

                          <div className="grid grid-cols-2 py-4 border-b-[1px] border-b-gray-white">
                              <span className="text-normal text-[12px] capitalize">Trading Volume</span>
                              <span className="text-black text-[12px]">$23,249,202,782</span>
                          </div>

                          <div className="grid grid-cols-2 py-4 border-b-[1px] border-b-gray-white">
                              <span className="text-normal text-[12px] capitalize">Market Cap Rank</span>
                              <span className="text-black text-[12px]">#1</span>
                          </div>

                      </div>
                      <div className="grid grid-cols-1 justify-between">
                          <div className="grid grid-cols-2 py-4 border-b-[1px] border-b-gray-white">
                              <span className="text-normal text-[12px] capitalize">Bitcoin Price</span>
                              <span className="text-black text-[12px]">$16,815.46</span>
                          </div>

                          <div className="grid grid-cols-2 py-4 border-b-[1px] border-b-gray-white">
                              <span className="text-normal text-[12px] capitalize">24h Low / 24h High</span>
                              <span className="text-black text-[12px]">$16,382.07 / $16,874.12</span>
                          </div>

                          <div className="grid grid-cols-2 py-4 border-b-[1px] border-b-gray-white">
                              <span className="text-normal text-[12px] capitalize">7d Low / 7d High</span>
                              <span className="text-black text-[12px]">$16,382.07 / $16,874.12</span>
                          </div>

                          <div className="grid grid-cols-2 py-4 border-b-[1px] border-b-gray-white">
                              <span className="text-normal text-[12px] capitalize">Trading Volume</span>
                              <span className="text-black text-[12px]">$23,249,202,782</span>
                          </div>

                          <div className="grid grid-cols-2 py-4 border-b-[1px] border-b-gray-white">
                              <span className="text-normal text-[12px] capitalize">Market Cap Rank</span>
                              <span className="text-black text-[12px]">#1</span>
                          </div>

                      </div>
                  </div>
              </div>
          </div>

        </>
    );
};

export default PerformanceComponents;