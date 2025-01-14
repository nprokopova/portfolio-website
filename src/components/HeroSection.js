import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LinkMui from "@mui/material/Link";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import withTheme from "@mui/styles/withTheme";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";

const useStyles = makeStyles((theme) => ({
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

function HeroSection(props) {
  const classes = useStyles();
  const [vantaEffect, setVantaEffect] = useState(0);
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
          size: 0.9,
          xOffset: 0.06,
          mobileScale: 0.5,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Section bgColor={props.bgColor} size={props.size} py={0}>
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
                <SectionHeader
                  title={props.title}
                  subtitle={props.subtitle}
                  size={4}
                />

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
