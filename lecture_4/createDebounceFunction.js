function createDebounceFunction(cb, latencyMS) {
  let timer;

  return () => {
    if (timer)
      clearTimeout(timer);

    return timer = setTimeout(cb, latencyMS);
  };
}