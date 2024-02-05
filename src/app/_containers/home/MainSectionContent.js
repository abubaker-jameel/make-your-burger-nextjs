import React from "react";
import Image from "next/image";
import Typography from "@/app/_components/Typography/Typography";
import PropTypes from "prop-types";
import CircleBtn from "./CircleBtn";

const MainSectionContent = ({ title, paragraph, btnTitle }) => {
  return (
    <div className="relative min-h-[clamp(600px,80dvh,100dvh)] xl:grid xl:grid-cols-[600px_minmax(500px,_1fr)]">
      <div className="mt-4 flex flex-col xl:justify-center">
        <Typography variant="h1" className="leading-none xl:max-w-min">
          {title}
        </Typography>
        <Typography variant="p" className="mt-4 xl:hidden">
          {paragraph}
        </Typography>
      </div>
      <div className="relative h-[80dvh] xl:h-full">
        <Image
          src="/images/main-img.svg"
          fill
          className="hidden xl:block"
          alt="main-img"
          priority
        />
        <Image
          src="/images/main-img-mob.svg"
          fill
          className="xl:hidden"
          alt="main-img-mobile"
          priority
        />
      </div>
      <CircleBtn btnTitle={btnTitle} />
    </div>
  );
};

MainSectionContent.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
};

export default MainSectionContent;
