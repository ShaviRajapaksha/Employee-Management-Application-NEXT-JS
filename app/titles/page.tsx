"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Posts = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <ul className="space-y-2">
      {posts.map((post) => (
        <li key={post.id} className="text-blue-600 hover:underline">
          <Link href={`/titles/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;

