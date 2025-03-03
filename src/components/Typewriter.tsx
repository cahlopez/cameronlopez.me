import React, { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  onComplete?: () => void;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 50,
  delay = 0,
  cursor = true,
  onComplete,
  className = "",
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const timeoutRef = useRef<number | null>(null);
  const charIndexRef = useRef(-1);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText("");
    charIndexRef.current = -1;

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Initial delay before starting to type
    timeoutRef.current = setTimeout(() => {
      typeNextChar();
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, delay, speed]);

  const typeNextChar = () => {
    if (charIndexRef.current < text.length) {
      setDisplayedText((prev) => prev + text.charAt(charIndexRef.current));
      charIndexRef.current += 1;

      // Schedule next character
      timeoutRef.current = setTimeout(typeNextChar, speed);
    } else {
      if (onComplete) {
        onComplete();
      }
    }
  };

  return (
    <span className={className}>
      {displayedText}
      {cursor && <span className="typewriter-cursor">_</span>}
      <style>{`
        .typewriter-cursor {
          display: inline-block;
          width: 2px;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
        }
        
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default Typewriter;
