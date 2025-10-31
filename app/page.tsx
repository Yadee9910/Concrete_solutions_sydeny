import Indicators from "@/pages/Home/Indicators";
import ServicesHome from "@/pages/Home/ServicesHome";
import {
  ArrowLeftRight,
  Building,
  Home,
  Phone,
  ShieldCheck,
} from "lucide-react";


function page() {
  return (
    <div className="flex flex-col gap-5">
      
        {/* <----the who we are section-------> */}
        <div className="min-h-[88vh] bg-main py-8  px-4">
          {/* Main content section */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* left col content */}
              <div className="space-y-8">
                {/* header */}
                <div className="space-y-6">
                  <h1 className=" bg-secondary w-fit p-2  font-medium text-main rounded-3xl py-2 px-4 text-sm leading-tight">
                    Who We Are
                  </h1>
                  <h2
                    className="text-2xl md:text-5xl font-semibold text-secondary leading-tight
                  "
                  >
                    Your Sydney Bricklaying Contractors & Masonary Experts
                  </h2>
                </div>

                {/* description */}
                <div className="space-y-6">
                  <p className="text-lg text-text leading-relaxed">
                    We are local bricklayers dedicated to delivering exceptional
                    brickwork and structural integrity across Sydney. From
                    residential foundations to complex commercial retaining walls,
                    we provide reliable, high-quality construction services tailored
                    to your exact needs.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="inline-flex items-center text-white px-6 py-4 rounded-xl shadow-lg bg-linear-to-r from-primary to-red-500">
                    <div className="text-6xl font-bold mr-3">5+</div>
                    <div className="text-left">
                      <div className="font-semibold">Years of Experience</div>
                      <div className="text-secondary font-medium">
                        Trusted Sydney Experts
                      </div>
                    </div>
                  </div>

                  {/* call details */}
                  <div className="bg-secondary/10 rounded-2xl p-6 ">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-center sm:text-left">
                        <h3 className="font-semibold text-secondary mb-1">
                          Ready to Start Your Project
                        </h3>
                        <p className="text-dark/70 text-sm">
                          Get a free quote today
                        </p>
                      </div>

                      <a
                        href="tel: 0778946789"
                        className="bg-secondary hover:bg-secondary/80 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2"
                      >
                        <Phone />
                        Call Us: 077 894 6789
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image & Features */}
              <div className="space-y-8">
                {/* Main Image */}
                <div className="relative group">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <div className="aspect-video bg-linear-to-br from-gray-200 to-lex items-center justify-center">
                      gray-300 f
                      {/* <Image 
                        src={img}
                        alt="image"
                        className=''
                      /> */}
                    </div>
                  </div>
                </div>

                {/* Services Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* residential */}
                  <div className="bg-main/10 shadow-lg border border-secondary/10 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <Home className="size-4 text-main" />
                      </div>
                      <span className="font-semibold text-gray-900">
                        Residential
                      </span>
                    </div>
                  </div>

                  {/* commercial     */}
                  <div className="bg-main/10 shadow-lg border border-secondary/10 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <Building className="size-4 text-main" />
                      </div>
                      <span className="font-semibold text-gray-900">
                        Commercial
                      </span>
                    </div>
                  </div>

                  {/* Retaining Walls */}
                  <div className="bg-main/10 shadow-lg border border-secondary/10 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <ArrowLeftRight className="size-4 text-main" />
                      </div>
                      <span className="font-semibold text-gray-900">
                        Retaining Walls
                      </span>
                    </div>
                  </div>

                  {/* structural integrity */}
                  <div className="bg-main/10 shadow-lg border border-secondary/10 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <ShieldCheck className="size-4 text-main" />
                      </div>
                      <span className="font-semibold text-gray-900">
                        Structural Integrity
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    {/* <----indicators section----> */}
    <Indicators />

    {/* <---home service section----> */}
    <ServicesHome />

    </div>

  );
}

export default page;
