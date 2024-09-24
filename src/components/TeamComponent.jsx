import React from 'react';
import Image from "next/image";
import team1 from "../assets/imge/team1.png"
import team2 from "../assets/imge/team2.png"

const TeamComponent = () => {
    return (
        <div className="bg-white px-4 py-8">
            <h1 className={"py-2"}>Team</h1>
            <p className="text-normal text-sm block w-full pr-2 mb-4">
                Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
            </p>

            <div className="grid grid-cols-1 gap-4 py-3">
                
                <div className="grid lg:grid-cols-6 grid-cols-1 gap-4 items-center justify-items-center bg-[#E8F4FD] p-4 rounded-lg">

                    <div className="flex flex-col gap-y-1 col-span-1 ">
                        <Image src={team1} alt={"team"} className={"rounded-lg object-contain"} width={95} height={110} />
                        <h3 className={"text-black font-semibold text-[15px] mt-1"}>John Smith</h3>
                        <span className={"text-[#788F9B] font-medium -mt-1 text-[12px]"}>Designation here</span>
                    </div>

                    <p className={"text-normal text-sm leading-[22px] col-span-5 lg:pr-4 -mt-2 lg:-mt-8"}>
                        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
                    </p>


                </div>

                <div className="grid lg:grid-cols-6 grid-cols-1 gap-4 items-center justify-items-center bg-[#E8F4FD] p-4 rounded-lg">

                    <div className="flex flex-col gap-y-1 col-span-1 ">
                        <Image src={team2} alt={"team"} className={"rounded-lg object-contain"} width={95} height={110} />
                        <h3 className={"text-black font-semibold text-[15px] mt-1"}>John Smith</h3>
                        <span className={"text-[#788F9B] font-medium -mt-1 text-[12px]"}>Designation here</span>
                    </div>

                    <p className={"text-normal text-sm leading-[22px] col-span-5 lg:pr-4 -mt-2 lg:-mt-8"}>
                        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
                    </p>


                </div>

                <div className="grid lg:grid-cols-6 grid-cols-1 gap-4 items-center justify-items-center bg-[#E8F4FD] p-4 rounded-lg">

                    <div className="flex flex-col gap-y-1 col-span-1 ">
                        <Image src={team1} alt={"team"} className={"rounded-lg object-contain"} width={95} height={110} />
                        <h3 className={"text-black font-semibold text-[15px] mt-1"}>John Smith</h3>
                        <span className={"text-[#788F9B] font-medium -mt-1 text-[12px]"}>Designation here</span>
                    </div>

                    <p className={"text-normal text-sm leading-[22px] col-span-5 lg:pr-4 -mt-2 lg:-mt-8"}>
                        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
                    </p>


                </div>






            </div>

        </div>
    );
};

export default TeamComponent;