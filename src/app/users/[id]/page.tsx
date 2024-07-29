import Image from "next/image";
import { prisma } from "../../../../lib/prisma"
import FollowButton from "@/app/Component/ui/FollowButton";
import { Metadata } from "next"

interface Props {
  params: {
    id: string;
  }
}

export async function generateMetadata({ params } : Props) {
  const user = await prisma.user.findUnique({where: {id: params.id}});

  return {
    title: `User profile of ${user?.name}`
  };
}

export default async function UserProfile({params} : Props) {

  const user = await prisma.user.findUnique({where: { id: params.id}})
  const {name, bio, image} = user;

  return (
    <div className="relative">
      <div className="bg-zinc-900 min-w-full min-h-60"></div>
      <Image className="m-auto absolute -translate-x-2/4 -translate-y-2/4 left-[50%] md:left-[15%] top-[100% rounded-full" src={image ?? '/vercel.svg'} width={200} height={200} alt={`${name}'s profile picture`}/>
      <div className="flex flex-col md:absolute md:left-[25%] md:mt-10 md:my-0 md:mb-0 md:p-0 my-24 p-4 text-center md:text-start">
        <h1 className="text-2xl md:text-4xl font-bold tracking-wide">{name}</h1>
        <p className="text-md mt-4 md:px-1 sm:px-4">{bio}</p>
        <FollowButton targetUserId={params.id}/>
      </div>
    </div>
  )
}
