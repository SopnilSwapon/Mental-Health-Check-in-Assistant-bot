import React from "react";
// import { Player } from "lottie-react"; // Import Player for Lottie animations
import smileAnimation from "./assets/Animation - 1733463744414.json"; // Path to the .lottie file
import sadAnimation from "./assets/Animation - 1733466104225.json"; // Path to the .lottie file
import angryAnimation from "./assets/Animation - 1733466222785.json"; // Path to the .lottie file
import excitedAnimation from "./assets/Animation - 1733466946804.json"; // Path to the .lottie file
import Lottie from "lottie-react";

export default function Mood() {
  // Mood data: Each mood has a unique ID, name, and optional Lottie animation or emoji
  const moods = [
    { id: 1, name: "Happy", emoji:<Lottie className="w-full h-[150px] lg:h-full md:h-full" animationData={smileAnimation}></Lottie>  },
    { id: 2, name: "Angry", emoji:<Lottie className="w-full h-[150px] lg:h-full md:h-full" animationData={angryAnimation}></Lottie>},
    { id: 3, name: "Sad", emoji:<Lottie className="w-full h-[150px] lg:h-full md:h-full" animationData={sadAnimation}></Lottie>},
    { id: 4, name: "Excited", emoji:<Lottie className="w-full h-[150px] lg:h-full md:h-full" animationData={excitedAnimation}></Lottie>},
    { id: 5, name: "Anxious", emoji: "😰" },
  ];
// console.log(smileAnimation, 'animation')
  // Function to handle card click
  const handleMoodClick = (moodId) => {
    console.log(`Selected Mood ID: ${moodId}`);
    // Add API call or processing logic here
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Select Your Mood</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {moods.map((mood) => (
          <div
            key={mood.id}
            className="flex flex-col items-center justify-center w-32 h-40 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:scale-105 hover:shadow-lg transition-transform duration-200 cursor-pointer"
            onClick={() => handleMoodClick(mood.id)}
          >
            <div className="text-4xl">{mood.emoji}</div>
            <p className="mt-2 text-lg font-medium text-gray-700">{mood.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
