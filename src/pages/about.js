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
        bgImage="/images/undraw_programmer_re_owql.svg"
        bgImageOpacity={0.2}
        title="About me"
        subtitle={<><p>"I embarked on an unconventional journey that began with studying biotechnology and delving
        into the intricacies of genetics, where I contributed to the development of a custom DNA
        sequencing instrument. However, my exposure to programming ignited a realisation within me -
        that my true passion lies in the realm of technology and computers.
        </p>
        <p>
        Despite my fascination with genetics, I found my calling in web and app development,
        leveraging my innate way of thinking and affinity for computing. Over the past two years, I've
        honed my skills in Typescript and React, alongside mastering HTML and Vanilla CSS along with
        various libraries."</p></>}
      />

    </>
  );
}

export default AboutPage;
