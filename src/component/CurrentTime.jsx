import React, { useState, useEffect } from "react";
import { TbWorld } from "react-icons/tb";

function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(function () {
    const timer = setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return function () {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex justify-center items-baseline text-[4vw] sm:text-[3vw] md:text-[20px] font-bold">
      <TbWorld 
        className="mr-3 sm:mr-4" 
        size="20px" 
      />
      <div>UNA_{time}</div>
    </div>
  );
}

export default CurrentTime;
