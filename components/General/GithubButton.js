import { VscGithubInverted } from "react-icons/vsc";

const GithubButton = ({ link }) => {
  return (
    <a
      href={link}
      className="w-48 h-9 m-auto bg-gray-100 rounded-full flex flex-row items-center justify-center mt-4"
    >
      <div className="px-2 text-base font-medium">Check it on Github</div>
      <VscGithubInverted />
    </a>
  );
};

export default GithubButton;
