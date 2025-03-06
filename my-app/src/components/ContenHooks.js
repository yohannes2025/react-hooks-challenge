// ContentHooks.js

import React, { useState, useEffect } from "react";

const ContentHooks = () => {
  // Replace the constructor and state with useState hooks
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState([]);

  // Replace the componentDidMount method with useEffect
  useEffect(() => {
    // Set the timer and update the state after 2 seconds
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setFetchedPosts(savedPosts);
    }, 2000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // Replace this.state.posts with fetchedPosts
  const handleChange = (event) => {
    const filteredPosts = savedPosts.filter((post) =>
      post.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFetchedPosts(filteredPosts);
  };

  const savedPosts = [
    { id: 1, title: "Post 1", content: "This is the content of Post 1." },
    { id: 2, title: "Post 2", content: "This is the content of Post 2." },
    { id: 3, title: "Post 3", content: "This is the content of Post 3." },
    { id: 4, title: "Post 4", content: "This is the content of Post 4." },
    { id: 5, title: "Post 5", content: "This is the content of Post 5." },
  ];

  return (
    <div>
      <h1>Content</h1>
      <input type="text" placeholder="Search posts" onChange={handleChange} />
      {isLoaded ? (
        <div>
          {fetchedPosts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContentHooks;
