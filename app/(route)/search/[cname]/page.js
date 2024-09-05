"use client";

import GlobalApis from "@/app/_utils/GlobalApis";
import React, { useEffect, useState } from "react";
import DoctorCard from "@/app/_components/DoctorCard";
import DoctorCardSkeleton from "@/app/_components/(skeleton)/DoctorCardSkeleton";
import { toast } from "sonner";

const page = ({ params }) => {
  const [docList, setdocList] = useState([]);
  const [loading, setloading] = useState(true);
  const [Cname, setCname] = useState(null)
  // console.log(loading);

  useEffect(() => {
    const decodedString = decodeURIComponent(params?.cname)
    setCname(decodedString);
  }, [params?.cname])
  

  useEffect(() => {
    getDoctors();
  }, [params.cname]);

  const getDoctors = () => {
    GlobalApis?.getDoctosByCategory(params.cname).then((resp) => {
      // console.log(resp?.data, "resp of docs by cat");
      setdocList(resp?.data);
      setloading(false);
    });
  };

  const skeletonArray = Array.from({ length: docList?.length });
  // console.log(skeletonArray);

  return (
    <>
      <div className="flex flex-col ml-5 gap-6">
        <h2 className="underlineEffect font-bold text-4xl text-[#1B3C74] w-fit">{Cname}</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
          {loading ? (
            //Skeleton Loading
            <DoctorCardSkeleton index={0} />
          ) : docList?.length > 0 ? (
            docList?.map((item, index) => (
              <DoctorCard item={item} index={index} />
            ))
          ) : (
            <h2>No results found.</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
