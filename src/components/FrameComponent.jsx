import React from 'react';
import Link from "next/link";

const FrameComponent = () => {
    return (
        <>
            <div className="grid gap-y-4 grid-cols-2 sm:grid-cols-3 grid-flow-dense md:grid-cols-5 lg:grid-cols-7 justify-items-stretch lg:border-b-[1px] lg:border-b-gray-white py-5 my-1.5">
                <Link className="font-semibold text-base text-blue " href="#">Overview</Link>
                <Link className="font-medium text-base text-normal " href="#">Fundamentals</Link>
                <Link className="font-medium text-base text-normal " href="#">News Insights</Link>
                <Link className="font-medium text-base text-normal " href="#">Sentiments</Link>
                <Link className="font-medium text-base text-normal " href="#">Team</Link>
                <Link className="font-medium text-base text-normal " href="#">Technicals</Link>
                <Link className="font-medium text-base text-normal " href="#">Tokenomics</Link>
            </div>
        </>
    );
};

export default FrameComponent;