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
                label: "Bitcoin Price (USD)",
                data: sampleData.map((item) => item.price),
                borderColor: "blue ",
                borderWidth: 2,
                fill: true, // Ensure line is not filled under
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
                display: true,
                position: "top", // Position the legend on top of the chart
            },
            tooltip: {
                enabled: true, // Enable tooltips on hover
            },
        },
    };

    return (
        <div className="h-96 w-full ">
            <Line data={chartData} options={options} />
        </div>
    );
}

export default TestChart;
