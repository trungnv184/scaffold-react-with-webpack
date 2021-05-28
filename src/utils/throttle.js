const throttle = (cb, wait) => {
  let shouldPauseThrottle = false;

  return (...rest) => {
    if (shouldPauseThrottle) {
      return;
    }

    console.log(shouldPauseThrottle, "BEFORE_LOG_THROTTLE");
    shouldPauseThrottle = true;
    console.log(rest.toString(), shouldPauseThrottle, "LOG_THROTTLE");

    const result = cb(...rest);

    setTimeout(() => {
      shouldPauseThrottle = false;
    }, wait);

    return result;
  };
};

export default throttle;
