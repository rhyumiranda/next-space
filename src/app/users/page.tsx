import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";
import UserCard from "@/app/Component/UserCard";

interface User {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default async function Users(){
  const users = await prisma.user.findMany();

  return(
    <div className="m-4 p-4 grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map(( user : User ) => {
        return <UserCard key={user.id} {...user}/>;
      })}
    </div>
  );
}