"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const AdVideoModal = ({ videoSrc, onClose }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => setIsMuted((prev) => !prev);

  return (
    <div className="fixed bottom-24 lg:bottom-[unset] top-[unset] lg:top-1/2 lg:-translate-y-1/2 left-1/2 -translate-x-1/2 z-40 w-full lg:w-[800px] 3xl:w-[1196px] h-auto rounded-2xl overflow-hidden opacity-100">
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full rounded-2xl"
      />

      <Image
        src="/assets/advertising/ZTFR PARTNER.svg"
        width={100}
        height={100}
        alt="ZTFR Partner"
        className="w-[80px] 3xl:w-[100px] absolute top-4 left-4 invert"
      />

      {/* Close Button */}
      <button
        className="absolute top-5 lg:top-6 right-8"
        onClick={onClose}
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
          fill="#fff"
          className="w-[20px]"
        >
          <g transform="translate(-1849 -54)">
            <path
              d="M164.577,282.157l-1.178-1.178-6.322,6.322-6.322-6.322-1.178,1.178,6.322,6.322-6.322,6.322,1.178,1.178,6.322-6.322,6.322,6.322,1.178-1.178-6.322-6.322Z"
              transform="translate(1699.423 -226.978)"
            />
          </g>
        </svg>
      </button>

      {/* Mute Button */}
      <button
        className="absolute top-16 right-7"
        onClick={toggleMute}
        aria-label="Toggle Mute"
      >
        <Image
          src={isMuted ? "/assets/MuteVolume.svg" : "/assets/UnmuteVolume.svg"}
          width={25}
          height={25}
          alt={isMuted ? "Unmute" : "Mute"}
          className="w-[25px] h-[25px] cursor-pointer"
        />
      </button>
    </div>
  );
};

export default AdVideoModal;


