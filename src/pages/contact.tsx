import React from "react";
import Meta from "components/Meta";
import ContactSection from "components/ContactSection";

const ContactPage = () => {
  return (
    <>
      <Meta title="Contact" />
      <ContactSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Contact Me"
        subtitle=""
        buttonText="Send message"
        showNameField={true}
      />
    </>
  );
};

export default ContactPage;
