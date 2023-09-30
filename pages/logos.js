import Logos from "../components/basicpage/Logos";
import CarouselComponent from "../components/sections/CarouselComponent";
import LogoBranding from "../components/sections/LogoBranding";

export default function logos() {
  return (
    <>
      <div className="mt-20">
        <LogoBranding />
        <CarouselComponent />
        <Logos />
      </div>
    </>
  );
}
