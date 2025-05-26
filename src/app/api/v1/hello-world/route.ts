import { NextResponse, NextRequest } from "next/server";


export const GET = (request: NextRequest) => {
  return NextResponse.json(
    {
        messsage: "Hello world!"
    },
    {
        status: 200
    });
}