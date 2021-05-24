import React, { useState, useEffect } from "react";
const Timer = ({ times }) => {
  const maxCount = 5;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= maxCount) {
      return;
    }
    const timerId = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [count]);

  return <p>Timer: {count}</p>;
};

export default Timer;
