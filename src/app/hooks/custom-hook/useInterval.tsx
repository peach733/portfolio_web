import { useEffect, useRef } from "react";

interface useIntervalProps {
  (callback: () => void, delay: number): void;
}

const useInterval: useIntervalProps = (callback, delay) => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
