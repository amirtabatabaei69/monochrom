import { useState } from "react";

const useBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState();

  const listenScrollEvent = () => {
    if (window.scrollY >= 400 && window.scrollY < 1200) {
      setBackgroundColor("rgb(0, 0, 0)");
    } else if (window.scrollY >= 800 && window.scrollY < 1485) {
      setBackgroundColor("rgb(75,76,83)");
    } else if (window.scrollY >= 1485 && window.scrollY < 2269) {
      setBackgroundColor("rgb(139,161,165)");
    } else if (window.scrollY >= 2269 && window.scrollY < 2962) {
      setBackgroundColor("rgb(187,189,189)");
    } else if (window.scrollY >= 2962) {
      setBackgroundColor("rgb(0, 0, 0)");
    }
  };

  return [backgroundColor, listenScrollEvent];
};

export default useBackground;
