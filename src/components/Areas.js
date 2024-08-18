import React, { forwardRef } from "react";

const Areas = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[45.2rem] items-center justify-center flex w-full text-white bg-dark-blue"
    >
      Areas
    </div>
  );
});

export default Areas;
