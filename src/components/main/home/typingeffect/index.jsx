import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Get the longest sentence length (used to reserve space)

export const TypingEffect = () => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [pause, setPause] = useState(false);
  const { t } = useTranslation('home');

  const sentences = t('banner.animatedTitles', { returnObjects: true });

  const longest = sentences?.reduce?.((a, b) => (a.length > b.length ? a : b));

  useEffect(() => {
    if (pause) return;

    const currentSentence = sentences[index];

    const timeout = setTimeout(
      () => {
        if (!reverse) {
          setDisplayText(currentSentence.substring(0, subIndex + 1));
          setSubIndex((prev) => prev + 1);

          if (subIndex + 1 === currentSentence.length) {
            setPause(true);
            setTimeout(() => setPause(false), 1000);
            setReverse(true);
          }
        } else {
          setDisplayText(currentSentence.substring(0, subIndex - 1));
          setSubIndex((prev) => prev - 1);

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
      className="block whitespace-nowrap"
      style={{
        minHeight: '1.5em', // Or use a fixed height like '24px' based on your font
        backgroundImage:
          'linear-gradient(90deg, #1C6CFF 32.51%, #9345B7 60.01%, #3E0059 82.73%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontFamily: 'inherit',
      }}
    >
      {/* Use invisible longest sentence to reserve space */}
      <span className="invisible absolute">{longest}</span>
      {displayText}
      <span className="inline-block animate-pulse text-white">|</span>
    </span>
  );
};
