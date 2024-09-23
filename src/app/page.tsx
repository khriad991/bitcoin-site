
import HeroComponent from "@/components/HeroComponent";
import PriceCardComponent from "@/components/PriceCardComponent";
import FrameComponent from "@/components/FrameComponent";
import PerformanceComponents from "@/components/PerformanceComponents";

export default function Home() {
  return (
    <>
        <div className="container">
            <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-full lg:col-span-9 flex flex-col gap-y-4">
                    <HeroComponent />
                    <FrameComponent />
                    <PerformanceComponents/>
                </div>
                <div className="col-span-full lg:col-span-3">
                   <PriceCardComponent/>
                </div>
            </div>
        </div>
    </>
  );
}
