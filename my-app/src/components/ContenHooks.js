import React, { useState, useEffect } from "react";
import "./Content.css"; // Assuming there's a CSS file for styling

const ContentHooks = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState([]);

  useEffect(() => {
    // Simulate a fetch operation and set state after 2 seconds
    const timer = setTimeout(() => {
      const savedPosts = [
        /* Your fetched posts go here */
      ];
      setFetchedPosts(savedPosts);
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleChange = (event) => {
    const searchQuery = event.target.value;
    // Assuming you have a function to filter fetchedPosts based on searchQuery
    const filteredPosts = fetchedPosts.filter(
      (post) => post.title.includes(searchQuery) // Adjust according to your filtering logic
    );
    setFetchedPosts(filteredPosts);
  };

  if (!isLoaded) {
    return <div>Loading...</div>; // Loading state indicator
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search posts..."
      />
      <ul>
        {fetchedPosts.map(
          (post) => (
            <li key={post.id}>{post.title}</li>
          ) // Render your posts here
        )}
      </ul>
    </div>
  );
};

export default ContentHooks;
