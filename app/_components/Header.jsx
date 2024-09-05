"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Atom from "../_utils/atom";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Lock } from "lucide-react";

const Header = () => {
  const { user } = useKindeBrowserClient();
  // console.log(user, "user info");

  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);

  const [bgColor, setbgColor] = useState(null);

  useEffect(() => {
    () => {};
  }, [user]);

  //Random Background function
  useEffect(() => {
    const randomColors = [
      "#87CEEB",
      "#00FFFF",
      "#89CFF0",
      "#7393B3",
      "#A7C7E7",
      "#CCCCFF",
      "#96DED1",
      "#F0FFFF",
    ];

    function getRandomColor(colors) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }

    const color = getRandomColor(randomColors);
    // console.log(color);
    setbgColor(color);
  }, [user?.given_name]);

  // const handleScroll = () => {
  //   const currentScrollPos = window.scrollY;

  //   if (currentScrollPos > prevScrollPos) {
  //     setVisible(false);
  //   } else {
  //     setVisible(true);
  //   }

  //   setPrevScrollPos(currentScrollPos);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  const navMenus = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Explore",
      link: "/",
    },
    {
      id: 3,
      title: "Contact",
      link: "/",
    },
  ];

  return (
    <>
      <nav
        // className={`w-[-webkit-fill-available] flex justify-between py-4 px-8 shadow-sm sticky z-50  ${
        //   visible
        //     ? "top-0 transition ease-in-out delay-150"
        //     : "transform -translate-y-full transition ease-in-out delay-150"
        // } transition ease-in-out delay-150`}
        className="w-[-webkit-fill-available] flex justify-between items-center py-4 px-8 shadow-sm sticky top-0 z-50 border-gray-500/5 bg-gradient-to-r from-[#2AA7FF]/10 to-[#5c9df1]/0 backdrop-blur md:left-6 md:right-6 md:rounded-2xl md:rounded-t-none"
      >
        <Link href="/">
          <Image
            src="/assets/images/Logo.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer w-11 h-11"
          />
        </Link>
        <ul className="md:flex gap-8 hidden">
          {navMenus?.map((menu) => (
            <Link href={menu?.link} key={menu.id}>
              <li className="text-[#011632] hover:text-primary hover:font-bold text-base font-semibold cursor-pointer">
                {menu?.title}
              </li>
            </Link>
          ))}
        </ul>
        {user ? (
          <div>
            <Popover>
              <PopoverTrigger className="hover:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.45)] rounded-full transition-all border-2 border-white">
                <Image
                  src={
                    user?.picture
                      ? user?.picture
                      : "/assets/images/anonymous-user.png"
                  }
                  alt={user?.family_name}
                  width={55}
                  height={55}
                  className="rounded-full w-11 h-11"
                  style={{ backgroundColor: bgColor }}
                />
              </PopoverTrigger>
              <PopoverContent>
                <ul className="flex flex-col text-[15px] gap-1">
                  <li className="p-2">
                    <h1 className=" font-semibold text-lg">
                      Welcome, {user?.given_name}
                    </h1>
                  </li>
                  <Link
                    href={"/my-appointments"}
                    className="cursor-pointer hover:bg-slate-100 p-2 rounded-md max-w-40"
                  >
                    My Appointments
                  </Link>
                  <li className="cursor-pointer hover:bg-[#ef4444] hover:text-white p-2 rounded-md">
                    <LogoutLink>Log out</LogoutLink>
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <LoginLink>
            <Button className=" font-medium text-base gap-2">
              <Lock className="w-4 h-4" />
              Log In
            </Button>
          </LoginLink>
        )}
      </nav>

      {/* Just Import Atom for rendering */}
      <Atom />
    </>
  );
};

export default Header;
