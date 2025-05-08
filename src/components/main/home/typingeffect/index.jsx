import { useEffect, useState } from "react";

const sentences = [
  "Article Generator",
  "Content Improver",
  "Image Analyzer",
  "AI Chat with PDF",
  "AI Web Analyzer",
  "And Many More!",
];

export const TypingEffect = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const currentSentence = sentences[index];

    const timeout = setTimeout(
      () => {
        if (!reverse) {
          setDisplayText(currentSentence.substring(0, subIndex + 1));
          setSubIndex(subIndex + 1);

          // Pause at full text
          if (subIndex + 1 === currentSentence.length) {
            setPause(true);
            setTimeout(() => setPause(false), 1000);
            setReverse(true);
          }
        } else {
          setDisplayText(currentSentence.substring(0, subIndex - 1));
          setSubIndex(subIndex - 1);

          // Move to next word after deleting
          if (subIndex === 0) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % sentences.length);
          }
        }
      },
      reverse ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, pause]);

  return (
    <span
      className="block"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #1C6CFF 32.51%, #9345B7 60.01%, #3E0059 82.73%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontFamily: "inherit",
      }}
    >
      {displayText}
      <span className="inline-block animate-pulse text-white">|</span>
    </span>
  );
};
