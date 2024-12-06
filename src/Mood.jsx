import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import smileAnimation from "./assets/Animation - 1733463744414.json";
import sadAnimation from "./assets/Animation - 1733466104225.json";
import angryAnimation from "./assets/Animation - 1733466222785.json";
import excitedAnimation from "./assets/Animation - 1733466946804.json";

export default function Mood({ onMoodSelect, selectedMood }) {
  const moods = [
    { id: 1, name: "Happy", emoji: <Lottie animationData={smileAnimation} className="w-24 h-24" /> },
    { id: 2, name: "Angry", emoji: <Lottie animationData={angryAnimation} className="w-24 h-24" /> },
    { id: 3, name: "Sad", emoji: <Lottie animationData={sadAnimation} className="w-24 h-24" /> },
    { id: 4, name: "Excited", emoji: <Lottie animationData={excitedAnimation} className="w-24 h-24" /> },
    { id: 5, name: "Anxious", emoji: "😰" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Select Your Mood</h1>
      <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-6">
        {moods.map((mood) => (
          <motion.div
            key={mood.id}
            initial={{ opacity: selectedMood && selectedMood !== mood.id ? 0 : 1 }}
            animate={{
              opacity: selectedMood && selectedMood !== mood.id ? 0 : 1,
              scale: selectedMood === mood.id ? 1.5 : 1,
              zIndex: selectedMood === mood.id ? 10 : 1,
            }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col items-center justify-center w-32 h-40 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-sm ${
              selectedMood === mood.id ? "fixed top-[40%] left-[40%]" : ""
            }`}
            onClick={() => onMoodSelect(mood.id)}
          >
            <div>{mood.emoji}</div>
            <p className="mt-2 text-lg font-medium text-gray-700">{mood.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
