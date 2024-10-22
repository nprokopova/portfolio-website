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
        subtitle={<><p>I am a Software Developer with an interesting background. I studied biotechnology and worked in the field of genetics. Following my exposure to programming I realised it's a much better fit for me. That is largely due to the way I think and my love for working with computers. I thereafter pursued a career in programming. I have worked both on the front and the back end, creating web and desktop applications.</p></>}
      />

    </>
  );
}

export default AboutPage;
