import Frame from "../assets/imge/frame.jpg";
import Image from "next/image";

const PriceCardComponent = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-blue to-blue p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto">
                {/* Card Content */}
                <h1 className="text-2xl font-bold text-white text-center leading-8 mb-4">
                    Get Started with KoinX for Free
                </h1>
                <p className="text-white text-sm leading-relaxed mb-6 text-center">
                    Enjoy a range of features at no cost. KoinX helps you stay informed
                    and prepared for your tax reports with ease.
                </p>

                {/* Image Section */}
                <div className="flex justify-center mb-4">
                    <Image
                        src={Frame}
                        alt="Pricing features"
                        width={178}
                        height={166}
                        className=" object-contain"
                    />
                </div>

                {/* Button Section */}
                <div className="flex justify-center group">
                    <button className="bg-white text-black group-hover:text-blue font-bold py-3 px-6 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300">
                        Get Started For Free→
                    </button>
                </div>
            </div>
        </>
    );
};

export default PriceCardComponent;
