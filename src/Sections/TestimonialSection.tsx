import React from "react";
import AvatarAli from "../assets/avatar-ali.png";
import AvatarAnisha from "../assets/avatar-anisha.png";
import AvatarRichard from "../assets/avatar-richard.png";
import { GetStartBtn } from "../components/GetStartBtn";
import {
  TestimonialCard,
  TestimonialCardInfo,
} from "../components/TestimonialCard";

const data: Array<TestimonialCardInfo> = [
  {
    name: "Anisha Li",
    imageUrl: AvatarAnisha,
    testimonialDesc:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    name: "Ali Bravo",
    imageUrl: AvatarAli,
    testimonialDesc:
      " “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    name: "Richard Watts",
    imageUrl: AvatarRichard,
    testimonialDesc:
      "  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different about Manage?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="hidden md:flex">
            {data.map((e, index) => (
              <TestimonialCard
                key={index}
                name={e.name}
                imageUrl={e.imageUrl}
                testimonialDesc={e.testimonialDesc}
              ></TestimonialCard>
            ))}
          </div>
          <div className="block md:hidden ">
            <TestimonialCard
              name={data[0].name}
              imageUrl={data[0].imageUrl}
              testimonialDesc={data[0].testimonialDesc}
            ></TestimonialCard>
          </div>
        </div>
        <div className="my-16">
          <GetStartBtn></GetStartBtn>
        </div>
      </div>
    </section>
  );
};
