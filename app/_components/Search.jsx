"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GlobalApis from "../_utils/GlobalApis";
import Image from "next/image";
import { useAtom } from "jotai";
import { atomList } from "../_utils/atom";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import ViewMore from "./ViewMoreButton";

const Search = () => {
  const categoryList = useAtom(atomList);
  // console.log("categoryList", categoryList[0]);

  const skeletonArray = Array.from({ length: categoryList[0]?.length });
  // console.log(skeletonArray);

  return (
    <>
      <section className=" mb-16 bg-gradient-to-tr from-[#E7F0FF] to-[#e8f1ff37]">
        <div className="flex flex-col mx-auto mb-10 max-w-screen-xl px-4 sm:px-6 lg:px-8 gap-12">
          <div className=" px-10 py-9 rounded-2xl">
            <h1 className=" font-bold text-4xl flex justify-center items-center mx-auto text-[#1B3C74]">
              Find by
              <span className="text-primary">&nbsp;Specialisation</span>
            </h1>
            <h4 className="flex justify-center items-center mx-auto mt-2 text-lg text-slate-500">
              Search your doctor and book appointment in one click
            </h4>

            {/* Displaying List of Category */}
            <div className=" grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7">
              {categoryList[0]?.length > 0 ? (
                categoryList[0]?.map(
                  (item, key) =>
                    key < 8 && (
                      <Link
                        href={"/search/" + item?.attributes?.Name}
                        key={key}
                        className="w-full flex flex-col items-center justify-center gap-5 px-10 py-5 rounded-lg bg-[#ffff] drop-shadow-[0px_5px_10px_rgba(0,0,0,0.044)] text-center hover:scale-105 cursor-pointer transition-all ease-in"
                      >
                        <Image
                          src={item?.attributes?.Icon?.data[0].attributes?.url}
                          alt="icon"
                          width={100}
                          height={100}
                          className="w-16 h-16"
                        />
                        <label className=" text-[#ABB6C7] text-lg font-medium">
                          <h4>{item?.attributes?.Name}</h4>
                        </label>
                      </Link>
                    )
                )
              ) : (
                //Skeleton Loading
                <>
                  {skeletonArray.map((item, index) => (
                    <div className="flex" key={index}>
                      <Skeleton className="h-32 w-36 rounded-xl" />
                    </div>
                  ))}
                </>
              )}
            </div>

            {categoryList[0]?.length > 6 && (
              <div className="mt-5">
                <ViewMore destination="/allCategories" />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
