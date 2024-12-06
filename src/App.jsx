 

import React, { useState } from "react";
 
import AIResponse from "./AIResponse.jsx";
import Mood from "./Mood.jsx";

export default function App() {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (moodId) => {
    setSelectedMood(moodId);
  };

  return (
    <div className="App">
      <Mood onMoodSelect={handleMoodSelect} selectedMood={selectedMood} />
      {selectedMood && <AIResponse moodId={selectedMood} />}
    </div>
  );
}
