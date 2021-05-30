export default () => {
  const subscribers = {};
  function subscribe(event, cb) {
    if (!Array.isArray(subscribers[event])) {
      subscribers[event] = [];
    }

    subscribers[event].push(cb);
  }

  const publish = (event, data) => {
    if (!Array.isArray(subscribers[event])) {
      return;
    }

    subscribers[event].forEach((cb) => {
      console.log(cb, "execution");
      cb(data);
    });
  };
  return {
    subscribe,
    publish,
  };
};
