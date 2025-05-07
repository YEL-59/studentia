import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Checkbox } from "@/components/ui/checkbox";
import Questionpdf from "@/assets/svg/questionpdf";

const Stepper = ({ totalSteps = 10, currentStep = 0 }) => {
  return (
    <div className="flex items-center gap-2 w-full px-6 py-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-2 flex-1 rounded-full transition-all duration-300
              ${index <= currentStep ? "bg-purple-600" : "bg-gray-700"}`}
        />
      ))}
    </div>
  );
};

export default function QuizPage() {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "London"],
      correctAnswer: "Paris",
      type: "multiple",
    },
    {
      id: 2,
      question: "React is a JavaScript library for building UI. True or False?",
      correctAnswer: "True",
      type: "boolean",
    },
    {
      id: 3,
      question: "Which language runs in a web browser?",
      options: ["Python", "Java", "C", "JavaScript"],
      correctAnswer: "JavaScript",
      type: "multiple",
    },
    {
      id: 4,
      question: "React is a JavaScript library for building UI. True or False?",
      correctAnswer: "True",
      type: "boolean",
    },
    {
      id: 5,
      question: "Which language runs in a web browser?",
      options: ["Python", "Java", "C", "JavaScript"],
      correctAnswer: "JavaScript",
      type: "multiple",
    },
  ];

  const [step, setStep] = useState(0); // 0 = form, 1 = quiz, 2 = result
  const [loading, setLoading] = useState(false);

  const [topic, setTopic] = useState("");
  const [cardCount, setCardCount] = useState("10");
  const [questionTypes, setQuestionTypes] = useState({
    mcq: false,
    tf: false,
    mixed: false,
  });
  const [difficulty, setDifficulty] = useState("easy");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState({});

  const handleFormSubmit = () => {
    setStep(0);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(1);
    }, 2000);
  };

  const handleSelect = (option) => {
    setSelectedAnswer(option);
    setAnswers((prev) => ({ ...prev, [questions[currentIndex].id]: option }));
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(answers[questions[currentIndex + 1]?.id] || null);
    } else {
      setStep(2);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSelectedAnswer(answers[questions[currentIndex - 1]?.id] || null);
    }
  };

  const calculateScore = () => {
    return questions.filter(
      (q) => answers[q.id]?.toLowerCase() === q.correctAnswer.toLowerCase()
    ).length;
  };

  // LOADING SCREEN
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-white bg-[#0D0D0D] px-6">
        {/* <Stepper totalSteps={questions.length} currentStep={currentIndex} /> */}

        <div className="flex items-center gap-3 mt-10">
          <div className="w-4 h-4 rounded-full bg-purple-400 animate-bounce [animation-delay:.1s]"></div>
          <div className="w-4 h-4 rounded-full bg-purple-500 animate-bounce [animation-delay:.2s]"></div>
          <div className="w-4 h-4 rounded-full bg-purple-600 animate-bounce [animation-delay:.3s]"></div>
        </div>
        <p className="mt-6 text-lg font-medium">Generating Your Quiz Now</p>
        <p className="text-sm text-[#aaa] mt-2 text-center max-w-xs">
          Quizzes let you whip up fun, interactive summaries of key concepts,
          making it way easier to review and remember stuff!
        </p>
      </div>
    );
  }

  // QUIZ SCREEN
  if (step === 1) {
    const q = questions[currentIndex];
    return (
      <div className="px-6 py-8 flex flex-col gap-6">
        <Stepper totalSteps={questions.length} currentStep={currentIndex} />

        <div className="text-xl font-semibold tracking-tight text-white">
          Question {currentIndex + 1} of {questions.length}
        </div>
        <div className="text-white text-lg font-medium leading-relaxed">
          {q.question}
        </div>
        <div className="flex flex-col gap-4">
          {q.type === "multiple" &&
            q.options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`px-4 py-3 rounded-xl text-left border text-white ${
                  selectedAnswer === option
                    ? "bg-gradient-to-r from-purple-500 to-indigo-600 border-transparent"
                    : "border-[#444] hover:bg-[#2c2c2c]"
                }`}
              >
                {option}
              </button>
            ))}
          {q.type === "boolean" &&
            ["True", "False"].map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`px-4 py-3 rounded-xl border text-white w-full ${
                  selectedAnswer === option
                    ? "bg-gradient-to-r from-purple-500 to-indigo-600 border-transparent"
                    : "border-[#444] hover:bg-[#2c2c2c]"
                }`}
              >
                {option}
              </button>
            ))}
        </div>
        <div className="flex justify-between gap-4 pt-6 max-w-2xl mx-auto">
          <Button
            variant="ghost"
            className="w-full py-6 rounded-xl text-white border border-[#7A43A4]"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
          >
            Previous
          </Button>
          <Button
            variant="ghost"
            className="w-full py-6 rounded-xl bg-gradient-to-b from-[#7A43A4] to-[#6049BC] text-white"
            onClick={goToNext}
          >
            {currentIndex === questions.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    );
  }

  // RESULT SCREEN
  if (step === 2) {
    const score = calculateScore();
    return (
      <div className="px-6 py-10 flex flex-col items-center gap-6 text-center text-white">
        {/* <Stepper totalSteps={questions.length} currentStep={currentIndex} /> */}

        <h2 className="text-3xl font-bold">Congratulations</h2>
        <p>Keep up the Great Work and aim even higher</p>

        <div className="flex justify-between items-center gap-3 mt-10 rounded-xl border border-[#7A43A4] p-6 text-white w-full max-w-full">
          <div className="text-start">
            <h1>Student IA</h1>
            <p>Question Feedback</p>
          </div>
          <div>
            <p className="w-14 h-14 rounded-full p-2 border-2 text-xs border-purple-400 flex items-center justify-center">
              {score} / {questions.length}
            </p>
          </div>
        </div>

        <div className="flex gap-5 items-center justify-center mt-10">
          <Button
            onClick={() => {
              setStep(0);
              setAnswers({});
              setCurrentIndex(0);
              setSelectedAnswer(null);
            }}
            className=" bg-gradient-to-b from-[#7A43A4] to-[#6049BC] text-white px-6 py-4 "
          >
            Restart Quiz
          </Button>
          <Button>Save Result</Button>
        </div>
      </div>
    );
  }

  // FORM SCREEN
  return (
    <Card className="w-full bg-transparent border-0 text-white p-4 rounded-2xl ">
      <CardContent className="space-y-6">
        <div className="text-xl font-semibold text-center flex justify-center items-center gap-2">
          <Questionpdf /> Quiz Yourself
        </div>
        <div className="space-y-2">
          <Label className="text-white">Generate Quiz about...</Label>
          <Textarea
            placeholder="Enter your topic..."
            className="bg-[#2c2c3e] border-none text-white"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-white">Number of Cards</Label>
          <Select value={cardCount} onValueChange={setCardCount}>
            <SelectTrigger className="bg-[#2c2c3e] text-white border-none">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent className="bg-[#2c2c3e] text-white">
              {[5, 10, 15, 20].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-white">Type of Question</Label>
          <div className="flex flex-col gap-2">
            {["mcq", "tf", "mixed"].map((key) => (
              <label
                key={key}
                className="flex items-center gap-3 bg-[#2c2c3e] p-3 rounded-lg cursor-pointer"
              >
                <Checkbox
                  checked={questionTypes[key]}
                  onCheckedChange={() =>
                    setQuestionTypes((prev) => ({
                      ...prev,
                      [key]: !prev[key],
                    }))
                  }
                />
                <span>
                  {key === "mcq"
                    ? "Multiple Choice"
                    : key === "tf"
                    ? "True/False"
                    : "Mixed"}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-white">Difficulty</Label>
          <ToggleGroup
            type="single"
            value={difficulty}
            onValueChange={(val) => val && setDifficulty(val)}
            className="grid grid-cols-4 gap-2"
          >
            {["easy", "medium", "hard", "mixed"].map((level) => (
              <ToggleGroupItem
                key={level}
                value={level}
                className="bg-[#2c2c3e] text-white hover:bg-[#3b3b55] data-[state=on]:bg-[#5b5bb0]"
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <Button
          onClick={handleFormSubmit}
          className="w-full bg-[#5b5bb0] hover:bg-[#6c6cd9] text-white"
        >
          Generate Question
        </Button>
      </CardContent>
    </Card>
  );
}
