import Link from "next/link";
import React from "react";

const ViewMore = ({ destination }) => {
  return (
    <>
      <Link href={destination}>
        <div className="mx-auto w-36 h-10 flex justify-center items-center bg-primary rounded-[8px] transition hover:bg-[#0067de] focus:outline-none focus:ring focus:ring-yellow-400">
          <h2 className="items-center justify-center text-center text-white text-base font-medium">
            View More
          </h2>
        </div>
      </Link>
    </>
  );
};

export default ViewMore;
