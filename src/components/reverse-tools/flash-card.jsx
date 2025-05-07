import { useState } from 'react';
import flashCardsIcon from '@/assets/icons/flashcards-icon.svg';
import refreshIcon from '@/assets/icons/refresh-icon.svg';

const FlashcardApp = () => {
  // State for the app flow
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState('');
  const [cardCount, setCardCount] = useState(10);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Mock flashcards data
  const [flashcards, setFlashcards] = useState([
    { question: 'What Is The Color Of Your Dashboard?', answer: 'Blue' },
    // Add more flashcards as needed
  ]);

  // Generate flashcards (mock implementation)
  const generateFlashcards = () => {
    // In a real app, you would generate cards based on the topic
    setStep(2);
  };

  // Navigate between cards
  const goToNextCard = () => {
    setIsFlipped(false);
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setStep(4); // Move to review step
    }
  };

  const goToPrevCard = () => {
    setIsFlipped(false);
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  // Flip the current card
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  // Start review
  const startReview = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setStep(2); // Go back to first card
  };

  // Add new flashcard
  const addNewFlashcard = () => {
    setStep(1);
    setTopic('');
    setIsFlipped(false);
  };

  // Render different steps
  return (
    <div className="h-full  w-full">
      {step === 1 && (
        <div className="w-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-[50px]">
            <div className="flex items-center gap-2">
              <img src={flashCardsIcon} alt="icon" />
              <p className="text-lg font-medium leading-[164%] capitalize">
                Flashcards
              </p>
            </div>
            <button>
              <img src={refreshIcon} alt="Refresh chat" />
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-base leading-[164%] text-[#FFF] mb-2">
              Generate Flashcard about...
            </label>
            <textarea
              type="text"
              value={topic}
              rows={5}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter topic"
            />
          </div>

          <div className="mb-6">
            <label className="block text-base leading-[164%] text-[#FFF] mb-2">
              Number of Cards
            </label>
            <input
              type="number"
              value={cardCount}
              onChange={(e) => setCardCount(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={generateFlashcards}
            className="w-full bg-gradient-to-b from-[#7A43A4] to-[#6049BC] hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 mt-6"
          >
            Generate Flash Cards
          </button>
        </div>
      )}

      {(step === 2 || step === 3 || step === 4) && (
        <div className="w-full ">
          <div
            onClick={flipCard}
            className={`relative w-full h-80 bg-[#1B2237] rounded-t-xl p-6 shadow-md cursor-pointer transition-all duration-500 ${
              isFlipped
                ? 'rounded-b-xl bg-gradient-to-b from-[rgba(122,67,164,0.35)] to-[rgba(96,73,188,0.35)]'
                : ''
            }`}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center p-6 backface-visibility-hidden transition-all duration-500 ${
                isFlipped ? 'opacity-0 rotate-y-180' : 'opacity-100'
              }`}
            >
              <p className="text-xl text-center">
                {flashcards[currentCardIndex]?.question}
              </p>
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center p-6 backface-visibility-hidden transition-all duration-500 ${
                isFlipped ? 'opacity-100' : 'opacity-0 rotate-y-180'
              }`}
            >
              <p className="text-xl text-center">
                {flashcards[currentCardIndex]?.answer}
              </p>
            </div>
          </div>

          <p className="rounded-b-[12px] bg-[rgba(210,74,201,0.40)] text-center mb-6 text-[#FFF] py-3">
            Click On The Card To Flip It
          </p>

          {step === 4 ? (
            <button
              onClick={startReview}
              className="w-full bg-gradient-to-b from-[#7A43A4] to-[#6049BC] hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Review Flashcards
            </button>
          ) : (
            <div className="flex justify-between">
              <button
                onClick={goToPrevCard}
                disabled={currentCardIndex === 0}
                className={`py-2 px-6 rounded-lg ${
                  currentCardIndex === 0
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'text-gradient-to-b from-[#7A43A4] to-[#6049BC] border border-[#7A43A4)]'
                }`}
              >
                Previous
              </button>
              <button
                onClick={goToNextCard}
                className="py-2 px-6 bg-gradient-to-b from-[#7A43A4] to-[#6049BC] text-white rounded-lg"
              >
                {currentCardIndex === flashcards.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          )}
        </div>
      )}

      {step === 5 && (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Flash Cards Topic Name
          </h2>

          <div className="text-4xl font-bold text-center my-8">FlashCards</div>

          <button
            onClick={addNewFlashcard}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Add New Flashcard
          </button>
        </div>
      )}
    </div>
  );
};

export default FlashcardApp;
