import React from "react";

export const GetStartBtn = ({ styles }: { styles?: string }) => {
  console.log(styles);
  return (
    <a
      href="#"
      className={`p-3 px-6 pt-2 text-white bg-red0 rounded-full baseline hover:bg-red1 ${styles}`}
    >
      Get Started
    </a>
  );
};
