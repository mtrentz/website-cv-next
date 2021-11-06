import React from "react";
import CardCoding from "../General/CardCoding";
import ColoredText from "../General/ColoredText";
import HorizontalSeparator from "../General/HorizontalSeparator";
import Image from "next/image";

const Coding = () => {
  return (
    <div className="py-4 flex flex-col items-center justify-center gap-2">
      <div className="bg-white w-[90%] h-[90%] rounded-lg overflow-auto py-5 shadow-md">
        {/* Sections */}
        {/* CHESS IMAGE RECOGNIZER */}
        <CardCoding
          title="Chess Image Recognizer"
          description={
            <span>
              Project that detects a chess board from a screenshot and lets you
              continue playing the match on Lichess. Coded on{" "}
              <ColoredText c="#F9C222" t="Python" /> with the machine learning
              model made on <ColoredText c="#EE4C2C" t="Pytorch" />, webapp
              built with <ColoredText c="#156646" t="Django" /> and distributed
              with <ColoredText c="#2496ED" t="Docker" />.
            </span>
          }
          image={
            <Image
              src="/coding_imgs/chess.png"
              alt="Chessboard"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="fill"
            />
          }
          link="https://github.com/mtrentz/Chess-Recognizer-App"
          reverse={false}
        />
        <HorizontalSeparator />
        {/* BOLSA */}
        <CardCoding
          title="Stocks Porftolio Analysis"
          description={
            <span>
              One of my first coding projects. Portfolio value tracker using
              public APIs that generates graphs of value progression, sends
              emails weekly about earnings. Coded on{" "}
              <ColoredText c="#F9C222" t="Python" />, mostly using{" "}
              <ColoredText c="#E70488" t="Pandas" /> and{" "}
              <ColoredText c="#11557C" t="Matplotlib" />.
            </span>
          }
          image={
            <Image
              src="/coding_imgs/bolsa.png"
              alt="Stock Graph"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="fill"
            />
          }
          link="https://github.com/mtrentz/Bolsa"
          reverse={true}
        />
        <HorizontalSeparator />
        {/* THIS WEBSITE */}
        <CardCoding
          title="This Website"
          description={
            <span>
              Curriculum website built with{" "}
              <ColoredText c="#00D1F7" t="React" />,{" "}
              <ColoredText c="#111111" t="Next.js" /> and{" "}
              <ColoredText c="#06B6D4" t="TailwindCSS" /> for styling. Deployed
              with <ColoredText c="#2496ED" t="Docker" />.
            </span>
          }
          image={
            <Image
              src="/coding_imgs/react.png"
              alt="React Logo"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="fill"
            />
          }
          link="https://github.com/mtrentz/website-cv"
          reverse={false}
        />
        <HorizontalSeparator />
        {/* IMGUR TEXT SCRAPER */}
        <CardCoding
          title="Imgur Text Scraper"
          description={
            <span>
              A imgur random image scraper that also detects texts the image.
              Built with both <ColoredText c="#F9C222" t="Python" /> and{" "}
              <ColoredText c="#00ACD7" t="Golang" />, using a library called{" "}
              <ColoredText c="#EE4C2C" t="EasyOCR" /> for text detection.
              Implements <ColoredText c="#059083" t="FastAPI" /> for
              communication. Distributed with{" "}
              <ColoredText c="#2496ED" t="Docker" />.
            </span>
          }
          image={
            <Image
              src="/coding_imgs/imgur.png"
              alt="Imgur Logo"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="fill"
            />
          }
          link="https://github.com/mtrentz/Imgur-Text-Scraper"
          reverse={true}
        />
        <HorizontalSeparator />
        {/* CNPJ */}
        <CardCoding
          title="Brazillian Companies Federal Revenue Data"
          description={
            <span>
              Program that downloads and cleans and imports the federal revenue
              registration data for all companies in Brazil to a MySQL database
              in a Docker container. Built with{" "}
              <ColoredText c="#00ACD7" t="Golang" />, working with{" "}
              <ColoredText c="#2496ED" t="Docker" />.
            </span>
          }
          image={
            <Image
              src="/coding_imgs/gov.png"
              alt="gov.br Logo"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="fill"
            />
          }
          link="https://github.com/mtrentz/dados-cnpj"
          reverse={false}
        />
      </div>
    </div>
  );
};

export default Coding;
