import * as React from "react";

interface Props {
  title: string;
  text1: string;
  text2: string;
  text3: string;
}

export function CardServices({ title, text1, text2, text3 }: Props) {
  return (
    <article className="service">
      <div className="flex flex-col p-2 h-70 md:h-60 lg:h-80 xl:h-90 text-primary relative">
        <div className="bg-primary-foreground p-7 absolute rounded-full bottom-63 md:bottom-53 lg:bottom-73 xl:bottom-83 left-50 md:left-58 lg:left-45  xl:left-48"></div>
        <h1 className="font-bold text-2xl mb-5 mt-6">{title}</h1>
        <ul className="text-lg flex-grow mb-10">
          <li className="mb-2">{text1}</li>
          <li className="mb-2">{text2}</li>
          <li>{text3}</li>
        </ul>
        <a href="#More" className=" absolute text-lg p-4 px-18 lg:px-10 border-1 border-primary rounded-lg top-78 md:top-70 lg:top-90 xl:top-90 hover:bg-primary-foreground hover:text-white">Saber más...</a>
      </div>
    </article>
  );
}
