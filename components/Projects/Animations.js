import React from "react";
import AnimationCard from "../General/AnimationCard";
import HorizontalSeparator from "../General/HorizontalSeparator";

const Animations = () => {
  return (
    <div className="py-4 flex flex-col items-center justify-center gap-2">
      <div className="bg-white w-[98%] h-[98%] md:w-[90%] md:h-[90%] rounded-lg py-5 shadow-md">
        <AnimationCard
          title="Mouse-following Pyramids"
          description={
            <>
              <p>
                Inspired by an{" "}
                <a
                  href="https://www.reddit.com/r/Art/comments/lck88p/441_me_digital_2021/"
                  className="text-blue-600 underline"
                >
                  art drawing on reddit
                </a>
                , it's a very beautiful pyramid scheme that follows your mouse
                on the screen.
              </p>
              <p>
                Check the full code on {"\n"}
                <a
                  href="https://editor.p5js.org/mtrentz/sketches/nGLS11___"
                  className="text-blue-700 font-semibold underline"
                >
                  p5 editor!
                </a>
              </p>
            </>
          }
          link="https://editor.p5js.org/mtrentz/full/02ZxXsACC"
        />

        <HorizontalSeparator />
        <AnimationCard
          title="Clock Spirograph"
          description={
            <>
              <p>
                Replicating the animation from a{" "}
                <a
                  href="https://www.reddit.com/r/woahdude/comments/r4uhbk/the_geometry_of_clock_hands/"
                  className="text-blue-600 underline"
                >
                  reddit post
                </a>
                , it works kinda like a spirograph but draws lines between the
                clock hands every so often, for a very mesmerizing effect!
              </p>
              <p>
                Check the full code on {"\n"}
                <a
                  href="https://editor.p5js.org/mtrentz/sketches/HH50kBzZ3"
                  className="text-blue-700 font-semibold underline"
                >
                  p5 editor!
                </a>
              </p>
            </>
          }
          link="https://editor.p5js.org/mtrentz/full/X1-N5u7xX"
        />
        <HorizontalSeparator />
        <AnimationCard
          title="Tetris"
          description={
            <>
              <p>
                Not much to say about this one, it's a tetris game with all the
                core features made on p5.js.
              </p>
              <p>
                Check the full code on {"\n"}
                <a
                  href="https://editor.p5js.org/mtrentz/full/MJYBwt9AQ"
                  className="text-blue-700 font-semibold underline"
                >
                  p5 editor!
                </a>
              </p>
            </>
          }
          link="https://editor.p5js.org/mtrentz/full/zktOlPkG0"
        />
        <HorizontalSeparator />
        <AnimationCard
          title="Orbits"
          description={
            <>
              <p>Groups of circles spinning that gives a pretty cool effect!</p>
              <p>
                Check the full code on {"\n"}
                <a
                  href="https://editor.p5js.org/mtrentz/sketches/veOB1qfgj"
                  className="text-blue-700 font-semibold underline"
                >
                  p5 editor!
                </a>
              </p>
            </>
          }
          link="https://editor.p5js.org/mtrentz/full/Ldgd57z3M"
        />
      </div>
    </div>
  );
};

export default Animations;
