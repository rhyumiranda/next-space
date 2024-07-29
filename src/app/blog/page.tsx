import React from 'react'
import BlogCard from '../Component/BlogCard';

export default async function BlogPage() {

  const posts = await fetch('http://localhost:3000/api/content', {
    method: 'GET'
  }).then((res) => res.json())

  return (
    <section className='m-6 p-6 min-w-screen grid gap-4 grid-cols md:grid-cols-2 lg:grid-cols-4'>
      {posts.map((post) => {
        const { title, slug, content } = post;

        return <BlogCard key={slug} id={slug} title={title} content={content}/>
      })}
    </section>
  )
}
