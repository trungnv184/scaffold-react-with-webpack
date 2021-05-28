import { useEffect, useRef } from "react";
const useInterval = (cb, delay) => {
  const callbackRef = useRef();
  useEffect(() => {
    callbackRef.current = cb;
  }, [cb]);
  
  useEffect(() => {
    const tick = () => {
      callbackRef.current();
    };

    console.log("interval hooks");
    let intervalId = setInterval(tick, delay);
    return () => clearInterval(intervalId);
  }, [cb, delay]);
};

export default useInterval;
