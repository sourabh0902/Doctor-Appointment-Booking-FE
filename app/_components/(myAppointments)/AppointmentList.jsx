import { Calendar, Clock, MapPin } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React from "react";
import CancelAppointment from "./CancelAppointment";
import GlobalApis from "@/app/_utils/GlobalApis";
import { toast } from "sonner";

const AppointmentList = ({ bookingList, expired, updateRecord }) => {
  const onDeleteBooking = (item) => {
    GlobalApis.deleteAppointments(item?.id).then((resp) => {
      console.log(resp);
      if (resp) {
        toast("Appointment Cancelled Successfully");
        updateRecord();
      }
    });
  };

  return (
    bookingList &&
    bookingList.map((item, index) => (
      <div className="w-full h-auto flex justify-between items-center gap-5 border p-3 rounded-lg border-slate-300 ">
        <div className="flex gap-5">
          <Image
            width={100}
            height={100}
            src={
              item?.attributes?.doctor?.data?.attributes?.Image?.data[0]
                ?.attributes?.url
            }
            className="w-[100px] h-[100px] rounded-full object-cover object-top"
          />
          <div className="flex flex-col gap-1">
            <h2 className="font-bold">
              {item?.attributes?.doctor?.data?.attributes?.Name}
            </h2>
            <h2 className="flex gap-1">
              <MapPin className="w-5" />
              {item?.attributes?.doctor?.data?.attributes?.Address}
            </h2>
            <h2 className="flex gap-1">
              <Calendar className="w-5" />
              Appointment on:
              {moment(item?.attributes?.Date).format("DD-MM-YYYY")}
            </h2>
            <h2 className="flex gap-1">
              <Clock className="w-5" />
              At Time: {item?.attributes?.Time}
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-start h-full">
          {!expired && (
            <CancelAppointment onContinueClick={() => onDeleteBooking(item)} />
          )}
        </div>
      </div>
    ))
  );
};

export default AppointmentList;
