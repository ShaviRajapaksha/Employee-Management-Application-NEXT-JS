async function getPosts() {
  const res = await fetch("http://localhost:3001/posts");
  return res.json();
}

export default async function Posts() {
    const posts = await getPosts();
  return (
    <div>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            {post.title} - {post.views} views
          </li>
        ))}
      </ul> 
    </div>
  );
}
