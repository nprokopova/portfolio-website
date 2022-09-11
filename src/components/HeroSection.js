import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LinkMui from "@material-ui/core/Link";
import Link from "next/link";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `0 ${theme.spacing(3)}px`,
    color: 'white',
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    textShadow: '1px 1px 5px black',
    [theme.breakpoints.up('md')]: {
      textShadow: 'none'
    },
  },
  image: {
    margin: "0 auto",
    maxWidth: 570,
    display: "block",
    height: "auto",
    width: "100%",
    visibility: 'hidden'
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
    <Section
      bgColor={props.bgColor}
      size={props.size}
      py={0}
    >
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
                <Link href="/about" passHref={true}>
                  <LinkMui className={classes.link}>About Me</LinkMui>
                </Link>

                <Link href="/contact" passHref={true}>
                  <LinkMui className={classes.link}>Contact</LinkMui>
                </Link>
              </Box>
            </Grid>

            <Grid item={true} xs={12} md={true}>
            </Grid>
          </Grid>
        </Container>
        </div>
      
    </Section>
  );
}

export default HeroSection;
