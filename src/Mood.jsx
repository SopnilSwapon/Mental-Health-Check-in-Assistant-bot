import React from "react";

export default function Mood() {
  // Mood data: Each mood has a unique ID, name, and emoji
  const moods = [
    { id: 1, name: "Happy", emoji: "😊" },
    { id: 2, name: "Sad", emoji: "😢" },
    { id: 3, name: "Angry", emoji: "😡" },
    { id: 4, name: "Excited", emoji: "🤩" },
    { id: 5, name: "Anxious", emoji: "😰" },
  ];

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
            <span className="text-4xl">{mood.emoji}</span>
            <p className="mt-2 text-lg font-medium text-gray-700">{mood.name}</p>
          </div>
        ))}
      </div>
      <button className="btn btn-primary">primary</button>
      <button className="btn btn-blue">
  Button
</button>
    </div>
  );
}
