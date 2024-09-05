import Image from "next/image";
import React from "react";

const PreLoader = () => {
  return (
    <>
      <div className="h-[100vh] w-full flex justify-center items-center">
        <Image
          src={"/assets/gifs/preloader.gif"}
          alt={"preloader"}
          className="w-52 h-52 justify-center items-center "
          width={200}
          height={200}
        />
      </div>
    </>
  );
};

export default PreLoader;
