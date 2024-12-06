import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AIResponse = ({ moodId }) => {
  const [animatedWords, setAnimatedWords] = useState([]);
  const [responseText, setResponseText] = useState("");
  const geminiApiKey = "AIzaSyAtWbjP0TbjSy0bZkG7-69EjORVT1TCSGg";
   
  const genAI = new GoogleGenerativeAI(geminiApiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const prompt = getPromptBasedOnMood(moodId);
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        setResponseText(text);
        displayWordsOneByOne(text);
      } catch (error) {
        console.error("Error fetching AI response:", error);
      }
    };

    fetchResponse();
  }, [moodId]);

  const getPromptBasedOnMood = (moodId) => {
    const prompts = {
      1: "What activities can enhance happiness, give me in correct tips step by step?",
      2: "How can someone deal with anger in a healthy way,give me in correct tips step by step?",
      3: "What are some self-care tips for sadness,give me in correct tips step by step?",
      4: "How can someone channel their excitement productively,give me in correct tips step by step?",
      5: "What are some effective methods to reduce anxiety,give me in correct tips step by step?",
    };
    return prompts[moodId] || "Tell me something interesting.";
  };

  const displayWordsOneByOne = (text) => {
    const words = text.split(" ");
    let index = 0;

    const interval = setInterval(() => {
      setAnimatedWords((prev) => [...prev, words[index]]);
      index++;
      if (index === words.length) clearInterval(interval);
    }, 300); // Adjust delay for animation
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="w-4/5 lg:w-2/3 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">AI Response</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {animatedWords.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AIResponse;
