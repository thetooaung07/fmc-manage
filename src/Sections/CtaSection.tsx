import React from "react";
import { GetStartBtn } from "../components/GetStartBtn";

export const CtaSection = () => {
  return (
    <section id="cta" className="bg-red0">
      <div className="container flex flex-col items-center justify-between px-6 py-12 mx-auto space-y-12 md:py-20 md:flex-row md:space-y-0">
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>

        <GetStartBtn styles="text-red0 bg-white shadow-2xl hover:bg-gray-200"></GetStartBtn>
      </div>
    </section>
  );
};
