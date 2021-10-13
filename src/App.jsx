import React, { useState, useEffect } from "react";
import ChirpContainer from "./components/ChirpContainer";
import ChirpWriter from "./components/ChirpWriter";

const App = () => {
  // Setting up state variables for Chirps
  const [username, setUsername] = useState("");
  const [newChirp, setNewChirp] = useState("");


// Adding pre-written Chirps
  const [posts, setPosts] = useState([
    {
      name: "Dellarunner",
      text: "Another great morning to exercise!",
      time: "Today at 5:00 AM",
    },
    {
      name: "CoolFan07",
      text: "I think that birds are so interesting...",
      time: "Yesterday at 10:24 AM",
    },
    {
      name: "StonkInfluencer",
      text: "If you're looking at birds instead of the stock ticker you need to find a new circle...",
      time: "Yesterday at 10:23 AM",
    },
  ]);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleChirpChange = (e) => setNewChirp(e.target.value);

  // When the button is clicked, it adds the new post to the array of posts
  // along with a timestamp.

  const handleClick = (e) => {
    e.preventDefault();
    // Grabbing the current moment and formatting it like
    // the rest of the timestamps
    const timestamp = Date.now(); 
    let newStamp = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(timestamp);

    // Adding the new Chirp to the array
    // at the moment, the date is always set to "today",
    // but with some libraries you can make this more dynamic.
    return setPosts([
      {
        name: username,
        text: newChirp,
        time: `Today at ${newStamp}`,
      },
      ...posts,
    ]);
  };

//   Creating an effect to clear the chirp sender when 
//   the posts array is updated.
  useEffect(() => {
    setUsername('');
    setNewChirp('')
  }, [posts]);

// Putting the ChirpWriter and ChirpContainer
// components on the page.
  return (
    <div className="container-sm">
      <div className="row justify-content-between">
        <ChirpWriter
          username={username}
          newChirp={newChirp}
          handleUsernameChange={handleUsernameChange}
          handleChirpChange={handleChirpChange}
          handleClick={handleClick}
        />
        <ChirpContainer posts={posts} />
      </div>
    </div>
  );
};

export default App;
