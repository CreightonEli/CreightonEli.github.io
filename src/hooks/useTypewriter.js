import { useState, useEffect } from "react";

export function useTypewriter(words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    // Calculate the delay for the next character update
    const delay = !isDeleting && text === currentWord
      ? pauseTime
      : isDeleting && text === ""
      ? 300
      : isDeleting
      ? deletingSpeed
      : typingSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      } else {
        setText(
          isDeleting
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
