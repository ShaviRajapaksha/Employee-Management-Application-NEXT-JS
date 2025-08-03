"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PostDetail = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.views}</p>
    </div>
  );
};

export default PostDetail;
