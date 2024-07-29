"use client";

export default function ProfileForm({ user }: any) {
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await res.json();
  };

  return (
    <section className="m-6 p-6 min-w-screen min-h-screen">
      <h1 className="text-2xl font-bold border-b border-gray-500">
        Update Profile
      </h1>
      <article className="min-w-full min-h-screen">
        <form
          className="min-full min-h-screen flex flex-col gap-5 mt-8"
          onSubmit={handleUpdate}
        >
          <div className="w-full flex flex-col h-full gap-1">
            <label className="text-sm" htmlFor="name">
              Name
            </label>
            <input
              className=" p-2 tracking-wide rounded bg-black border-gray-500 border focus:border-white focus:border-2 focus:outline-zinc-700 focus:ring-0"
              type="text"
              name="name"
              placeholder="John Doe"
              defaultValue={user?.name ?? ""}
            />
          </div>
          <div className="w-full flex flex-col h-full gap-1">
            <label className="text-sm" htmlFor="bio">
              Bio
            </label>
            <textarea
              className="p-2 tracking-wide rounded bg-black border-gray-500 border focus:border-white focus:border-2 focus:outline-zinc-700 focus:ring-0"
              name="bio"
              defaultValue={user?.bio ?? ""}
            />
          </div>
          <div className="w-full flex flex-col h-full gap-1">
            <label className="text-sm" htmlFor="age">
              Age
            </label>
            <input
              className="p-2 tracking-wide rounded bg-black border-gray-500 border focus:border-white focus:border-2 focus:outline-zinc-700 focus:ring-0"
              type="number"
              name="age"
              defaultValue={user?.age ?? ""}
            />
          </div>
          <div className="w-full flex flex-col h-full gap-1">
            <label className="text-sm" htmlFor="image">
              Profile Image URL
            </label>
            <input
              className="p-2 tracking-wide rounded bg-black border-gray-500 border focus:border-white focus:border-2 focus:outline-zinc-700 focus:ring-0"
              type="text"
              name="image"
              defaultValue={user?.image ?? ""}
            />
          </div>
          <button
            className="w-full bg-white text-black font-semibold tracking-wider p-3 rounded uppercase"
            type="submit"
          >
            Update
          </button>
        </form>
      </article>
    </section>
  );
}
