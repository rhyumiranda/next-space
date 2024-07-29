import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className="border-[0.1px] border-gray-800 p-6 flex items-center gap-2 rounded-md">
      <Image className="border-gray-800 border-2 rounded-full" src={image ?? "/vercel.svg"} width={100} height={100} alt={`${name} Profile`} />
      <div className="w-full h-full flex items-center justify-center flex-col ml-4">
        <h3 className="text-2xl  w-full">
          <Link href={`/users/${id}`} >{name}</Link>
        </h3>
        <p className=" w-full text-md text-gray-400">{age}</p>
      </div>
    </div>
  );
}
