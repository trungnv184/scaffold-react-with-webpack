import React, { useState } from "react";
import useInterval from "../hooks/useInterval";

const Interval = () => {
  const [value, setValue] = useState(1);
  useInterval(() => setValue((prev) => prev + 1), 3000);
  return (
    <>
      <h1>Interval Number: {value}</h1>
    </>
  );
};
export default Interval;
