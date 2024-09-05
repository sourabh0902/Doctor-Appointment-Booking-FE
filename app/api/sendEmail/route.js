import { Resend } from "resend";
import { NextResponse } from "next/server";
import EmailTemplate from "@/emails";

const resend = new Resend(process.env.RESEND_API_KEY);

// The 'POST' function handles the POST request to this endpoint and return a sinple JSON reponse with a message
export async function POST(req) {
  const response = await req.json();
  console.log(response, "response in route.js");
  try {
    const data = await resend.emails.send({
      from: "Doc-Appoint <onboarding@resend.dev>",
      //   to: [response.data.Email],
      to: "sg456190@gmail.com",
      subject: "Booking Appointment Confirmation",
      react: EmailTemplate({ response }),
    });
    console.log(data, "response");

    // `NextResponse.json` is a tool in Next.js that makes it easy to send JSON data from your server to the client. It formats the data correctly and is commonly used in REST APIs.
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(error);
  }
}
