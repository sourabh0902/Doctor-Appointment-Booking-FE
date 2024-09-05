'use client'
import React from "react";

import Image from "next/image";
import Link from "next/link";

const DoctorCard = ({ item, props }) => {
  return (
    <>
      <div
        className=" border-[1px] flex flex-col gap-4 rounded-lg p-3 bg-[#FAFAFA]"
        key={props}
      >
        <Image
          src={item?.attributes?.Image?.data[0]?.attributes?.url}
          alt={"Doc's Pic"}
          width={500}
          height={200}
          className="h-[250px] object-center rounded-lg w-full object-cover"
        />
        <div className="  flex items-baseline flex-col">
          <h3 className=" text-primary font-bold text-[12px] bg-blue-100 p-2 rounded-3xl">
            {item?.attributes?.categories?.data[0]?.attributes?.Name}
          </h3>
          <h3 className=" font-bold mt-3">{item?.attributes?.Name}</h3>
        </div>
        <div>
          <Link href={"/details/" + item?.id} className="w-full">
            <h2 className="flex justify-center items-center bg-primary text-white rounded-md px-1 py-2">
              View Profile
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
