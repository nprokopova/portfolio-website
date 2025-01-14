import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";

function AboutPage() {
  return (
    <>
      <Meta title="About" description="About me" />
      <HeroSection2
        bgColor="primary"
        size="large"
        bgImage="/images/undraw_programmer_re_owql.svg"
        bgImageOpacity={0.2}
        title="About me"
        subtitle={
          <>
            <p>
              I am a Full Stack Developer with an interesting background. I
              studied biotechnology and worked in the field of genetics as a
              scientist. I thereafter pursued a career in programming. I love
              science and technology, and computer science is what I found to be
              a perfect career path. I have worked both on the front and the
              back end, creating web and desktop applications. I
            </p>
          </>
        }
      />
    </>
  );
}

export default AboutPage;
