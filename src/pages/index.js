import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";
import Links from "components/Links";
import Projects from "components/Projects";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Nikol Prokopova"
        subtitle="Welcome to my portfolio website"
      />
      <Links
        bgColor="light"
        size="normal"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      <Projects
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Projects"
      />
    </>
  );
}

export default IndexPage;
