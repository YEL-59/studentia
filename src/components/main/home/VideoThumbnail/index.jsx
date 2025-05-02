import { useEffect, useRef, useState } from "react";

export function VideoThumbnail({ videoUrl }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
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
  }, [videoUrl]);

  return (
    <div className="relative flex items-center justify-center p-4">
      {/* Glowing Gradient Effect Behind Video */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(59.43% 50% at 50% 50%, #C7EDFD 0%, #82C8E5 49.48%)",
            filter: "blur(160px)",
            opacity: 0.7,
          }}
        />
      </div>

      {/* Hidden video and canvas */}
      <video
        ref={videoRef}
        src={videoUrl}
        className="hidden"
        preload="metadata"
      />
      <canvas ref={canvasRef} className="hidden" />

      {/* Thumbnail Display */}
      <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt="Video Thumbnail"
            className="rounded-3xl w-[1047px] h-[550px] object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-[1047px] h-[550px] bg-gray-200 rounded-3xl">
            <p className="text-gray-600">Loading thumbnail...</p>
          </div>
        )}

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <div className="w-10 h-10 border-l-8 border-white border-y-transparent border-r-0 transform rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}
