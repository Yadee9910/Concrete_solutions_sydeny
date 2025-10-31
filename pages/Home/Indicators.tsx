import { EarthIcon, HandCoins, NotepadText } from "lucide-react";

function Indicators() {
  return (
    <>
      {/* indicators */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 py-4 text-center">
        <div className="p-6">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <EarthIcon className="text-secondary" />
          </div>
          <h3 className="font-semibold text-secondary mb-2">
            Reliable Local Brickies
          </h3>
          <p className="text-text text-sm">
            If you need a bricklayer for repairs, additions, or insurance work,
            our local brickies are ready to mobilise quickly across Sydney.
          </p>
        </div>

        <div className="p-6">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <HandCoins className="text-secondary" />
          </div>
          <h3 className="font-semibold text-secondary mb-2">
            Start-to-Finish Project Management
          </h3>
          <p className="text-text text-sm">
            From excavation and site prep to final retaining wall installation,
            we handle the entire process with one reliable team
          </p>
        </div>

        <div className="p-6">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <NotepadText className="text-secondary" />
          </div>
          <h3 className="font-semibold text-secondary mb-2">
            Transparent Pricing & Planning
          </h3>
          <p className="text-text text-sm">
            Get a clear breakdown of the retaining wall cost, concrete driveway
            cost, or any project price with a free, no-obligation quote today
          </p>
        </div>
      </div>
    </>
  );
}

export default Indicators;
