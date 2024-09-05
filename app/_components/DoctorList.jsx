import React from "react";
import { useAtom } from "jotai";
import { atomData } from "../_utils/atom"; // Assuming atomData holds doctor data
import ViewMore from "./ViewMoreButton";
import DoctorCardSkeleton from "./(skeleton)/DoctorCardSkeleton";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

const DoctorList = () => {
  const doctorList = useAtom(atomData);
  // console.log(doctorList[0]);

  // Generate an array of the same length as doctorList
  const skeletonArray = Array.from({ length: doctorList[0]?.length });

  return (
    <>
      <section className=" mb-16">
        <div className=" flex flex-col mx-auto max-w-screen-xl gap-12">
          <h2 className="w-full h-auto flex justify-center items-center font-bold text-4xl text-[#1B3C74]">
          Our Medical <span className="text-primary">&nbsp;Specialist </span>
          </h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            // freeMode={true}
            // loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2.6,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3.8,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {doctorList[0]?.length > 0
              ? doctorList[0]?.map((item, index) => (
                  <SwiperSlide
                    className="relative w-full h-full rounded-md flex flex-col select-none"
                    key={index}
                  >
                    <Image
                      src={item?.attributes?.Image?.data[0]?.attributes?.url}
                      alt={"Doc's Pic"}
                      width={500}
                      height={500}
                      className="h-[350px] w-[305px] object-center rounded-lg object-cover"
                    />
                    <div className="absolute w-full h-max bottom-0 pb-4 px-4 mx-auto ">
                      <div className="py-3 pl-6 rounded-lg gap-1 bg-gradient-to-r from-[#9CC9DF] to-[#C3C6C9] backdrop-blur">
                        <h1 className="text-[22px] font-medium text-white">
                          {item?.attributes?.Name}
                        </h1>
                        <h2 className="text-base font-medium text-white">
                          {
                            item?.attributes?.categories?.data[0]?.attributes
                              ?.Name
                          }
                        </h2>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              : //Skeleton Loading
                {
                  /* <>
                {skeletonArray.map((item, index) => (
                  <DoctorCardSkeleton index={index} />
                ))}
              </> */
                }}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DoctorList;
