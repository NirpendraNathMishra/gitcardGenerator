import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="min-w-screen p-6 fixed bottom-0">
      <div className="max-w-6xl mx-auto flex gap-4 justify-center flex-wrap  text-xs sm:text-sm">
        <div className=" border rounded-md p-1 hover:bg-neutral-50/10 px-4 text-wrap  tracking-[0.2rem] sm:tracking-wide text-center">
          With ❤️ from{" "}
          <a
            href="https://github.com/NirpendraNathMishra"
            target="_blank"
            rel="noreferrer"
            className="text-red-500 dark:text-neutral-50 underline font-bold hover:text-red-600 dark:hover:text-neutral-100 transition-colors duration-300 ease-in-out mr-4"
          >
            Nnm
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
