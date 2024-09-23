import Frame from "../assets/Frame.png";

const PriceCard = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto">
                {/* Card Content */}
                <h1 className="text-3xl font-extrabold text-white mb-4 text-center">
                    Get Started with KoinX for Free
                </h1>
                <p className="text-white text-sm leading-relaxed mb-6 text-center">
                    Enjoy a range of features at no cost. KoinX helps you stay informed
                    and prepared for your tax reports with ease.
                </p>

                {/* Image Section */}
                <div className="flex justify-center mb-6">
                    <img
                        src={Frame}
                        alt="Pricing features"
                        className="w-48 h-auto object-contain"
                    />
                </div>

                {/* Button Section */}
                <div className="flex justify-center">
                    <button className="bg-white text-black font-bold py-3 px-6 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300">
                        Get Started For Free→
                    </button>
                </div>
            </div>
        </>
    );
};

export default PriceCard;
