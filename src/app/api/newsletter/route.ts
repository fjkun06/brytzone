// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { NextRequest, NextResponse } from "next/server";

// type Data = {
//   name: string;
// };

// export default function handler(req: NextRequest, res: NextResponse<Data>) {
//   // const res = await fetch('https://data.mongodb-api.com/...', {
//   //   next: { revalidate: 60 }, // Revalidate every 60 seconds
//   // })
//   // const data = await res.json()

//   return NextResponse.json({ name: "John Doe" });
//   // res.status(200).json({ name: 'John Doe' })
// }

import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const headersList = headers();
  const referer = headersList.get("referer");

  return new Response("Hello, Wltfgsg", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
  // return NextResponse.json({ name: "newsLetter" })
}
