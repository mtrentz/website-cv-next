import CardDefault from "../General/CardDefault";
import CardDouble from "../General/CardDouble";
import Image from "next/image";

const Tech = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="py-4 w-[85%] flex flex-col items-center justify-center gap-2 md:grid md:grid-cols-3 md:gap-x-1 md:w-[65%]">
        <CardDefault
          cardImage={
            <Image
              src="/tech_imgs/python.png"
              alt="python"
              layout="fill"
              objectFit="contain"
            />
          }
          cardTitle="Python"
          cardDescription="I've been programming in Python for years, it's the language I'm the most comfortable at."
        />
        <CardDefault
          cardImage={
            <Image
              src="/tech_imgs/golang.png"
              alt="Golang"
              layout="fill"
              objectFit="contain"
            />
          }
          cardTitle="Golang"
          cardDescription="Started using Go more than a year ago, mostly as a hobby but also for work."
        />
        <CardDefault
          cardImage={
            <Image
              src="/tech_imgs/javascript.png"
              alt="JavaScript"
              layout="fill"
              objectFit="contain"
              className="scale-125"
            />
          }
          cardTitle="Javascript"
          cardDescription="Learned Javascript for web development and animations on p5.js."
        />
        <CardDouble
          cardImage={
            <Image
              src="/tech_imgs/tableau.png"
              alt="Tableau"
              layout="fill"
              objectFit="contain"
            />
          }
          cardTitle="Tableau"
          cardDescription="I love making dashboards with Tableau!"
          cardImageBig={
            <Image
              src="/tech_imgs/tableau_dashboard.png"
              alt="Tableau Dashboard"
              width="500"
              height="500"
              layout="intrinsic"
              objectFit="fill"
              className="object-cover opacity-80"
            />
          }
        />
        <CardDefault
          cardImage={
            <Image
              src="/tech_imgs/mysql.png"
              alt="MySQL"
              layout="fill"
              objectFit="contain"
              className="scale-125"
            />
          }
          cardTitle="MySQL"
          cardDescription="I've been working daily with SQL for more than years now."
        />
      </div>
    </div>
  );
};

export default Tech;
