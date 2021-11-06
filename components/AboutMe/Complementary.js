import CardDefault from "../General/CardDefault";
import CardDouble from "../General/CardDouble";
import Image from "next/image";

const Complementary = () => {
  return (
    <div className="py-4 flex flex-col items-center justify-center gap-2">
      <CardDefault
        cardImage={
          <Image
            src="/complementary_imgs/unibio.png"
            alt="Unibio - Denmark"
            width="64"
            height="64"
            className="z-30"
          />
        }
        cardTitle="Unibio - Denmark"
        cardDescription="Five months full-time internship at a chemical plant."
      />
      <CardDouble
        cardImage={
          <Image
            src="/complementary_imgs/sdu.png"
            alt="Syddansk Universitet"
            width="100"
            height="64"
          />
        }
        cardTitle="Syddansk Universitet"
        cardDescription="Two semesters in Denmark studying Chemical Engineering."
        cardImageBig={
          <Image
            src="/complementary_imgs/sdu_pic.png"
            alt="SDU Front"
            width="400"
            height="400"
            className="w-full object-cover opacity-80"
          />
        }
      />
      <CardDefault
        cardImage={
          <Image
            src="/complementary_imgs/dtu.png"
            alt="TU Dortmund"
            width="64"
            height="64"
            className="z-30 scale-125"
          />
        }
        cardTitle="TU Dortmund"
        cardDescription="Three months summer course in Germany studying Chemical Engineering."
      />
    </div>
  );
};

export default Complementary;
