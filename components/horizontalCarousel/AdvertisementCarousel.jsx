"use client";

import React, { useState, useEffect } from "react";
import AdVideoModal from "./AdVideoModal";
import MarqueeRow from "./MarqueeRow";
import videoData from "../data/videos"; // assuming default export

function AdvertisementCarousel() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null); // Change to store the video object

  const { row1, row2, row3 } = videoData;

  // Preload all videos and posters
  useEffect(() => {
    const allVideos = [...row1, ...row2, ...row3];

    allVideos.forEach((video) => {
      const videoElement = document.createElement("video");
      videoElement.src = video.videoSrc;
      videoElement.load();

      const img = new Image();
      img.src = video.poster;
    });
  }, []);

  return (
    <section className="w-full overflow-hidden py-4 space-y-4">
      {selectedVideo && (
        <AdVideoModal
          videoSrc={selectedVideo.videoSrc}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      {/* Pass row1, row2, row3 to MarqueeRow */}
      {[row1, row2, row3].map((row, index) => (
        <MarqueeRow
          key={`row-${index}`}
          direction={index % 2 === 0 ? "left" : "right"}
          rows={row} // Pass the row as 'rows'
          onVideoClick={(video) => setSelectedVideo(video)}
          hoveredVideo={hoveredVideo} // Pass the hovered video
          setHoveredVideo={setHoveredVideo} // Pass the setHoveredVideo function
        />
      ))}
    </section>
  );
}

export default AdvertisementCarousel;

