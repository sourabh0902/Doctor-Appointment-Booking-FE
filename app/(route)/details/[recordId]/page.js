"use client";
import DoctorDetail from "@/app/_components/(doctorDetails)/DoctorDetail";
import GlobalApis from "@/app/_utils/GlobalApis";
import React, { useEffect, useState } from "react";
import DoctorSuggestionList from "@/app/_components/(doctorDetails)/DoctorSuggestionList";
import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import PreLoader from "@/app/_components/PreLoader";

const Details = ({ params }) => {
  const [doctor, setdoctor] = useState(null);
  // const { isAuthenticated, isLoading } = useKindeBrowserClient();

  useEffect(() => {
    getDoctorsById();
  }, [params.recordId]);

  const getDoctorsById = () => {
    GlobalApis.getDoctorsById(params.recordId).then((resp) => {
      // console.log(resp.data);
      setdoctor(resp?.data);
    });
  };

  // if (isLoading)
  //   return (
  //     <>
  //       <PreLoader />
  //     </>
  //   );

  // if (!isAuthenticated)
  //   return (
  //     <div>
  //       You have to <LoginLink>Login</LoginLink> to see this page
  //     </div>
  //   );

  return (
    <div className="pt-16 md:px-20">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
        {/* Doctor Details */}
        <div className="flex flex-col gap-5 justify-center items-start col-span-3 h-fit top-24 sticky">
          <h1 className="flex justify-center items-center font-bold text-3xl">
            About our <span className="text-primary">&nbsp;Specialist</span>
          </h1>
          <DoctorDetail doctor={doctor} />
        </div>

        {/* Suggestion */}
        <div className="col-span-1">
          <DoctorSuggestionList />
        </div>
      </div>
    </div>
  );
};

export default Details;
