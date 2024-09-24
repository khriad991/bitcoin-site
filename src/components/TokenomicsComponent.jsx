
'use client'
import React from 'react';
import {Cell, Pie, PieChart,} from "recharts";

const data = [
    { name: "Group A", value: 100 },
    { name: "Group B", value: 500 },
];
const COLORS = [ "#FFBB28", "#0088FE",];
const TokenomicsComponent = () => {
    return (
        <div className="bg-white px-4 py-6 hidden sm:block">
            <h1>Tokenomics</h1>
            <div className=" grid grid-cols-1 gap-2">

                <h2 className={"text-[#1D1D1D] text-xl font-medium leading-8  "}>Initial Distribution</h2>
                <div className="flex justify-start items-center  ">
                    <div className="col-span-1 px-2 ">
                        <PieChart width={180} height={180}>
                            <Pie
                                data={data}
                                cx={75}
                                cy={80}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                // paddingAngle={-1}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>

                    <div className="">

                       <div className="flex justify-center items-center gap-x-3">
                           <span className="w-3 h-3 bg-[#0082FF] rounded-full"></span>
                           <span className={"text-base text-black-md"}>Crowdsale investors: 80%</span>
                       </div>
                       <div className="flex justify-center items-center gap-x-3">
                            <span className="w-3 h-3 bg-[#FAA002] rounded-full"></span>
                            <span className={"text-base text-black-md"}>Crowdsale investors: 8%</span>
                        </div>
                    </div>

                </div>
                <p className="text-normal text-sm pr-4 text-justify leading-6 ">
                    Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
                </p>
            </div>

        </div>
    );
};

export default TokenomicsComponent;