import { mailOptions, transporter } from "@/lib/nodemailer";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  console.log(req.body);

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

export async function POST(req: Request) {
  const data = await req.json();
  console.dir(data);
  const { name, email, message, subject } = data;
  console.log(name, email, subject, message);
  const res = { message: "Bad Request" };

  //handling data inter=grity
  if (!name || !email || !subject || !message) {
    // return new Response(JSON.stringify(res), {
    //   status: 400,
    // });
    return new Response("Bad Request", {
      status: 400,
    });
  }

  //sending mail
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: subject,
      text: "This is a test string",
      html: "<h1>Test Title</h1><p>Some body Text</p>",
    });
    return new Response('', {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return new Response(error.message, {
      status: 400,
    });
  }

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
}
