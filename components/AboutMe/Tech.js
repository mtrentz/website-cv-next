import CardDefault from "../General/CardDefault";
import CardDouble from "../General/CardDouble";
import Image from "next/image";

const Tech = () => {
  return (
    <div className="py-4 flex flex-col items-center justify-center gap-2">
      <CardDefault
        cardImage={
          <Image
            src="/tech_imgs/python.png"
            alt="python"
            width="64"
            height="64"
            className="z-30"
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
            width="52"
            height="64"
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
            width="120"
            height="64"
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
            width="64"
            height="64"
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
            className="w-full object-cover opacity-80"
          />
        }
      />
    </div>
  );
};

export default Tech;
