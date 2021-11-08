const DownloadCVBtn = ({ cv }) => {
  return (
    <div className="bg-gray-100 hover:bg-gray-200 transition ease-in-out mt-4 rounded-xl py-1 mx-auto w-44 2xl:w-52 flex justify-center border border-gray-300">
      <a download href={cv} className="text-center w-full h-full ">
        Download my CV
      </a>
    </div>
  );
};

export default DownloadCVBtn;
