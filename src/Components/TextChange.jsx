import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Anurag Thakur", "Anurag Thakur", "Anurag Thakur"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }

      if (endValue < 1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 70);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
        <span className="text-slate-400 font-light">Hi, I'm </span>
        <br className="md:hidden" />
        <span className="text-white relative">
          {currentText}
          {/* Subtle thin cursor */}
          <span className="ml-1 border-r-2 border-blue-500 animate-pulse"></span>
        </span>
      </h1>
    </div>
  );
};

export default TextChange;