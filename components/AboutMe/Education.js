import Image from "next/image";

const Education = () => {
  return (
    <div className="w-full h-full flex justify-center py-4">
      {/* Big Card / Container */}
      <div className="bg-white w-[90%] flex flex-col rounded-lg overflow-hidden">
        {/* Top part - Profile Img and Self Description */}
        <div>
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="rounded-full mx-auto border overflow-hidden items-center w-36 h-36">
              <Image
                src="/education_imgs/aang.png"
                alt="Profile Picture"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="fill"
              />
            </div>
          </div>
          {/* Profile Text */}
          <div className="flex flex-col flex-1 justify-center text-center">
            <h2 className="font-semibold">Mateus K. Trentz</h2>
            <p className=" flex-0 leading-normal">
              I'm a Chemical Engineer who is very passionate about Tech and
              Data. I love programming and I've been doing it for a few years
              now. I currently work as a Data Scientist at MaxiQuim, which is a
              Brazilian consulting company for the chemical industry in Brazil,
              where I live.
            </p>
          </div>
        </div>

        {/* Horizontal Separator */}
        <div className="h-5 flex flex-col justify-center items-center">
          <div className="bg-gray-200 w-5/6 h-[2px]"></div>
        </div>

        {/* Bottom Part. Uni and Job title */}
        <div>
          {/* University Part */}
          <div>
            {/* University Picture */}
            <div className="rounded-full mx-auto border overflow-hidden w-28 h-28">
              <Image
                src="/education_imgs/ufrgs.png"
                alt="University Picture"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="fill"
              />
            </div>
            {/* University Text */}
            {/* Text Part */}
            <div className="w-full">
              <p className="font-semibold text-center">
                Universidade Federal do Rio Grande do Sul
              </p>
              <p className="flex-0 text-center"> Chemical Engineering </p>
              <p className="flex-0 text-center"> Graduated in 2020 </p>
            </div>
          </div>

          {/* Horizontal Separator */}
          <div className="h-5 flex flex-col justify-center items-center">
            <div className="bg-gray-200 w-5/6 h-[2px]"></div>
          </div>

          {/* Job Part */}
          <div>
            {/* Job Picture */}
            <div className="rounded-2xl mx-auto border overflow-hidden w-32 h-28 pt-2">
              <Image
                src="/education_imgs/maxiquim.png"
                alt="Job Picture"
                width="100%"
                height="80%"
                layout="responsive"
                objectFit="fill"
              />
            </div>
            {/* Job Title */}
            <div>
              <p className="font-semibold text-center">MaxiQuim</p>
              <p className="flex-0 text-center"> Data Scientist </p>
              <p className="flex-0 text-center"> mar/2020 - present </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
