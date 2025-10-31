import BlogCard from "@/components/cards/BlogCard";
import ClientHome from "@/pages/Home/ClientHome";
import ContactHome from "@/pages/Home/ContactHome";
import Indicators from "@/pages/Home/Indicators";
import ServicesHome from "@/pages/Home/ServicesHome";
import {
  ArrowLeftRight,
  ArrowRight,
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
                  we provide reliable, high-quality construction services
                  tailored to your exact needs.
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

      {/* <----delivering section ------> */}
      <div className="min-h-[88vh] flex flex-col gap-12 mx-auto py-6 max-w-6xl">
        {/* the header  */}
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl font-semibold text-secondary leading-tight">
            Delivering Excellence Through{" "}
            <span className="text-primary block">
              {" "}
              Expertise and Dedication{" "}
            </span>
          </h2>
        </div>

        {/* the stats */}
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col gap-2 bg-main shadow-xl p-6 rounded-lg  border border-main/20">
            <h1 className="text-secondary animate-pulse  font-bold text-6xl">
              98%
            </h1>
            <p className="text-text leading-relaxed tracking-wider">
              We use efficient project management to meet timelines for all your
              hardscaping and bricklaying needs
            </p>
          </div>

          <div className="flex flex-col gap-2 bg-main shadow-xl p-6 rounded-lg  border border-main/20">
            <h1 className="text-secondary animate-pulse  font-bold text-6xl">
              750+
            </h1>
            <p className="text-text leading-relaxed tracking-wider">
              Proven experience in residential, commercial, and specialist
              projects across all of Sydney Metro
            </p>
          </div>
        </div>

        {/* the get quote section */}
        <div className="text-center ">
          <div className="bg-white flex flex-col gap-3  justify-center items-center rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto ">
            <h3 className="text-2xl font-semibold text-dark">
              Ready to Start Your Project?
            </h3>
            <p className="text-text">
              Join 750+ satisfied clients who trusted us with their vision
            </p>
            <button className="bg-primary w-fit cursor-pointer text-main px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:-translate-y-1 ">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* <---client section---> */}
      <ClientHome />

      {/* <---contact section----> */}
      <ContactHome />

      {/* <---blog section----> */}
      <div className='min-h-[88vh] flex flex-col gap-6 px-8 py-4 rounded-lg'>
        <h1 className="text-center text-4xl font-semibold text-secondary tracking-wider">Latest Blogs</h1>
        
        {/* blog cards */}
        <div className="w-full grid grid-cols-4 gap-6">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>

          {/* view all blogs btn */}
        <div className="flex justify-center flex-row ">
            <button className=" bg-secondary rounded-3xl items-center gap-2 py-2 px-4 text-sm text-main  flex flex-row">
              View All Blogs 
              <ArrowRight />
            </button>
             
        </div>
      </div>
    </div>
  );
}

export default page;
