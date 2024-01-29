import React from "react";
import Image from "next/image";
import Button from "@/app/_components/Buttons/Button";

const MainSectionContent = ({ title, paragraph, btnTitle }) => {
  return (
    <div className="relative grid min-h-[85vh] xl:grid-cols-[600px_minmax(500px,_1fr)]">
      <div className="mt-4 flex flex-col xl:justify-center">
        <h1 className="text-4xl leading-none xl:max-w-min xl:text-primary-xlg">
          {title}
        </h1>
        <p className="mt-4 xl:hidden">{paragraph}</p>
      </div>
      <div className="relative min-h-[300px]">
        <Image src="/images/main-img.svg" fill className="hidden xl:block" />
        <Image src="/images/main-img-mob.svg" fill className="xl:hidden" />
      </div>
      <Button
        color="hero"
        size="hero"
        className="absolute right-1/2 top-2/3 aspect-square translate-x-1/2 xl:translate-x-0"
      >
        <span className="inline-block max-w-min">{btnTitle}</span>
      </Button>
    </div>
  );
};

export default MainSectionContent;
