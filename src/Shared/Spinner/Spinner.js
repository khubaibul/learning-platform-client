import React from "react";

const Spinner = ({ borderColor }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className={`w-6 h-6 border-[3px] border-dotted rounded-full animate-spin 
            border-[${borderColor}]`}
      ></div>
    </div>
  );
};

export default Spinner;
