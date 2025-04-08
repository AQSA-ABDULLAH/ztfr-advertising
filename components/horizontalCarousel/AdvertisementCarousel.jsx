"use client"; 
import React, { useState, useEffect } from "react";
import AdVideoModal from "./AdVideoModal";
import MarqueeRow from "./MarqueeRow";
import videos from "../data/videos"; // Assuming this is where your video data is stored

function AdvertisementCarousel() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredVideoIndex, setHoveredVideoIndex] = useState(null);

  // Preload all images and videos
  useEffect(() => {
    // Preloading video files
    videos.forEach((video) => {
      const videoElement = document.createElement("video");
      videoElement.src = video.videoSrc;
      videoElement.load();

      // Preload the poster images
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
      {[...Array(3)].map((_, index) => (
        <MarqueeRow
          key={index}
          direction={index % 2 === 0 ? "left" : "right"}
          onVideoClick={(video) => setSelectedVideo(video)}
          hoveredVideoIndex={hoveredVideoIndex}
          setHoveredVideoIndex={setHoveredVideoIndex}
        />
      ))}
    </section>
  );
}

export default AdvertisementCarousel;