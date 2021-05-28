import React, { useState, useEffect } from "react";
const Timer = ({ times }) => {
  const maxCount = 5;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= maxCount) {
      return;
    }
    console.log("start Layout Effect");
    const timerId = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      console.log("Clean Layout Effect");
      clearTimeout(timerId);
    };
  }, [count]);

  return <p>Timer: {count}</p>;
};

export default Timer;
