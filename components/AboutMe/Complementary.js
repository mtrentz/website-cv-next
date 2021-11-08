import CardDefault from "../General/CardDefault";
import CardDouble from "../General/CardDouble";
import Image from "next/image";

const Complementary = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="py-4 flex flex-col items-center justify-center gap-2 md:grid md:grid-cols-3 md:gap-x-1 md:w-[65%]">
        <CardDefault
          cardImage={
            <Image
              src="/complementary_imgs/unibio.png"
              alt="Unibio - Denmark"
              layout="fill"
              objectFit="contain"
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
              layout="fill"
              objectFit="contain"
              className="scale-110"
            />
          }
          cardTitle="Syddansk Universitet"
          cardDescription="Two semesters in Denmark studying Chemical Engineering."
          cardImageBig={
            <Image
              src="/complementary_imgs/sdu_pic.png"
              alt="SDU Front"
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
              src="/complementary_imgs/dtu.png"
              alt="TU Dortmund"
              layout="fill"
              objectFit="contain"
            />
          }
          cardTitle="TU Dortmund"
          cardDescription="Three months summer course in Germany studying Chemical Engineering."
        />
      </div>
    </div>
  );
};

export default Complementary;
