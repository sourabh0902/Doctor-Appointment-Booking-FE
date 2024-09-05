import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden flex justify-center items-center rounded-lg sm:h-80 lg:order-last lg:h-full ">
              <div className="blob"></div>
              <div className="absolute z-0 px-5 py-3 rounded-xl bg-white border-[1px] top-8 right-8 text-md font-medium flex items-center justify-center gap-2 drop-shadow-[6px_6px_3px_rgba(0,0,0,0.05)]">
                <span className="text-3xl text-primary font-bold">24/7</span>
                Service
              </div>
              <div className="absolute gap-3 px-3 rounded-xl py-4 bg-white border-[1px] left-0 bottom-3 z-30 flex drop-shadow-[6px_6px_3px_rgba(0,0,0,0.05)]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.81555 6.49861C6.72629 6.44556 10.2895 4.95347 12.9996 2.52783C15.7097 4.95347 19.2729 6.44556 23.1837 6.49861C23.3257 7.34462 23.3996 8.21371 23.3996 9.10008C23.3996 15.8924 19.0586 21.6708 12.9996 23.8124C6.94061 21.6708 2.59961 15.8924 2.59961 9.10008C2.59961 8.21372 2.67353 7.34462 2.81555 6.49861ZM17.6067 11.1071C17.9972 10.7166 17.9972 10.0835 17.6067 9.69293C17.2162 9.30241 16.583 9.30241 16.1925 9.69293L11.6996 14.1858L9.80671 12.2929C9.41619 11.9024 8.78302 11.9024 8.3925 12.2929C8.00197 12.6835 8.00197 13.3166 8.3925 13.7071L10.9925 16.3071C11.18 16.4947 11.4344 16.6 11.6996 16.6C11.9648 16.6 12.2192 16.4947 12.4067 16.3071L17.6067 11.1071Z"
                    fill="#2AA8FF"
                  />
                </svg>
                <span className="text-md font-medium">Regular Checkup</span>
              </div>
              <Image
                src={"/assets/images/banner-image.png"}
                alt="banner image"
                width={300}
                height={300}
                className="flex absolute object-contain object-center h-full w-full"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="md:text-3xl md:leading-none font-medium sm:text-2xl">
                Skip the travel! Take Online
              </h2>
              <h2 className="md:text-5xl md:leading-normal font-bold sm:text-3xl">
                Doctor <span className="text-primary">Consultation</span>
              </h2>

              <p className="mt-2 md:text-xl sm:text-base text-gray-600">
                Book instantly with a 24x7 specialist or choose to video visit a
                particular doctor.
              </p>

              <Button className="mt-8 rounded-[8px] bg-primary px-9 py-3 text-base font-medium text-white text-center justify-center items-center transition hover:bg-[#0067de] focus:outline-none focus:ring focus:ring-yellow-400">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
