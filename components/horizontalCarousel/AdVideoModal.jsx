import React from "react";
import Image from "next/image";

const AdVideoModal = ({ onClose }) => {
  return (
    <div className="fixed bottom-24 lg:bottom-[unset] top-[unset] lg:top-1/2 lg:-translate-y-1/2 left-1/2 -translate-x-1/2 z-40 w-full lg:w-[800px] 3xl:w-[1196px] h-auto rounded-2xl overflow-hidden opacity-100">
      <video
        src="https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/advertVideos%2FHey%20Jude%20%20%20adidas.mp4?alt=media&token=831e2020-b7bd-49cd-b6fb-35bf91133bff"
        autoPlay
        loop
        className="w-full rounded-2xl"
      ></video>

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

      {/* Mute Button (no logic attached yet) */}
      <button className="absolute top-16 right-7">
        <Image
          src="/assets/UnmuteVolume.svg"
          width={25}
          height={25}
          alt="Unmute"
          className="w-[25px] h-[25px] cursor-pointer"
        />
      </button>
    </div>
  );
};

export default AdVideoModal;
