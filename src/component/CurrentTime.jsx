import React, { useState, useEffect } from "react";
import { TbWorld } from "react-icons/tb";


function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update time every second
  useEffect(function () {
    const timer = setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // cleanup when component unmounts
    return function () {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex justify-center items-baseline " style={{ fontSize: "20px", fontWeight: "bold" }}>
     <TbWorld className="mr-4 self-center  " size='30px' /> 
 <div>UNA_{time}</div>
    </div>
  );
}

export default CurrentTime;
