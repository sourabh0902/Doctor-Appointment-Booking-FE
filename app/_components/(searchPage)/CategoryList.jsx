"use client";
import { atomList } from "@/app/_utils/atom";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CategoryList = () => {
  const categoryList = useAtom(atomList);
  // console.log(categoryList[0], "");

  //Getting the category name from the URL
  const params = usePathname();
  const category = params.split("/")[2];
  const catDecoded = decodeURIComponent(category);

  return (
    <div className="h-max flex flex-col !sticky top-14">
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="All Categories">
            {categoryList[0]?.map((item, key) => (
              <CommandItem
                key={key}
                className="!opacity-100 !hover:bg-transparent"
              >
                <Link
                  href={"/search/" + item?.attributes?.Name}
                  className={`p-2 flex justify-start items-center gap-2 font-semibold text-[#1B3C74] !cursor-pointer rounded-md w-full ${
                    catDecoded == item?.attributes?.Name && "bg-[#FAFBFE] border-[1px] text-[#2d62bf]"
                  } hover:bg-slate-100`}
                >
                  <Image
                    src={item?.attributes?.Icon?.data[0].attributes?.url}
                    width={30}
                    height={30}
                    alt="icon"
                  />
                  <h4>{item?.attributes?.Name}</h4>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default CategoryList;
