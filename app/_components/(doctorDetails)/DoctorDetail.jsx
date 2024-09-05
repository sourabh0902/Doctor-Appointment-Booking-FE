import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import BookAppointment from "../BookAppointment";

const DoctorDetail = ({ doctor }) => {

  const socialMedialist = [
    {
      id: 1,
      icon: "/assets/images/facebook.svg",
      url: "",
    },
    {
      id: 2,
      icon: "/assets/images/linkedin.svg",
      url: "",
    },
    {
      id: 3,
      icon: "/assets/images/youtube.svg",
      url: "",
    },
    {
      id: 4,
      icon: "/assets/images/x.svg",
      url: "",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-x-5 border border-slate-300 border-solid p-5 rounded-lg">
        {/* Doctor Image */}
        <div>
          <Image
            src={doctor?.attributes?.Image?.data[0]?.attributes?.url}
            width={500}
            height={500}
            alt={`${doctor?.attributes?.Name} Profile Pic`}
            className="rounded-lg w-full h-[350px] object-cover md:w-[350px] md:h-[350px] md:object-cover object-top"
          />
        </div>

        {/* Doctor Info */}
        <div className="col-span-2 gap-3 md:gap-4 flex flex-col mt-5">
          <h1 className="font-bold text-2xl">{doctor?.attributes?.Name}</h1>
          <h2 className="flex gap-2 text-gray-500 text-md">
            <GraduationCap />
            {doctor?.attributes?.Year_of_Experience} years of experience
          </h2>
          <h2 className="flex gap-2 text-gray-500 text-md">
            <MapPin />
            {doctor?.attributes?.Address}
          </h2>
          <h3 className="w-fit text-primary items-baseline font-bold text-[12px] bg-blue-100 p-2 rounded-3xl">
            {doctor?.attributes?.categories?.data[0]?.attributes?.Name}
          </h3>
          <div className="flex gap-2">
            {doctor &&
              socialMedialist.map((item, id) => (
                <Image
                  src={item?.icon}
                  width={30}
                  height={30}
                  alt="Social Media Icons"
                  key={id}
                  className="cursor-pointer"
                />
              ))}
          </div>
          <BookAppointment doctor={doctor} />
        </div>
      </div>

      {/*About Doctor*/}
      <div className="border border-slate-300 border-solid p-5 rounded-lg">
        <h1 className="font-bold text-[20px]">About Me</h1>
        <p className="text-gray-500 tracking-wider">
          {doctor?.attributes?.About}
        </p>
      </div>
    </>
  );
};

export default DoctorDetail;
