import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { prisma } from "../../../../lib/prisma";

export async function PUT(req: Request){
  const session = await auth();
  const userEmail = session?.user?.email!;
  
  const data = await req.json();
  data.age = Number(data.age);
  
  const user = await prisma.user.update({
    where: {
      email: userEmail
    },
    data,
  });

  return NextResponse.json(user);
}




