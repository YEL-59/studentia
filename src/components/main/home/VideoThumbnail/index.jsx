import { useEffect, useRef, useState } from "react";

export function VideoThumbnail({ videoUrl, imageUrl }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    if (videoUrl) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (!video || !canvas) return;

      const ctx = canvas.getContext("2d");

      video.onloadeddata = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        video.currentTime = 1;
      };

      video.onseeked = () => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setThumbnail(canvas.toDataURL("image/png"));
      };
    }
  }, [videoUrl]);

  return (
    <div
      className="relative flex items-center justify-center p-4"
      style={{
        borderRadius: "16px",
        border: "0px solid rgba(255, 255, 255, 0.13)",
        background: imageUrl
          ? `url(${imageUrl}) lightgray 0px 0px / 100% 138.367% no-repeat`
          : "none",
        boxShadow: `
          0px 0px 62.395px 0px #82C8E5,
          0px 0px 35.654px 0px #82C8E5,
          0px 0px 20.798px 0px #C2FEFF,
          0px 0px 10.399px 0px #82C8E5,
          0px 0px 2.971px 0px #82C8E5,
          0px 0px 1.486px 0px #C2FEFF
        `,
        overflow: "hidden",
      }}
    >
      {/* Hidden video and canvas (only if videoUrl is provided) */}
      {videoUrl && (
        <>
          <video
            ref={videoRef}
            src={videoUrl}
            className="hidden"
            preload="metadata"
          />
          <canvas ref={canvasRef} className="hidden" />
        </>
      )}

      {/* Content Display */}
      <div className="relative z-10 w-full h-full">
        {videoUrl ? (
          thumbnail ? (
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-200">
              <p className="text-gray-600">Loading thumbnail...</p>
            </div>
          )
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200">
            <p className="text-gray-600">No media provided</p>
          </div>
        )}

        {/* Play button overlay (only shown if it's a video) */}
        {videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-10 h-10 border-l-8 border-white border-y-transparent border-r-0 transform rotate-45" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
