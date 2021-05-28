let timer;
const debounce = (cb, delay) => {
  clearTimeout(timer);
  console.log(timer, "LOG_TIMER");
  return (...args) => {
    console.log(args.toString());
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

export default debounce;
