import Ticket from "../../(models)/Ticket";
import {NextResponse } from "next/server";


export async function POST(req) {
  
  const body = await req.json();
    if (!body) {
      console.error("Empty or invalid JSON NextResponse");
      return NextResponse.json({ message: "Error", error: "Invalid JSON" }, { status: 500 });
    }
    const ticketData = body.formData;
  try {
    await Ticket.create(ticketData);
    return  NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    console.error("Error in POST request:", error);

    return  NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  
  try {
    const tickets = await Ticket.find();
    console.log(tickets)
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    console.error("Error in GET request:", error);

    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
