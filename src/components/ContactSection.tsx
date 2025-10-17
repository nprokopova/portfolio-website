import React from "react";
import Container from "@mui/material/Container";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Contact from "components/Contact";

interface ContactSectionProps {
  bgColor?: string;
  bgImage?: string;
  bgImageOpacity?: number;
  size?: "normal" | "medium" | "large" | "auto";
  title: string;
  subtitle?: string;
  showNameField?: boolean;
  buttonText?: string;
}

function ContactSection({
  bgColor,
  bgImage,
  bgImageOpacity,
  size,
  title,
  subtitle,
  showNameField,
  buttonText,
}: ContactSectionProps) {
  return (
    <Section
      bgColor={bgColor}
      size={size}
      bgImage={bgImage}
      bgImageOpacity={bgImageOpacity}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          size={4}
          textAlign="center"
        />
        <Contact showNameField={showNameField} buttonText={buttonText} />
      </Container>
    </Section>
  );
}

export default ContactSection;
