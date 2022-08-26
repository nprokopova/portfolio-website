import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";
import img3 from "../../public/images/undraw_static_assets_rpm6.svg"

function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="About me" />
      <HeroSection2
        bgColor="primary"
        size="large"
        bgImage={img3}
        bgImageOpacity={0.2}
        title="About me"
        subtitle="I am a Web Developer with a scientific background in molecular biology. I obtained a BSc degree in Biotechnology and I worked for a few years in the field of genetic sequencing. I decided to change my career as I have always been interested in programming and I concluded that it is a better match for me. I have really enjoyed building websites and web applications with React and I am now looking for new opportunities to apply and develop my skill-set with this technology."
      />

    </>
  );
}

export default AboutPage;
