import React from "react";
import MainSectionContent from "./_containers/home/MainSectionContent";

const Home = () => {
  return (
    <section className="container min-h-[80dvh]">
      <MainSectionContent
        title={"Make Your Burger"}
        paragraph={
          "Parallax screen. Burger ingredients and emojis moving depending on the position of the mouse pointer."
        }
        btnTitle={"Make Burger"}
      />
    </section>
  );
};

export default Home;
