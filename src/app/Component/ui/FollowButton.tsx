import { auth } from "../../../../auth"
import FollowClient from "../FollowClient"
import { prisma } from "../../../../lib/prisma"

interface Props {
  targetUserId: string;
}

export default async function FollowButton({ targetUserId }: Props) {

  const session = await auth();

  const currentUserId = await prisma.user?.findFirst({where: { email: session?.user?.email}})
  .then((user) => user?.id!);

  const isFollowing = await prisma.follows.findFirst({
    where: { followerId: currentUserId, followingId: targetUserId },
  });

  return (
    <div>
      <FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing}/>
    </div>
  )
}
