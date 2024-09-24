import React from 'react';
import {RxDoubleArrowRight} from "react-icons/rx";

const PathComponent = () => {
    return (
        <div className={"py-3"}>
            <div className="flex justify-start items-center space-x-2">
                <span className={"text-[#3E5765] text-base"}>Cryptocurrencies</span>
                <RxDoubleArrowRight color={"#3E5765"} className={"text-sm "}/>
                <span className={"text-[#0F1629] text-base font-medium"}>Bitcoin</span>
            </div>

        </div>
    );
};

export default PathComponent;