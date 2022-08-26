import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";
import Links from "components/Links";
import Projects from "components/Projects";
import img1 from '../../public/images/undraw_programmer_re_owql.svg'

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
        image={img1}
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
