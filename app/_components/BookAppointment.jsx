import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import GlobalApis from "../_utils/GlobalApis";
import { toast } from "sonner";

const BookAppointment = ({ doctor }) => {
  const [date, setDate] = useState(new Date());
  const [timeSlot, settimeSlot] = useState();
  const [selectedTIme, setselectedTIme] = useState();
  // console.log(selectedTIme);
  // console.log(date, "selectedDate");

  // Getting the user details so that we can send it in the POST request to save the details
  const { user } = useKindeBrowserClient();
  // console.log(user, "user");

  // console.log(timeSlot, "time slot");

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];

    for (let i = 10; i <= 11; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }

    timeList.push({
      time: "12:00 PM",
    });

    timeList.push({
      time: "12:30 PM",
    });

    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    settimeSlot(timeList);
  };

  /* Explanation:
  - The above function, the 1st for loop genrates the timings between 10 AM to 11.30 AM. The second for loop will generate he timings between 12 PM to 6.30 PM
  - All the timings are pushed into the empty array called timeList, which is then set to the timSlot usestate. 
  */

  // To hide the past dates in the calendar
  const isPastDate = (date) => {
    return date < new Date();
  };

  // Function to reset the selected date and time when the user clicks on the "close" button
  const resetSelect = () => {
    setselectedTIme(null);
    setDate(new Date());
  };

  // Function to save in the data in the object form to send itin the "POST" request
  const saveBooking = () => {
    const data = {
      data: {
        UserName: user?.given_name + " " + user?.family_name,
        Email: user?.email,
        Date: date,
        Time: selectedTIme,
        Note: "",
        doctor: doctor?.id,
      },
    };

    GlobalApis.bookAppointment(data).then((resp) => {
      // console.log(resp, "response of Booking");

      if (resp) {
        GlobalApis.sendEmail(data).then((resp) => {
          // console.log(resp, "response of sending email");
        });
        toast("Booking Confirmation will be sent on E-Mail");
      }
    });
  };

  return (
    <Dialog>
      <DialogTrigger className="rounded-3xl w-fit font-medium text-sm py-2 px-4 bg-primary text-white">
        Book Appointment
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Your Appointment</DialogTitle>
          <DialogDescription>
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Calendar */}
                <div className="flex flex-col gap-3 items-baseline flex-1">
                  <h2 className="flex items-center gap-2">
                    <CalendarDays className="text-primary h-5 w-5" />
                    Select Date
                  </h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDate}
                    className="rounded-md border"
                  />
                </div>
                {/* Time Slot  */}
                <div className="flex flex-col gap-3 items-baseline flex-1">
                  <h2 className="flex items-center gap-2">
                    <Clock className="text-primary h-5 w-5" />
                    Select Time Slot
                  </h2>
                  <div className="grid grid-cols-3 gap-2 border rounded-lg p-5">
                    {timeSlot?.map((clock, index) => (
                      <h2
                        onClick={() => setselectedTIme(clock?.time)}
                        className={`p-2 border rounded-full text-center items-center justify-center cursor-pointer hover:bg-[#F1F5F9] hover:text-black transition-all 
                      ${
                        clock?.time == selectedTIme && "bg-primary text-white"
                      }`}
                      >
                        {clock?.time}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            </>
          </DialogDescription>
        </DialogHeader>
        <Textarea placeholder="Note..." />
        <DialogFooter className="sm:justify-end">
          <Button
            type="button"
            variant="primary"
            className="bg-primary text-white hover:bg-[#0067DE]"
            disabled={!(date && selectedTIme)}
            onClick={() => saveBooking()}
          >
            Book
          </Button>
          <DialogClose asChild>
            <Button
              type="button"
              variant="destructive"
              onClick={() => resetSelect()}
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookAppointment;
