import { VscGithubInverted } from "react-icons/vsc";

const GithubButton = ({ link }) => {
  return (
    <a
      href={link}
      className="w-48 h-9 m-auto bg-gray-100 rounded-full flex flex-row items-center justify-center mt-4 hover:bg-gray-300 hover:border hover:border-gray-400
      lg:w-52 lg:h-10 2xl:w-56 2xl:h-11"
    >
      <div className="px-2 font-medium">Check it on Github</div>
      <VscGithubInverted />
    </a>
  );
};

export default GithubButton;
