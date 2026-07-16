"use client";

import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  {
    typingSpeed = 90,
    deletingSpeed = 45,
    pauseTime = 1400,
  }: { typingSpeed?: number; deletingSpeed?: number; pauseTime?: number } = {}
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const delay =
      !deleting && text === currentWord
        ? pauseTime
        : deleting && text === ""
          ? 0
          : deleting
            ? deletingSpeed
            : typingSpeed;

    const timeout = setTimeout(() => {
      if (!deleting && text === currentWord) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText((prev) =>
          deleting
            ? currentWord.slice(0, prev.length - 1)
            : currentWord.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
