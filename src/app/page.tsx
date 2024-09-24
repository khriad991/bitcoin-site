
import HeroComponent from "@/components/HeroComponent";
import PriceCardComponent from "@/components/PriceCardComponent";
import FrameComponent from "@/components/FrameComponent";
import PerformanceComponents from "@/components/PerformanceComponents";
import SentimentComponent from "@/components/SentimentComponent";
import AboutBitCoinComponent from "@/components/AboutBitCoinComponent";
import TokenomicsComponent from "@/components/TokenomicsComponent";
import TeamComponent from "@/components/TeamComponent";
import TrendingCoinsComponent from "@/components/TrendingCoinsComponent";
import PathComponent from "@/components/miniComponet/PathComponent";

export default function Home() {
  return (
    <>
        <div className="container">
            <PathComponent />
            <div className="grid grid-cols-12 gap-6 ">
                <div className="col-span-full lg:col-span-9 flex flex-col gap-y-4">
                    <HeroComponent />
                    <FrameComponent />
                    <PerformanceComponents/>
                    <SentimentComponent />
                    <AboutBitCoinComponent/>
                    <TokenomicsComponent/>
                    <TeamComponent/>
                    <TrendingCoinsComponent />
                    
                </div>
                <div className="col-span-full lg:col-span-3">
                   <PriceCardComponent/>
                </div>
            </div>
        </div>
    </>
  );
}
