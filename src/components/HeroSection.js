import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LinkMui from "@material-ui/core/Link";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `0 ${theme.spacing(3)}px`,
  },
  image: {
    margin: "0 auto",
    maxWidth: 570,
    display: "block",
    height: "auto",
    width: "100%",
  },
  link: {
    color: "inherit",
    lineHeight: 1,
    fontSize: '1.2rem',
    "&:not(:last-of-type)": {
      marginRight: "1.2rem",
    },
  }
}));

function HeroSection(props) {
  const classes = useStyles();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className={classes.container}>
        <Grid container={true} alignItems="center" spacing={6}>
          <Grid container={true} item={true} direction="column" xs={12} md={6}>
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
            <figure>
              <img
                src={props.image}
                alt="illustration"
                className={classes.image}
              />
            </figure>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default HeroSection;
