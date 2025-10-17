import React, { useState, useEffect, useRef } from "react";
import Script from "next/script";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LinkMui from "@mui/material/Link";
import { makeStyles } from "@mui/styles";

import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";
import { Theme } from "@mui/material/styles";

import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: `0 ${theme.spacing(3)}`,
    color: "white",
    height: "600px",
    display: "flex",
    alignItems: "center",
    textShadow: "1px 1px 5px black",
    [theme.breakpoints.up("md")]: {
      textShadow: "none",
    },
  },
  image: {
    margin: "0 auto",
    maxWidth: 570,
    display: "block",
    height: "auto",
    width: "100%",
    visibility: "hidden",
  },
  link: {
    color: "inherit",
    lineHeight: 1,
    fontSize: "1.2rem",
    "&:not(:last-of-type)": {
      marginRight: "1.2rem",
    },
  },
}));

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  bgColor?: "default" | "light" | "primary" | "secondary" | "transparent";
  size?: "normal" | "medium" | "large" | "auto";
}

function HeroSection({ title, subtitle, bgColor, size }: HeroSectionProps) {
  const classes = useStyles();
  const [vantaEffect, setVantaEffect] = useState<{ destroy: () => void }>();
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          baseColor: 0x1a59,
          size: 0.6,
          xOffset: 0.06,
          mobileScale: 0.5,
        })
      );
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <Section bgColor={bgColor} size={size} py={0}>
      <div ref={myRef}>
        <Container className={classes.container}>
          <Grid container={true} alignItems="center" spacing={6}>
            <Grid
              container={true}
              item={true}
              direction="column"
              xs={12}
              md={6}
            >
              <Box textAlign={{ xs: "center", md: "left" }}>
                <SectionHeader title={title} subtitle={subtitle} size={4} />

                <LinkMui
                  href="/about"
                  className={classes.link}
                  underline="hover"
                >
                  About Me
                </LinkMui>

                <LinkMui
                  href="/contact"
                  className={classes.link}
                  underline="hover"
                >
                  Contact
                </LinkMui>
              </Box>
            </Grid>

            <Grid item={true} xs={12} md={true}></Grid>
          </Grid>
        </Container>
      </div>
    </Section>
  );
}

export default HeroSection;
