"use client";

import React from "react";
import { useTransition, useState } from "react";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

export default function FollowClient({ targetUserId, isFollowing }: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const follow = async () => {
    setIsFetching(true);

    const res = await fetch("/api/follow", {
      method: "POST",
      body: JSON.stringify({ targetUserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsFetching(false);

    console.log(res);

    startTransition(() => {
      router.refresh();
    });
  };

  const unfollow = async () => {
    setIsFetching(true);

    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: "DELETE",
    });

    setIsFetching(false);

    console.log(res);

    startTransition(() => {
      router.refresh();
    });
  };

  if (isFollowing) {
    return <button className="mt-4 px-6 py-2 rounded bg-white text-black tracking-wide" onClick={unfollow}>{"Unfollow"}</button>;
  } else {
    return <button className="mt-4 px-6 py-2 rounded bg-white text-black tracking-wide" onClick={follow}>{"Follow"}</button>;
  }
}
