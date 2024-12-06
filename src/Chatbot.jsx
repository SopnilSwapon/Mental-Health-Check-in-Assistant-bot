// Chatbot.jsx
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserInput = (value) => {
    console.log(value);
    setUserInput(value);
  };
  const geminiApiKey = "AIzaSyAtWbjP0TbjSy0bZkG7-69EjORVT1TCSGg";
  const genAI = new GoogleGenerativeAI(geminiApiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const sendMessage = async (messageText) => {
    if (messageText.trim() === "") return;

    try {
      const prompt = messageText;
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      setChatHistory((prev) => [
        ...prev,
        { type: "user", message: messageText },
        { type: "bot", message: text },
      ]);
      setUserInput("");
      console.log(text);
    } catch (e) {
      console.log("Error occurred while fetching", e);
    }
  };

  return (
    <div style={{   height: "100px", marginBottom: "500px" }}>
     <h2 className="text-center text-3xl">How can I Help You?</h2>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {chatHistory.map((elt, i) => (
              <Message
                key={i}
                model={{
                  message: elt.message,
                  sender: elt.type,
                  sentTime: "just now",

                  direction: elt.type === "user" ? "outgoing" : "incoming",
                }}
              />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            value={userInput}
            onChange={(value) => handleUserInput(value)}
            onSend={sendMessage}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Chatbot; // Ensure default export