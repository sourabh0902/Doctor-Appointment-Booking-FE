"use client";
import React, { useEffect, useState } from "react";
import Hero from "./_components/Hero";
import Search from "./_components/Search";
import DoctorList from "./_components/DoctorList";
import BlogList from "./_components/BlogList";
import { useRouter } from "next/navigation";
import PreLoader from "./_components/PreLoader";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router?.events?.on("routeChangeStart", handleStart);
    router?.events?.on("routeChangeComplete", handleComplete);
    router?.events?.on("routeChangeError", handleComplete);

    return () => {
      router?.events?.off("routeChangeStart", handleStart);
      router?.events?.off("routeChangeComplete", handleComplete);
      router?.events?.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className=" md:px-20 h-full">
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          {/* Hero Section */}
          <Hero />
          {/* Search Functionality */}
          <Search />

          {/* Doctor List  */}
          <DoctorList />

          {/* Blog Cards  */}
          <BlogList />
        </>
      )}
    </div>
  );
};

export default page;
