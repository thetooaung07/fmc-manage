import Chart from "../assets/illustration-intro.svg";
import { GetStartBtn } from "../components/GetStartBtn";
export const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left md:leading-tight">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkBluePale md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <GetStartBtn></GetStartBtn>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={Chart} alt="" className="md:float-right" />
        </div>
      </div>
    </section>
  );
};
