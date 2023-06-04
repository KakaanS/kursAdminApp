import React, { createContext, useState } from "react";

export const WatchedVideosContext = createContext();

const WatchedVideosProvider = ({ children }) => {
  const [watchedVideos, setWatchedVideos] = useState([]);

  const addWatchedVideo = (videoId) => {
    setWatchedVideos((prevWatchedVideos) => [...prevWatchedVideos, videoId]);
  };

  const removeWatchedVideo = (videoId) => {
    setWatchedVideos((prevWatchedVideos) =>
      prevWatchedVideos.filter((id) => id !== videoId)
    );
  };

  const clearWatchedVideos = () => {
    setWatchedVideos([]);
  };

  return (
    <WatchedVideosContext.Provider
      value={{
        watchedVideos,
        addWatchedVideo,
        removeWatchedVideo,
        clearWatchedVideos,
      }}
    >
      {children}
    </WatchedVideosContext.Provider>
  );
};

export default WatchedVideosProvider;
