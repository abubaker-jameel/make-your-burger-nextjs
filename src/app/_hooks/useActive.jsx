import { useState } from "react";

const useActive = () => {
  const [isActive, setIsActive] = useState(false);

  function handleActive() {
    setIsActive((prev) => !prev);
  }
  return { isActive, setIsActive, handleActive };
};

export default useActive;
