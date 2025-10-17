import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";

const AboutPage = () => {
  return (
    <>
      <Meta title="About" description="About me" />
      <HeroSection2
        bgColor="primary"
        size="large"
        bgImage="/images/undraw_programmer_re_owql.svg"
        bgImageOpacity={0.2}
        title="About me"
        subtitle={`
             I am a Software Developer with a unique background in science. My passion for technology and problem solving led me to the world of programming. I have more than three years of experience working across the stack with emphasis on TypeScript, React and Node.js. I thrive on solving complex technical problems and innovating.
         `}
      />
    </>
  );
};

export default AboutPage;
