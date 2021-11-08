import CardDefault from "../General/CardDefault";
import CardDouble from "../General/CardDouble";
import Image from "next/image";

const Tech = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="py-4 w-[85%] flex flex-col items-center justify-center gap-2 md:grid md:grid-cols-3 md:gap-x-1 md:w-[60%]">
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
          cardDescription="I've been programming in Python for years, it's the language I'm most confortable at."
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
          cardDescription="I've been using Go since the start of 2020. It grew to be one of my favorite tools."
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
          cardDescription="One of my most recent languages to learn, since it used to do web development."
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
          cardDescription="I've been working daily with SQL for two years now."
        />
      </div>
    </div>
  );
};

export default Tech;
