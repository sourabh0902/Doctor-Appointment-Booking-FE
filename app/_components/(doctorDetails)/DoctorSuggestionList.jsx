import { atomData } from "@/app/_utils/atom";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const doctorSuggestionList = () => {
  const DoctorList = useAtom(atomData);
  // console.log(DoctorList[0]);

  return (
    <>
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-[20px] leading-9">More Doctors</h1>
      <div className="flex flex-col border border-slate-300 border-solid p-5 rounded-lg">
        {DoctorList[0] &&
          DoctorList[0].map((doctor, index) => (
            <Link href={`/details/` + doctor?.id}>
              <div className="flex flex-wrap sm:flex-col lg:flex-row mt-5 gap-2 hover:cursor-pointer hover:bg-slate-200 rounded-2xl p-3">
                <Image
                  src={doctor?.attributes?.Image?.data[0]?.attributes?.url}
                  alt={doctor?.attributes?.Name}
                  width={200}
                  height={200}
                  className="rounded-full w-[80px] h-[80px] object-cover object-top"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="w-fit text-primary items-baseline font-semibold text-[10px] bg-blue-100 p-1 rounded-3xl">
                    {doctor?.attributes?.categories?.data[0]?.attributes?.Name}
                  </h3>
                  <h2 className="font-bold text-sm">
                    {doctor?.attributes?.Name}
                  </h2>
                  <h2 className="font-semibold text-[12px] text-primary">
                    {doctor?.attributes?.Year_of_Experience} Years
                  </h2>
                </div>
              </div>
            </Link>
          ))}
      </div>
      </div>
    </>
  );
};

export default doctorSuggestionList;
