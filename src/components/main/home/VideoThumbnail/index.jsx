import { useEffect, useRef, useState } from "react";

export function VideoThumbnail({ videoUrl, imageUrl }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div
      className="relative flex items-center justify-center w-full aspect-video overflow-hidden"
      style={{
        borderRadius: "16px",
        border: "0px solid rgba(255, 255, 255, 0.13)",
        background: imageUrl
          ? `url(${imageUrl}) lightgray 0px 0px / cover no-repeat`
          : "none",
        boxShadow: `
      0px 0px 62.395px 0px #82C8E5,
      0px 0px 35.654px 0px #82C8E5,
      0px 0px 20.798px 0px #C2FEFF,
      0px 0px 10.399px 0px #82C8E5,
      0px 0px 2.971px 0px #82C8E5,
      0px 0px 1.486px 0px #C2FEFF
    `,
      }}
    >
      <div className="relative z-10 w-full h-full">
        {isPlaying ? (
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-cover"
            controls
            autoPlay
          />
        ) : thumbnail ? (
          <img
            src={thumbnail}
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt="Fallback Image"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200">
            <p className="text-gray-600">Loading...</p>
          </div>
        )}

        {videoUrl && !isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={handlePlay}
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[20px] border-t-[12px] border-b-[12px] border-l-white border-t-transparent border-b-transparent ml-1" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
