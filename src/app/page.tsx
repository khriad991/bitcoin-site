
import HeroComponent from "@/components/HeroComponent";
import PriceCardComponent from "@/components/PriceCardComponent";

export default function Home() {
  return (
    <>
        <div className="container">
            <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-full lg:col-span-9">
                    <HeroComponent />
                </div>
                <div className="col-span-full lg:col-span-3">
                   <PriceCardComponent/>
                </div>
            </div>
        </div>
    </>
  );
}
