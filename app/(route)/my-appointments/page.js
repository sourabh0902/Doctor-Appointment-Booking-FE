"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppointmentList from "@/app/_components/(myAppointments)/AppointmentList";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import GlobalApis from "@/app/_utils/GlobalApis";

const MyBooking = () => {
  const { user } = useKindeBrowserClient();
  const [bookingList, setbookingList] = useState([]);
  const [upcomingCount, setupcomingCount] = useState(0);
  const [expiredCount, setexpiredCount] = useState(0);
  console.log(expiredCount, upcomingCount);

  const getUserAppointList = () => {
    GlobalApis.getUserAppointList(user?.email).then((resp) => {
      console.log(resp.data);
      setbookingList(resp?.data);
    });
  };

  useEffect(() => {
    user && getUserAppointList();
  }, [user]);

  // Update the counts whenever bookingList changes
  useEffect(() => {
    setupcomingCount(filterBookingList("upcoming").length);
    setexpiredCount(filterBookingList("expired").length);
  }, [bookingList]);

  /**
   * Filters the bookingList array based on the type parameter.
   *
   * @param {string} type - The type of bookings to filter ("upcoming" or "expired").
   * @returns {Array} - The filtered list of bookings.
   *
   * If type is "upcoming", the function includes items where the Date attribute
   * is greater than or equal to the current date.
   * If type is "expired", the function includes items where the Date attribute
   * is less than or equal to the current date.
   */

  const filterBookingList = (type) => {
    const result = bookingList.filter((item) =>
      type == "upcoming"
        ? new Date(item?.attributes?.Date) >= new Date()
        : new Date(item?.attributes?.Date) <= new Date()
    );
    console.log(result, type);
    return result;
  };

  return (
    <>
      <div className="px-4 sm:px-10 mt-10">
        <h2 className="font-bold text-2xl">My Appointments</h2>
        {/* Tabs to switch  */}
        <Tabs defaultValue="upcoming" className="w-full mt-5">
          <TabsList className="w-full justify-start bg-transparent">
            <TabsTrigger
              value="upcoming"
              className="font-medium text-base flex bg-[#F1F5F9]"
            >
              Upcoming
              <span className="px-[11px] py-[1px] ml-[10px] inline-flex rounded-3xl bg-white text-black text-base">
                {upcomingCount}
              </span>
            </TabsTrigger>
            <TabsTrigger value="expired" className="font-medium text-base flex">
              Expired
              <span className="px-[11px] py-[1px] ml-[10px] inline-flex rounded-3xl bg-white text-black text-base">
                {expiredCount}
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="flex">
            {/* Upcoming appoint tab  */}
            <AppointmentList
              bookingList={filterBookingList("upcoming")}
              expired={false}
              updateRecord={() => getUserAppointList()}
            />
          </TabsContent>
          <TabsContent value="expired" className="flex flex-col gap-5">
            {/* Expired appoint tab  */}
            <AppointmentList
              bookingList={filterBookingList("expired")}
              expired={true}
              updateRecord={() => getUserAppointList()}
            />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default MyBooking;
