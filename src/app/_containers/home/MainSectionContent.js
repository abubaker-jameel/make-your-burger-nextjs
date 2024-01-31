import React from "react";
import Image from "next/image";
import Button from "@/app/_components/Buttons/Button";
import Typography from "@/app/_components/Typography/Typography";
import PropTypes from "prop-types";

const MainSectionContent = ({ title, paragraph, btnTitle }) => {
  return (
    <div className="relative min-h-[clamp(600px,80dvh,100vh)] xl:grid xl:grid-cols-[600px_minmax(500px,_1fr)]">
      <div className="mt-4 flex flex-col xl:justify-center">
        <Typography variant="h1" className="leading-none xl:max-w-min">
          {title}
        </Typography>
        <Typography variant="p" className="mt-4 xl:hidden">
          {paragraph}
        </Typography>
      </div>
      <div className="relative h-[80dvh] xl:h-full">
        <Image src="/images/main-img.svg" fill className="hidden xl:block" />
        <Image src="/images/main-img-mob.svg" fill className="xl:hidden" />
      </div>
      <Button
        color="hero"
        size="hero"
        className="absolute right-1/2 top-[60%] aspect-square translate-x-1/2 xl:translate-x-0"
      >
        <span className="inline-block max-w-min">{btnTitle}</span>
      </Button>
    </div>
  );
};

MainSectionContent.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
};

export default MainSectionContent;
