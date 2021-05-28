import React, { useState, useCallback } from "react";
import Timer from "./component/Timer";
import debounce from "./utils/debounce";
import Interval from "./component/Interval";
import throttle from "./utils/throttle";
const sum = (a, b) => a + b;

const App = () => {
  const [textValue, setTextValue] = useState();
  const [isClicked, setIsClicked] = useState(true);

  const throttleSumValues = throttle(sum, 5000);

  const onLazyImportImage = () => {
    // setIsClicked(!isClicked);
    console.log(throttleSumValues(5, 6), "CLICK");
    import("./component/ImageViewer").then((m) => m.default());
  };

  const debounced = debounce(setTextValue, 5000);
  const onChange = (event) => {
    debounced(event.target.value);
  };

  return (
    <>
      <Timer times={5} />
      <Interval />
      <h3>{textValue}</h3>
      <input value={textValue} onChange={onChange} />
      <button onClick={onLazyImportImage}>Lazy Import</button>
    </>
  );
};

export default App;
