import React from "react";
import AnimatedPostCard from "./components/productcard";

const App = () => {
  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="container">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="post-container">
          {posts.map((post) => (
            //simple code to render the post card
            // <div key={post.id} className="post-card">
            //   <h2>{post.title}</h2>
            //   <img src={post.photo} alt="Post image" />
            //   <p>{post.content}</p>
            //   <div className="tags">
            //     {post.tags.map((tag) => (
            //       <span key={tag}>{tag}</span>
            //     ))}
            //   </div>
            // </div>
            
            //using the AnimatedPostCard component
            <AnimatedPostCard
              key={post.key}
              title={post.title}
              content={post.content}
              photoLink={post.photoLink}
              tags={post.tags}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
