import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  bgColor?: "default" | "light" | "primary" | "secondary" | "transparent";
  size?: "normal" | "medium" | "large" | "auto";
  bgImage?: string;
  bgImageOpacity?: number;
}

function HeroSection2({
  title,
  subtitle,
  bgColor,
  size,
  bgImage,
  bgImageOpacity,
}: HeroSectionProps) {
  return (
    <Section
      bgColor={bgColor}
      size={size}
      bgImage={bgImage}
      bgImageOpacity={bgImageOpacity}
    >
      <Container>
        <Box textAlign="center">
          <SectionHeader
            title={title}
            subtitle={subtitle}
            size={6}
            className="about"
          />
        </Box>
      </Container>
    </Section>
  );
}

export default HeroSection2;
