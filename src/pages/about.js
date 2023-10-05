import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";

function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="About me" />
      <HeroSection2
        bgColor="primary"
        size="large"
        bgImage="/images/undraw_alien_science_re_0f8q.svg"
        bgImageOpacity={0.2}
        title="About me"
        subtitle="I am a Front End Developer with an interesting background. I started off studying biotechnology and worked in the field of genetics on a custom DNA sequencing instrument. Due to my exposure to programming I realised it's a much better fit for me despite finding genetics extremely interesting. That is largely due to the way I think and my love for working with computers. I decided to pursue a career in Web Development and I've worked in the field for two years. I am proficient in Vanilla JS and React, as well as HTML and Vanilla CSS + libraries."
      />

    </>
  );
}

export default AboutPage;
