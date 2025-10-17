import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import { links } from "../data/links";

interface LinksProps {
  title: string;
  subtitle?: string;
  bgColor?: "default" | "light" | "primary" | "secondary" | "transparent";
  size?: "normal" | "medium" | "large" | "auto";
  bgImage?: string;
  bgImageOpacity?: number;
}

function Links({
  title,
  subtitle,
  bgColor,
  size,
  bgImage,
  bgImageOpacity,
}: LinksProps) {
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
            size={4}
            textAlign="center"
          />
          <Grid container={true} justifyContent="center">
            {links.map((item, index) => (
              <Grid item={true} xs={12} md="auto" key={index}>
                <Box py={2} px={3}>
                  <a
                    title={item.name}
                    href={item.href}
                    download
                    target="_blank"
                  >
                    <img src={item.image} width={item.width} alt={item.name} />
                  </a>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}

export default Links;
