export const revalidate = 1200;

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: {slug: string}
}

export async function generateStaticParams(){
  const posts: Post[] = await fetch('http://localhost:3000/api/content')
  .then((res) => res.json());

  return posts.map((post) => {
    slug: post.slug;
  })
}

export default async function BlogPostPage({params} : Props) {

  const posts: Post[] = await fetch('http://localhost:3000/api/content', {
    cache: "no-cache"
  })
  .then(
    (res) => res.json()
  );

  const post = posts.find(( post ) => post.slug === params.slug)!;

  return (
    <div className="md:m-6 md:p-6 m-4 p-4 min-h-full">
      <h1 className="text-2xl md:text-4xl font-bold border-b w-3/4 tracking-wide md:w-2/4">{post.title}</h1>
      <p className="mt-4 md:w-2/4">{post.content}</p>
    </div>
  )
}
