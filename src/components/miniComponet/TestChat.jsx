"use client"
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js";
import Image from "next/image";
import bitcoin from "@/assets/icon/bitcoin.png"
import {FaSortUp} from "react-icons/fa";
import React from "react";


// Register the necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);



function TestChart() {
    // Sample data for the chart
    const sampleData = [
        { date: "2023-09-01", price: 24000 },
        { date: "2023-09-02", price: 25200 },
        { date: "2023-09-03", price: 24800 },
        { date: "2023-09-04", price: 25500 },
        { date: "2023-09-05", price: 26000 },
        { date: "2023-09-06", price: 27500 },
        { date: "2023-09-07", price: 27800 },
        { date: "2023-09-08", price: 29000 },
        { date: "2023-09-09", price: 30000 },
        { date: "2023-09-10", price: 30300 },
        { date: "2023-09-11", price: 31000 },
        { date: "2023-09-12", price: 31900 },
        { date: "2023-09-13", price: 32600 },
        { date: "2023-09-14", price: 31000 },
        { date: "2023-09-15", price: 30000 },
    ];
    const chartData = {
        labels: sampleData.map((item) => new Date(item.date).toLocaleDateString()), // Convert date to readable format
        datasets: [
            {
                // No label here to avoid the empty box in the legend
                data: sampleData.map((item) => item.price),
                borderColor: "blue",
                borderWidth: 1,
                borderRadius: 10,
                fill: true, // Ensure the line is not filled under
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow the chart to grow dynamically
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 8, // Limit the number of x-axis ticks
                },
            },
            y: {
                ticks: {
                    beginAtZero: true, // Ensure y-axis starts at 0
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Disable the legend entirely if you don't need it
            },
            tooltip: {
                enabled: true, // Enable tooltips on hover
            },
        },
    };


    return (
        <div>
            <div className="grid grid-cols-1 gap-y-4 ">
                <div className="col-span-full flex justify-start items-center space-x-2">
                    <Image src={bitcoin} alt={"BTC"} width={26} height={36} className={"rounded-full object-cover"} />
                    <h4 className={"text-2xl font-semibold text-black-md capitalize"}>bitcoin</h4>
                    <span className="text-normal text-base font-semibold pr-5">btc</span>
                    <p className={"bg-[#808A9D] py-2 px-4 font-medium text-white text-base rounded-lg capitalize"}>rank 1</p>
                </div>


                <div className="col-span-full flex justify-start space-x-4">
                    <h4 className={"text-[28px] font-semibold text-black "}>$46,953.04</h4>
                    <div className="bg-[#EBF9F4] rounded border-dotted border-2 border-[#14B079] px-2 flex space-x-1 items-center ">
                        <FaSortUp size={14} className={"mt-2 w-[11px] h-2 "} color={"#14B079"}/>
                        <h4 className="text-[#14B079] font-semibold text-base">2.51%</h4>
                    </div>
                    <span className="text-normal text-base font-medium ">(24H)</span>
                </div>
                <h4 className={"text-[#0B1426] text-base font-medium -mt-3"}>₹ 39,42,343</h4>

                <div className="flex justify-between items-center">
                    <h4 className={"text-sm sm:text-base text-black-md font-semibold"}>Bitcoin Price Chart (USD)</h4>
                    <ul className="flex items-center justify-end space-x-1.5 md:space-x-4">
                        <li className={"uppercase text-[#5D667B] text-[13px] font-medium "}>1h</li>
                        <li className={"uppercase text-[#5D667B] text-[13px] font-medium "}>24h</li>
                        <li className={"uppercase text-[#5D667B] text-[13px] font-medium "}>7d</li>
                        <li className={"uppercase text-[#5D667B] text-[13px] font-medium "}>1m</li>
                        <li className={"uppercase text-[#5D667B] text-[13px] font-medium "}>3m</li>
                        <li className={"uppercase text-[#5D667B] text-[13px] font-medium "}>6m</li>
                        <li className={"uppercase text-[#5D667B] text-[13px] font-medium hidden sm:block"}>1y</li>
                        <li className={"uppercase text-[#5D667B] text-[13px] font-medium "}>all</li>
                    </ul>

                </div>



                <div className="col-span-full h-80">
                    <Line data={chartData} options={options} />
                </div>
            </div>
        </div>

    );
}

export default TestChart;
