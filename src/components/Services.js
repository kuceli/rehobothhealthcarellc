import React, { forwardRef } from "react";

const Services = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-[45.3rem] border border-solid border-red-500 ">
      Services
    </div>
  );
});

export default Services;
