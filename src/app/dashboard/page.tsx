import { auth } from "../../../auth"
import { prisma } from "../../../lib/prisma";
import ProfileForm from "./ProfileForm";

export default async function UserDashboard() {

  const session = await auth();
  const userEmail = session?.user?.email;

  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    }
  })

  console.log(user?.image);
  
  

  return (
    <div>
      <ProfileForm user={user}/>
    </div>
  )
}
