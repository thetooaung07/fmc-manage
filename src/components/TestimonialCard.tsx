import React from "react";

export type TestimonialCardInfo = {
  name: string;
  imageUrl: string;
  testimonialDesc: string;
};

export const TestimonialCard = ({
  name,
  imageUrl,
  testimonialDesc,
}: TestimonialCardInfo) => {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-lightGray md:w-1/3">
      <img src={imageUrl} className="w-16 -mt-14" alt="" />
      <h5 className="text-lg font-bold">{name}</h5>
      <p className="text-sm text-darkBluePale pb-5">{testimonialDesc}</p>
    </div>
  );
};
