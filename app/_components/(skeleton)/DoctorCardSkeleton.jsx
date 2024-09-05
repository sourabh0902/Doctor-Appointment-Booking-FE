import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const DoctorCardSkeleton = ({index}) => {
  return (
    <>
      <div className="flex" key={index}>
        <Skeleton className="h-80 w-full rounded-xl" />
      </div>
    </>
  );
};

export default DoctorCardSkeleton;
