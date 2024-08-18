import React from "react";

const Button = (prop) => {
  return (
    <div>
      <button className="border border-solid border-dark-blue px-7 py-2 font-semibold">
        {" "}
        {prop.text}
      </button>
    </div>
  );
};

export default Button;
