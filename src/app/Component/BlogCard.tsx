import Link from "next/link";

interface Props{
  title: string;
  id: string;
  content: string;
}

export default function BlogCard({title, id, content}: Props) {

  return (
    <Link href={`/blog/${id}`}>
      <article className="p-8 w-full h-full border-gray-800 border shadow-md shadow-gray-900">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">{title}</h1>
        <p className="mt-6">{content}</p>
      </article>
    </Link>
    
  )
}
